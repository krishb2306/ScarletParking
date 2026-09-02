<div align="center">

# ScarletParking

**Know exactly where your Rutgers parking permit is valid**

[![Download on the App Store](https://img.shields.io/badge/Download_on_the-App_Store-0D96F6?style=for-the-badge&logo=apple&logoColor=white)](https://apps.apple.com/us/app/scarletparking/id6744491108)

[![React Native](https://img.shields.io/badge/React_Native-0.76-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-52-000020?style=flat-square&logo=expo&logoColor=white)](https://expo.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Platform](https://img.shields.io/badge/Platform-iOS-lightgrey?style=flat-square&logo=apple)](https://apps.apple.com/us/app/scarletparking/id6744491108)

</div>

---

## About

Rutgers publishes parking eligibility as a sprawl of PDFs: dozens of permit types, five campuses, hundreds of numbered lots, and per-lot time windows that shift by day of week. Figuring out whether you can legally park in Lot 60B at 4:45 PM on a Tuesday means cross-referencing several documents while sitting in your car.

ScarletParking collapses that into one answer. Pick your permit once, and the app shows only the lots you're allowed to park in — on an interactive map and in a searchable list — filtered against the current day and time.

**Live on the App Store:** [apps.apple.com/us/app/scarletparking](https://apps.apple.com/us/app/scarletparking/id6744491108)

---

## Screenshots

<div align="center">

| List View | Map View | Settings |
|:---:|:---:|:---:|
| <img src="screenshots/list-view.png" width="260" alt="List view showing eligible lots and their hours for a Busch Commuter permit" /> | <img src="screenshots/map-view.png" width="260" alt="Map view with clustered pins for every currently valid lot" /> | <img src="screenshots/settings.png" width="260" alt="Settings screen with campus, primary permit, and secondary permit selection" /> |
| Every eligible lot grouped by campus, with the exact weekday and weekend windows each one is open to your permit. | Only the lots valid *right now* appear as pins. Tap one for its hours and turn-by-turn directions. | Set your campus and permit once. Holders of two permits can configure a secondary pass as well. |

</div>

---

## Features

**Permit-aware filtering** — Choose from 30+ permit types across New Brunswick, Newark, Camden, and Rutgers Health. Every screen in the app reflects that choice.

**Time-aware map** — A lot only shows up as a pin when your permit is actually valid there at that moment. Lot 60B disappears from the map at 5:59 PM and appears at 6:00.

**"Set Time" planning mode** — Check eligibility for a future time instead of the current one. Useful before an evening class or a weekend event.

**Marker clustering** — All of Rutgers' lots on one map would be an unreadable mess of pins, so nearby markers collapse into counted clusters and expand as you zoom.

**One-tap directions** — Selecting a lot hands its coordinates straight to Apple Maps.

**Location awareness** — Your live position is drawn on the map so you can judge which valid lot is actually closest.

**Campus jump buttons** — Snap the viewport to Livingston, Busch, College Ave, Cook/Douglass, Newark, or Camden without pinching around.

**Satellite toggle** — Switch between standard and satellite basemaps for lots that are easier to recognize from the air.

**Persistent preferences** — Permit and campus selections are stored locally with AsyncStorage and survive restarts.

**In-app update prompt** — The app queries the iTunes lookup API on launch and nudges users to the App Store when their build is behind.

---

## How it works

The core of the app is an eligibility engine that answers one question: *is this permit valid in this lot at this instant?*

```
allLots.js              → every Rutgers lot, with { id, title, coordinate }
LotTimes/<permit>Lots.js → per-permit rules: { name, time, schedule[] }
ParkingPassContext.js    → global state: active permit, list-view data, active ruleset ID
```

Each permit gets its own ruleset file (`bccLots.js` for Busch Commuter, `nbrlivLots.js` for Livingston Resident, and so on — 20 in total). A ruleset entry pairs a lot name with a machine-readable schedule:

```js
{
  name: "Lot 60B",
  time: "Monday - Friday, 6PM - 12AM; Saturday - Sunday, 6AM - 12AM",
  schedule: [
    { days: ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      startTime: "6:00 PM", endTime: "12:00 AM" },
    { days: ["Saturday","Sunday"],
      startTime: "6:00 AM",  endTime: "12:00 AM" }
  ]
}
```

On render, `MapScreen` walks every lot in `allLots`, looks it up in the active ruleset, and passes its schedule through `isWithinSchedule()`. That function normalizes the reference time to `America/New_York`, converts times to minutes-since-midnight, matches the weekday, and handles ranges that wrap past midnight (a 6 PM – 2 AM window is valid at 1 AM the next day). Only lots that pass become map markers.

Separating the human-readable `time` string from the structured `schedule` array means the list view can display Rutgers' own phrasing while the map filters on parsed values — no reformatting or reparsing of display text.

---

## Tech stack

| | |
|---|---|
| **Framework** | React Native 0.76 + Expo SDK 52 (new architecture enabled) |
| **Language** | JavaScript |
| **Navigation** | React Navigation — bottom tabs + stack |
| **Maps** | `react-native-maps` with `react-native-map-clustering` |
| **Location** | `expo-location` (foreground permissions) |
| **Storage** | `@react-native-async-storage/async-storage` |
| **Time** | `moment` + `@react-native-community/datetimepicker` |
| **UI** | `react-native-dropdown-picker`, Ionicons, custom dark-mode stylesheets |
| **Build & release** | EAS Build / EAS Submit, Xcode |

---

## Project structure

```
ScarletParking/
├── App.js                   # List, Map, and Settings screens + tab navigator
├── ParkingPassContext.js    # React Context: active permit, campus, list-view data
├── allLots.js               # Master lot list with coordinates
├── LotTimes/                # One eligibility ruleset per permit type
│   ├── bccLots.js           #   Busch Commuter
│   ├── cacLots.js           #   College Ave Commuter
│   ├── nbrlivLots.js        #   Livingston Resident
│   └── ...                  #   17 more
├── assets/                  # Icons, splash screens, map overlays
├── app.json                 # Expo config, bundle ID, iOS permission strings
└── eas.json                 # EAS build and submit profiles
```

---

## Impact

- **Top 100** in Apple's Navigation category
- **12,000+** App Store impressions
- **1,500+** downloads
- **5-star** average rating

---

## Authors

Built by Krishanth Babu and Eashan Patel.

## Disclaimer

ScarletParking is an independent project and is not affiliated with, endorsed by, or maintained by Rutgers University. Parking rules change — always confirm against posted signage and [Rutgers Department of Transportation Services](https://ipo.rutgers.edu/dots) before parking.

## License

Released under the [0BSD](https://opensource.org/license/0bsd) license.
