//import * as React from 'react';
import { NavigationContainer, useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet,Animated,Alert,Platform, LogBox, StatusBar, AppState, Switch, Image,ScrollView, FlatList, ImageBackground, SafeAreaView,Dimensions,Modal, Text, TouchableOpacity, View,Linking} from 'react-native';
import MapView from "react-native-map-clustering";
import { Marker } from "react-native-maps";
import React, { createContext, useContext, useState, useEffect, useRef} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import DropDownPicker from 'react-native-dropdown-picker';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as Location from 'expo-location'; // For Expo Location
import Ionicons from 'react-native-vector-icons/Ionicons'; 
//import { useState, useEffect } from 'react';\
import { ParkingPassProvider, ParkingPassContext } from './ParkingPassContext';
//import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';



function ListScreen() {
  const { currPass, currListViewInfo } = useContext(ParkingPassContext);
  const [listInfo, setListInfo] = useState(currListViewInfo[0] || {});
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("Busch");
  const [items, setItems] = useState([
    { label: 'Busch', value: 'Busch' },
    { label: 'College Ave', value: 'College Ave' },
    { label: 'Cook/Douglass', value: 'Cook/Douglass' },
    { label: 'Livingston', value: 'Livingston' },
    { label: 'Newark', value: 'Newark' },
    { label: 'Camden', value: 'Camden' },
    { label: 'RBHS', value: 'Health - Piscataway' }
  ]);

  const navigation = useNavigation();  // For navigation

  useEffect(() => {
    const selectedInfo = currListViewInfo.find(info => info.campus === value);
    if (selectedInfo) {
      setListInfo(selectedInfo);
    }
  }, [currListViewInfo, value]);

  const handleLotPress = (pressedLotName, pressedLotTimes) => {
    // Navigate to MapScreen and pass the lot info
    navigation.navigate('Map', {
      pressedLotName: pressedLotName,
      pressedLotTimes: pressedLotTimes, 
    });
  };

  return (
    <SafeAreaView style={listViewStyles.safeAreaContainer}>
      <View style={listViewStyles.container}>
        <View style={listViewStyles.headerContainer}>
          <Text style={listViewStyles.headerLabel}>Information for</Text>
          <Text style={listViewStyles.headerTitle}>{currPass}</Text>
        </View>

        <View style={listViewStyles.dropdownRow}>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            onSelectItem={(selectedItem) => {
              const selectedCampus = selectedItem.value;
              const selectedInfo = currListViewInfo.find(info => info.campus === selectedCampus);
              if (selectedInfo) setListInfo(selectedInfo);
            }}
            style={listViewStyles.dropdown}
            dropDownContainerStyle={listViewStyles.dropdownContainer}
            textStyle={{ color: 'white' }}
            ArrowDownIconComponent={({ style }) => (
              <Ionicons name="chevron-down" size={18} color="white" style={style} />
            )}
            ArrowUpIconComponent={({ style }) => (
              <Ionicons name="chevron-up" size={18} color="white" style={style} />
            )}
          />
        </View>

        <FlatList
          data={listInfo.lots}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{ paddingBottom: 16 }}
          renderItem={({ item }) => (
            <View style={listViewStyles.card}>
                <View style={listViewStyles.cardRow}>
                  <Ionicons name="location-outline" size={20} color="red" style={listViewStyles.icon} />
                  <Text style={listViewStyles.lotName} onPress={() => console.log(item)}>{item.name}</Text>
                </View>
 
              <FlatList
                data={item.timeslots}
                keyExtractor={(item, index2) => index2.toString()}
                contentContainerStyle={{ paddingBottom: 5 }}
                renderItem={({ item }) => (
                  <View style={listViewStyles.cardRow}>
                    <Ionicons name="time-outline" size={18} color="#aaa" style={listViewStyles.icon} />
                    <Text style={listViewStyles.cardText}> {item} </Text>
                  </View>
                )}
              />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

function MapScreen() {
  const { currPass, currMapViewID } = useContext(ParkingPassContext);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedMarker, setSelectedMarker] = React.useState(null);
  const [hideTimeout, setHideTimeout] = useState(null);
  const APP_STORE_ID = '6744491108';
  const [mapType, setMapType] = useState('standard'); // or 'standard' by default
  const [selectedOption, setSelectedOption] = useState('current'); // Default to 'Current Time'
  const lotTimesMap = {
    bccLots: require('./LotTimes/bccLots'),
    cacLots: require('./LotTimes/cacLots'),
    cccLots: require('./LotTimes/cccLots'),
    dccLots: require('./LotTimes/dccLots'),
    lccLots: require('./LotTimes/lccLots'),
    nbncLots: require('./LotTimes/nbncLots'),
    nboclcLots: require('./LotTimes/nboclcLots'),
    nbocllivLots: require('./LotTimes/nbocllivLots'),
    nboclrbsLots: require('./LotTimes/nboclrbsLots'),
    nbr99Lots: require('./LotTimes/nbr99Lots'),
    nbrbrsLots: require('./LotTimes/nbrbrsLots'),
    nbrgibLots: require('./LotTimes/nbrgibLots'),
    nbrhelLots: require('./LotTimes/nbrhelLots'),
    nbrhndLots: require('./LotTimes/nbrhndLots'),
    nbrjamLots: require('./LotTimes/nbrjamLots'),
    nbrkatLots: require('./LotTimes/nbrkatLots'),
    nbrlipLots: require('./LotTimes/nbrlipLots'),
    nbrlivLots: require('./LotTimes/nbrlivLots'),
    nbrnlsLots: require('./LotTimes/nbrnlsLots'),
    nbrwooLots: require('./LotTimes/nbrwooLots'),
  };
  
  //console.log(currMapViewID)
  const cccLots = lotTimesMap[currMapViewID] || [];

  //const bccLots = require('/LotTimes/' + currMapViewID);
  //const cccLots = require('/LotTimes/' + currMapViewID);
  const allLots = require('./allLots');

  const mapViewRef = useRef(null);

  const [selectedTime, setSelectedTime] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [hasZoomedToUser, setHasZoomedToUser] = useState(false);
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);

  const temp = [];
  const markers = [];

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [latestVersion, setLatestVersion] = useState(null);

useEffect(() => {
  const checkForAppUpdate = async () => {
    try {
      const response = await fetch(`https://itunes.apple.com/lookup?id=${APP_STORE_ID}`);
      const data = await response.json();
      const appStoreVersion = data.results[0]?.version;
      const currentVersion = Application.nativeApplicationVersion;
      //const currentVersion = '1.0.0'; // 👈 fake an old version for testing


      if (appStoreVersion && isNewerVersion(appStoreVersion, currentVersion)) {
        setLatestVersion(appStoreVersion);
        setShowUpdateModal(true);
      }
    } catch (error) {
    
    }
  };

  checkForAppUpdate();
}, []);

function isNewerVersion(latest, current) {
  const latestParts = latest.split('.').map(Number);
  const currentParts = current.split('.').map(Number);
  for (let i = 0; i < latestParts.length; i++) {
    if ((latestParts[i] ?? 0) > (currentParts[i] ?? 0)) return true;
    if ((latestParts[i] ?? 0) < (currentParts[i] ?? 0)) return false;
  }
  return false;
}


  const route = useRoute(); // Get route params
  const {pressedLotName, pressedLotTimes} = route.params || {}; // Extract the params

  useEffect(() => {
    let isMounted = true;
    let locationInterval;

    const fetchLocation = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }

        let loc = await Location.getCurrentPositionAsync({});
        if (isMounted) {
          setLocation(loc.coords);
        }
      } catch (err) {
        console.error(err);
      }
    };

    // Fetch immediately on mount
    fetchLocation();

    // Then fetch every 10 seconds
    locationInterval = setInterval(fetchLocation, 10000);

    return () => {
      isMounted = false;
      clearInterval(locationInterval);
    };
  }, []);

  useEffect(() => {
    const checkFirstLaunch = async () => {
      try {
        const hasLaunched = await AsyncStorage.getItem('hasLaunched');
        if (hasLaunched === null) {
          await AsyncStorage.setItem('hasLaunched', 'true');
          setShowWelcomeModal(true);
        }
      } catch (err) {
        console.error('Error checking first launch:', err);
      }
    };
  
    checkFirstLaunch();
  }, []);
  
  const handleClusterPress = (cluster) => {
    const { geometry, properties } = cluster;
    const coordinates = {
      latitude: geometry.coordinates[1],
      longitude: geometry.coordinates[0],
    };
  
    // Custom zoom in (adjust delta for zoom level)
    mapViewRef.current?.animateToRegion(
      {
        ...coordinates,
        latitudeDelta: 0.005,      // 👈 control zoom here
        longitudeDelta: 0.005,
      },
      500
    );
  };
const [shouldRenderMap, setShouldRenderMap] = useState(false);

  const openDirections = (latitude, longitude) => {
    const url = `maps://?daddr=${latitude},${longitude}`;
    Linking.openURL(url).catch((err) =>
      console.error('An error occurred', err)
    );
  };

  const handleMarkerPress = (marker) => {
    // Clear any existing hide timeout
    if (hideTimeout) {
      clearTimeout(hideTimeout);
      setHideTimeout(null);
    }
  
    // Center the map on the selected marker
    mapViewRef.current?.animateToRegion(
      {
        latitude: marker.coordinate.latitude,
        longitude: marker.coordinate.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      },
      1000 // duration in ms
    );
  
    setSelectedMarker(marker);
  };
  
  const handleMapPress = () => {
    // Set a delay to hide the button
    const timeout = setTimeout(() => {
      setSelectedMarker(null);
    },150); // 1000ms = 1 second delay
    setHideTimeout(timeout);
  };

  const handleSelection = (value) => {
    setSelectedOption(value);
    if (value === 'set') {
      setShowTimePicker(true);
    }
    else{
      setShowTimePicker(false);
    }
  };


  const zoomRegions = {
    region1: {
      latitude: 40.52273859070632,
      longitude: -74.43672786988198,
      latitudeDelta: 0.02,
      longitudeDelta: 0.02,
    },
    region2: {
      latitude: 40.52499903176381, 
      longitude: -74.46390068728512, 
      latitudeDelta: 0.02,
      longitudeDelta: 0.02,
    },
    region3: {
      latitude: 40.50267363651251,
      longitude: -74.45068401965526, 
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    },
    region4: {
      latitude: 40.481393155087375,
      longitude: -74.43496776734023, 
      latitudeDelta: 0.02,
      longitudeDelta: 0.02,
    },
    region5: {
      latitude: 40.742050472702175,
      longitude: -74.17392133620385, 
      latitudeDelta: 0.02,
      longitudeDelta: 0.02,
    },
    region6: {
      latitude: 39.94860257044758,
      longitude: -75.12142556761985, 
      latitudeDelta: 0.02,
      longitudeDelta: 0.02,
    }
  };

  const onTimeChange = (event, selectedDate) => {
    //setShowTimePicker(false); // Hide the picker after selection
    if (Platform.OS === 'android') {
      setShowTimePicker(false); // 🔒 explicitly hide the picker on Android
    }
    if (selectedDate) {
      setSelectedTime(selectedDate);
      //console.log("Selected Time:", selectedDate.toLocaleTimeString());
    }
  };

  


  // Zoom to the selected region
  const zoomToRegion = (region) => {
    mapViewRef.current.animateToRegion(region, 1000); // 1000 ms for smooth zooming
    setModalVisible(false);
    setSelectedMarker(null); // Close the modal after zooming
  };

  // const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCurrentTime(new Date());
  //   }, 1000); // Update every second

  //   return () => clearInterval(intervalId); // Clear interval on unmount
  // }, []);
 
  
  function isWithinSchedule(schedule, date) {
    const timeZone = "America/New_York";
    const currentDate = selectedOption === 'current' ? new Date() : selectedTime;
    // Convert UTC date to local time
    //const options = { timeZone, weekday: "long", hour: "2-digit", minute: "2-digit" };
    const localDate = moment(currentDate).format('ddd MMM DD YYYY HH:mm:ss ZZ');
    const currentDay = new Date(localDate).toLocaleDateString("en-US", { weekday: "long" });

// Extract hours and minutes from the localDate string
const timeString = localDate.split(" ")[4]; // Extract the "HH:mm:ss" part
const [hours, minutes] = timeString.split(":").map(Number);

const currentTime = hours * 60 + minutes; // Calculate minutes since midnight

//console.log("Local Date:", localDate);
//console.log("Current Day:", currentDay);
//console.log("Current Time (minutes):", currentTime);
  
    // Helper to parse time into minutes since midnight
    function parseTime(time) {
      const [hour, minute] = time
        .toLowerCase()
        .replace("am", "")
        .replace("pm", "")
        .split(":")
        .map(Number);
      const isPM = time.toLowerCase().includes("pm");
      return (isPM && hour !== 12 ? hour + 12 : hour % 12) * 60 + (minute || 0);
    }
  
    // Check if the current time is within any schedule range
    return schedule.some(({ days, startTime, endTime }) => {
      const start = parseTime(startTime);
      const end = parseTime(endTime);
      const dayMatches = days.includes(currentDay);
  
      //console.log(`Checking schedule: Days = ${days.join(", ")}, Time = ${startTime} - ${endTime}`);
      //console.log(`Day Matches: ${dayMatches}`);
  
      if (!dayMatches) return false;
  
      // Handle time ranges crossing midnight
      let timeMatches;
      if (start > end) {
        timeMatches = currentTime >= start || currentTime < end;
      } else {
        timeMatches = currentTime >= start && currentTime < end;
      }
      //console.log(`Time Matches: ${timeMatches}`);
      return timeMatches;
    });
  }
  
  allLots.forEach(lot => {
    // Check if the current lot from allLots exists in bccLots
    let foundLot = cccLots.find(cccLot => cccLot.name === lot.title);
    // if (foundLot) {
    //   markers.push({
    //     id: lot.id,
    //     title: lot.title,
    //     coordinate: lot.coordinate,
    //     description: foundLot.time
    //   });
    // }
    if (foundLot) {
      const isScheduleValid = isWithinSchedule(foundLot.schedule, new Date());
      if(isScheduleValid)
        markers.push({
            id: lot.id,
            title: lot.title,
            coordinate: lot.coordinate,
            description: foundLot.time  
        });
    }
});
const zoomToLocation = () => {
  if (location && mapViewRef.current) {
    mapViewRef.current.animateToRegion(
      {
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      },
      1000
    );
  }
};


  return (
    <SafeAreaView style={styles.safeAreaContainer}>
    <View style={styles.container}>
    
      <MapView
      ref={mapViewRef}
      clusterColor='#D4301F'
      mapType={mapType}
      onClusterPress={handleClusterPress}
      minPoints={2}
      minZoom = {1}
      userInterfaceStyle='dark'
       style={styles.mapStyle}
       initialRegion={{
        latitude: 40.504853287623135, 
        longitude: -74.44761255910845, 
        latitudeDelta: 0.057,
        longitudeDelta: 0.057, 
      }}
      onPress={handleMapPress} // Reset the selected marker on map press
     >
      {location && (
  <Marker
    coordinate={{
      latitude: location.latitude,
      longitude: location.longitude,
    }}
    title="Your Location"
    >
    <Ionicons name="person-circle-sharp" size={30} color="lightblue" />
  </Marker>
)}

{markers.map((marker) => (
  <Marker
    key={marker.id}
    coordinate={marker.coordinate}
    onPress={(e) => {
      e.stopPropagation();
      handleMarkerPress(marker);
    }}
  >
    <View style={styles.customMarker}>
      <Ionicons name="location-sharp" size={30} color="#FF3B30" />
    </View>
  </Marker>
))}


     </MapView>
     {selectedMarker && (
  <View style={styles.markerDetails}>
    <View style={styles.markerTextContainer}>
      <Text style={styles.markerTitle}>{selectedMarker.title}</Text>
      <Text style={styles.markerSubTitle}>{selectedMarker.description}</Text>
    </View>

    <TouchableOpacity
  style={styles.directionsButton}
  onPress={() =>
    openDirections(
      selectedMarker.coordinate.latitude,
      selectedMarker.coordinate.longitude
    )
  }
>
  <Ionicons name="navigate-outline" size={18} color="#fff" />
  <Text style={styles.directionsButtonText}>Directions</Text>
</TouchableOpacity>
  </View>
)}


      <TouchableOpacity
                style={styles.passView}
                disabled = {true}
              >
                <Text style = {styles.passViewText}>{currPass}</Text>

      </TouchableOpacity>

  

     <TouchableOpacity
          style={styles.modalButton}
          onPress={() => {setModalVisible(true); setSelectedMarker(null)}}
        >
          <Image 
            source={require('./assets/legend2.png')}  // Add your image path here
            style={styles.buttonImage}
          />

    </TouchableOpacity>
    <TouchableOpacity
          style={styles.modalButton2}
          onPress={() => {
            setMapType(prev =>
              prev === 'standard' ? 'satellite' : 'standard'
            );
          }}
        >
          <Ionicons name="layers-outline" size={22} color="white" />

    </TouchableOpacity>

    <TouchableOpacity
  style={styles.resetButton}
  onPress={() => {
    if (!hasZoomedToUser && location) {
      // Zoom to user location
      mapViewRef.current.animateToRegion(
        {
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        },
        1000
      );
    } else {
      // Zoom to initial location
      mapViewRef.current.animateToRegion(
        {
          latitude: 40.504853287623135,
          longitude: -74.44761255910845,
          latitudeDelta: 0.057,
          longitudeDelta: 0.057,
        },
        1000
      );
    }

    // Toggle the zoom flag
    setHasZoomedToUser(!hasZoomedToUser);

    // Optionally deselect any marker
    setSelectedMarker(null);
  }}
>
  <Image 
    source={require('./assets/target.png')}
    style={styles.targetImage}
  />
</TouchableOpacity>
{showUpdateModal && (
  <Modal transparent animationType="fade" visible={showUpdateModal}>
    <View style={updateModalStyles.overlay}>
      <View style={updateModalStyles.container}>
        <Text style={updateModalStyles.title}>🔔 Update Available</Text>
        <Text style={updateModalStyles.message}>
          A newer version ({latestVersion}) of ScarletParking is available on the App Store.
        </Text>
        <TouchableOpacity
          style={updateModalStyles.button}
          onPress={() => {
            Linking.openURL(`https://apps.apple.com/app/id6744491108`);
            setShowUpdateModal(false);
          }}
        >
          <Text style={updateModalStyles.buttonText}>Update Now</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setShowUpdateModal(false)}>
          <Text style={updateModalStyles.skipText}>Not now</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
)}


{showWelcomeModal && (
  <Modal
    animationType="fade"
    transparent={true}
    visible={showWelcomeModal}
    onRequestClose={() => setShowWelcomeModal(false)}
  >
    <View style={welcomeModalStyles.overlay}>
      <View style={welcomeModalStyles.container}>
        <Text style={welcomeModalStyles.title}>🎉 Welcome to ScarletParking 🎉</Text>
        <Text style={welcomeModalStyles.message}>
          We're glad you're here. Use the map to view available lots based on your parking pass, and select your pass in the settings page!
        </Text>

        <TouchableOpacity
          style={welcomeModalStyles.button}
          onPress={() => setShowWelcomeModal(false)}
        >
          <Text style={welcomeModalStyles.buttonText}>Let's Go!</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
)}

<Modal
  animationType="slide"
  transparent={true}
  visible={modalVisible}
  onRequestClose={() => setModalVisible(false)}
>
  <View style={styles.modalOverlay}>
    <View style={styles.modalContent}>

      {/* Close Button */}
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => setModalVisible(false)}
      >
        <Text style={styles.closeButtonText}>✕</Text>
      </TouchableOpacity>

      {/* Radio Selector Row */}
      <View style={styles.radioRow}>
        <TouchableOpacity
          style={[
            styles.radioOption,
            selectedOption === 'current' && styles.radioOptionActive,
          ]}
          onPress={() => handleSelection('current')}
        >
          <Text style={styles.radioText}>Current Time</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.radioOption,
            selectedOption === 'set' && styles.radioOptionActive,
          ]}
          onPress={() => handleSelection('set')}
        >
          <Text style={styles.radioText}>Set Time</Text>
        </TouchableOpacity>
      </View>

      {/* Time Picker (Only shown if set) */}
      {showTimePicker && (
        <DateTimePicker
          value={selectedTime}
          mode={Platform.OS === 'ios' ? 'datetime' : 'time'} // Use 'default' for Android
          display={Platform.OS === 'ios' ? 'spinner' : 'default'} // Use 'default' for Android
          onChange={onTimeChange}
          style={{ marginVertical: 10 }}
          textColor='white'
          //{...(Platform.OS === 'ios' ? { textColor: "red"} : {})}
        />
      )}

      {/* Zoom Region Grid */}
      <View style={styles.zoomButtonGrid}>
        <TouchableOpacity
          style={styles.zoomButton}
          onPress={() => zoomToRegion(zoomRegions.region1)}
        >
          <Text style={styles.zoomButtonText}>Livingston</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.zoomButton}
          onPress={() => zoomToRegion(zoomRegions.region2)}
        >
          <Text style={styles.zoomButtonText}>Busch</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.zoomButton}
          onPress={() => zoomToRegion(zoomRegions.region3)}
        >
          <Text style={styles.zoomButtonText}>College Ave</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.zoomButton}
          onPress={() => zoomToRegion(zoomRegions.region4)}
        >
          <Text style={styles.zoomButtonText}>Cook/Doug</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.zoomButton}
          onPress={() => zoomToRegion(zoomRegions.region5)}
        >
          <Text style={styles.zoomButtonText}>Newark</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.zoomButton}
          onPress={() => zoomToRegion(zoomRegions.region6)}
        >
          <Text style={styles.zoomButtonText}>Camden</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
</Modal>
    </View>
    </SafeAreaView>
  );
}

function SettingsScreen() {
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs();//Ignore all log notifications

  const { currPass, currCity, updateParkingPass, updateCity } = useContext(ParkingPassContext);


  const [citiesDropdownOpen, setCitiesDropdownOpen] = useState(false);
  const [allCities, setAllCities] = useState([
    { label: 'New Brunswick', value: 'NewBrunswick' },
    { label: 'Newark', value: 'Newark' },
    { label: 'Camden', value: 'Camden' },
    { label: 'Rutgers Health', value: 'RutgersHealth' },
  ]);


  const [open, setOpen] = useState(false);
  const [allParkingPasses, setAllParkingPasses] = useState({
    NewBrunswick: [
      { label: 'Busch Commuter', value: 'Busch Commuter' },
      { label: 'Busch Off-Campus Living', value: 'Busch Off-Campus Living' },
      { label: 'Busch Resident', value: 'Busch Resident' },
      { label: 'College Ave Commuter', value: 'College Ave Commuter' },
      { label: 'Cook Commuter', value: 'Cook Commuter' },
      { label: 'Cook Off-Campus Living', value: 'Cook Off-Campus Living' },
      { label: 'Cook Resident', value: 'Cook Resident' },
      { label: 'Douglass Commuter', value: 'Douglass Commuter' },
      { label: 'Gibbons Resident', value: 'Gibbons Resident' },
      { label: 'Helyar Resident', value: 'Helyar Resident' },
      { label: 'Henderson Resident', value: 'Henderson Resident' },
      { label: 'Jameson Resident', value: 'Jameson Resident' },
      { label: 'Katzenbach Resident', value: 'Katzenbach Resident' },
      { label: 'Lippincott Resident', value: 'Lippincott Resident' },
      { label: 'Livingston Commuter', value: 'Livingston Commuter' },
      { label: 'Livingston Off-Campus Living', value: 'Livingston Off-Campus Living' },
      { label: 'Livingston Resident', value: 'Livingston Resident' },
      { label: 'New Brunswick Night Commuter', value: 'New Brunswick Night Commuter' },
      { label: 'Nicholas Resident', value: 'Nicholas Resident' },
      { label: 'Woodbury Resident', value: 'Woodbury Resident' },
    ],
    Newark: [
      { label: 'Newark Economy Commuter', value: 'Newark Economy Commuter' },
      { label: 'Newark Off-Campus Living', value: 'Newark Off-Campus Living' },
      { label: 'Newark Premium Commuter', value: 'Newark Premium Commuter' },
      { label: 'Newark Resident', value: 'Newark Resident' },
    ],
    Camden: [
      { label: 'Camden Commuter', value: 'Camden Commuter' },
      { label: 'Camden Night Commuter', value: 'Camden Night Commuter' },
      { label: 'Camden Off-Campus Living', value: 'Camden Off-Campus Living' },
      { label: 'Camden Resident', value: 'Camden Resident' },
    ],
    RutgersHealth: [
      { label: 'Rutgers Health Commuter', value: 'Rutgers Health Commuter' },
      { label: 'Rutgers Health Resident', value: 'Rutgers Health Resident' },
    ],
  });
  const [displayedPasses, setDisplayedPasses] = useState([]);

  useEffect(() => {
    if (currCity) {
      setDisplayedPasses(allParkingPasses[currCity] || []);
    }
  }, [currCity]);

  const openEmail = () => {
    const email = 'krish2306@icloud.com';
    const url = `mailto:${email}`;
  
    Linking.openURL(url).catch(err => {
      console.error('Failed to open mail app:', err);
    });
  };

  const [locationStatus, setLocationStatus] = useState(null);
  const [appState, setAppState] = useState(AppState.currentState);
  const openAppSettings = () => {
    Linking.openSettings().catch(err => {
      console.error('Unable to open app settings:', err);
    });
  };

  const checkLocationPermission = async () => {
    const { status } = await Location.getForegroundPermissionsAsync();
    setLocationStatus(status);
  };

  useEffect(() => {
    checkLocationPermission(); // First run
    const appStateListener = AppState.addEventListener('change', (nextAppState) => {
      if (nextAppState === 'active' && appState.match(/inactive|background/)) {
        //console.log('App came to the foreground, rechecking permission...');
        checkLocationPermission(); // Recheck permission when app comes to the foreground
      }
      setAppState(nextAppState);
    });

    return () => {
      appStateListener.remove();
    };
  }, [appState]);

  useFocusEffect(
    React.useCallback(() => {
      //console.log('Screen focused, rechecking permission...');
      checkLocationPermission();
    }, [])
  );

  const locationStatusTextStyle = locationStatus === 'granted' 
    ? { color: 'limegreen' }  // Green for granted
    : locationStatus === 'denied' 
    ? { color: 'red' }    // Red for denied
    : { color: 'gray' };  // Default color for unknown status

  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  function linkToAppStore(){
    const APP_STORE_LINK = 'https://apps.apple.com/app/id6744491108?action=write-review';
    const PLAY_STORE_LINK = 'market://details?id=myandroidappid';
    Linking.openURL(APP_STORE_LINK).catch(err => console.error('An error occurred', err));
    //Linking.openURL(PLAY_STORE_LINK).catch(err => console.error('An error occurred', err));

}

  return (
    <ScrollView
      style={settingsPageStyles.container}
      contentContainerStyle={{ paddingBottom: 20 }}
      nestedScrollEnabled={true} 
    >
      
      <Text style={settingsPageStyles.header}>Settings</Text>

       {/* TOP CARD SECTION */}
       <View style={settingsPageStyles.topCard}>
        <Image
          source={require('./assets/app-1.png')} 
          style={settingsPageStyles.logo}
        />
        <View style={settingsPageStyles.cardTextContainer}>
          <Text style={settingsPageStyles.appName}>ScarletParking</Text>
          <Text style={settingsPageStyles.versionText}>Version 1.1.1</Text>
          <Text style={settingsPageStyles.madeByText}>
            Made by <Text style={settingsPageStyles.linkText} onPress={() => Linking.openURL('https://krishanthbabu.com/')}>Krishanth Babu</Text> <Text style={[settingsPageStyles.linkText, {textDecorationLine: "none"}]}>& </Text><Text style={settingsPageStyles.linkText} onPress={() => Linking.openURL('https://www.linkedin.com/in/eashanpatel/')}>Eashan Patel</Text>
          </Text>
        </View>
      </View>

      {/* PARKING PASS DROPDOWN */}
      <View style={settingsPageStyles.section}>
        <Text style={settingsPageStyles.sectionTitle}>Parking Pass</Text>
        
        <Text style={settingsPageStyles.helperTextAbove}>City</Text>
        <DropDownPicker
          open={citiesDropdownOpen}
          value={currCity}
          items={allCities}
          setOpen={setCitiesDropdownOpen}
          setValue={(cb) => {
            const selected = cb(currCity);
            updateCity(selected);
          }}
          setItems={setAllCities}
          style={settingsPageStyles.dropdown}
          textStyle={settingsPageStyles.dropdownText}
          dropDownContainerStyle={settingsPageStyles.dropdownContainer}
          listItemLabelStyle={{ color: 'white' }}
          zIndex={2000}
          zIndexInverse={1000}

          // 👇 Make the arrow white
          ArrowDownIconComponent={({ style }) => (
            <Ionicons name="chevron-down" size={20} color="white" style={style} />
          )}
          ArrowUpIconComponent={({ style }) => (
            <Ionicons name="chevron-up" size={20} color="white" style={style} />
          )}
        />

        <Text style={[settingsPageStyles.helperTextAbove, {marginTop: 6}]}>Permit</Text>
        <DropDownPicker
          open={open}
          value={currPass}
          items={displayedPasses}
          setOpen={setOpen}
          setValue={(cb) => {
            const selected = cb(currPass);
            updateParkingPass(selected);
          }}
          setItems={setAllParkingPasses}
          style={settingsPageStyles.dropdown}
          textStyle={settingsPageStyles.dropdownText}
          dropDownContainerStyle={settingsPageStyles.dropdownContainer}
          listItemLabelStyle={{ color: 'white' }}
          zIndex={1000}
          zIndexInverse={2000}

          // 👇 Make the arrow white
          ArrowDownIconComponent={({ style }) => (
            <Ionicons name="chevron-down" size={20} color="white" style={style} />
          )}
          ArrowUpIconComponent={({ style }) => (
            <Ionicons name="chevron-up" size={20} color="white" style={style} />
          )}
        />

        <Text style={settingsPageStyles.helperText}>You may need to refresh the app if changes do not reflect.</Text>
      </View>

      {/* GENERAL SETTINGS
      <View style={settingsPageStyles.section}>
        <Text style={settingsPageStyles.sectionTitle}>General</Text>

        <View style={settingsPageStyles.row}>
          <Text style={settingsPageStyles.label}>Dark Mode</Text>
          <Switch
          trackColor={{false: '#767577', true: 'limegreen'}}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
          />
        </View>
      </View> */}

      <View style={settingsPageStyles.section}>
  <Text style={settingsPageStyles.sectionTitle}>System Permissions</Text>
  <TouchableOpacity style={settingsPageStyles.cardRow} onPress={openAppSettings}>
    <Ionicons name="location-outline" size={22} color="white" style={settingsPageStyles.cardIcon} />
    <Text style={settingsPageStyles.cardLabel}>Location</Text>
    <Text style={[settingsPageStyles.cardStatus, locationStatusTextStyle]}>
            {locationStatus === 'granted'
            ? 'Granted'
            : locationStatus === 'denied'
            ? 'Denied'
            : 'Unknown'}
    </Text>
    <Ionicons name="chevron-forward-outline" size={20} color="gray" />
  </TouchableOpacity>
  <Text style={settingsPageStyles.helperText}>Tap the permission to jump to device settings.</Text>
</View>

<View style={settingsPageStyles.section}>
  <Text style={settingsPageStyles.sectionTitle}>About</Text>
  <View style={settingsPageStyles.aboutBox}>
    <Text style={settingsPageStyles.aboutText}>
      ScarletParking helps students check valid parking lots based on their permit.
    </Text>
    <Text style={[settingsPageStyles.aboutText, { marginTop: 8 }]}>
      If lot data is incorrect or unavailable, please send feedback through the option below.
    </Text>
  </View>
</View>

<View style={settingsPageStyles.section}>
  <Text style={settingsPageStyles.sectionTitle}>Disclaimer</Text>
  <View style={settingsPageStyles.aboutBox}>
    <Text style={settingsPageStyles.aboutText}>
      ScarletParking uses parking lot data provided from a Rutgers University website.
      We cannot be held liable for tickets/problems caused as we are simply displaying
      the same information Rutgers University presents.
    </Text>
    <Text style={[settingsPageStyles.aboutText, { marginTop: 8 }]}>
      Lot information was last checked on 4/23/25
    </Text>
  </View>
  </View>

<View style={settingsPageStyles.section}>
  <Text style={settingsPageStyles.sectionTitle}>Privacy</Text>
  <TouchableOpacity
  style={settingsPageStyles.cardRow}
  onPress={() => Linking.openURL('https://www.privacypolicies.com/live/eeb7d028-159c-4b04-af92-9fea08b40624')}>
  <Ionicons name="document-text-outline" size={22} color="white" style={settingsPageStyles.cardIcon} />
  <Text style={settingsPageStyles.cardLabel}>Privacy Policy</Text>
  <Ionicons name="chevron-forward-outline" size={20} color="gray" />
</TouchableOpacity>
</View>

<View style={settingsPageStyles.section}>
  <Text style={settingsPageStyles.sectionTitle}>Acknowledgements</Text>
  <TouchableOpacity style={settingsPageStyles.cardRow} onPress={openModal}>
    <Ionicons name="layers-outline" size={22} color="white" style={settingsPageStyles.cardIcon} />
    <Text style={settingsPageStyles.cardLabel}>Resources used</Text>
    <Ionicons name="chevron-down-outline" size={20} color="gray" />
  </TouchableOpacity>
</View>

<Modal
  animationType="slide"
  transparent={true}
  visible={modalVisible}
  onRequestClose={closeModal}
>
  <View style={modalStyles.modalOverlay}>
    <View style={modalStyles.bottomModal}>
      <View style={settingsPageStyles.section}>
        <Text style={settingsPageStyles.sectionTitle}>Acknowledgements</Text>
        <View style={settingsPageStyles.aboutBox}>
          <Text style={[settingsPageStyles.aboutText, {fontSize: 16}]}>
            ScarletParking was built using several open-source libraries for React Native, and 
            we'd like to acknowledge them.
          </Text>
          <Text style={[settingsPageStyles.aboutText]}>
          {'\nreact-navigation/native\n' +
            'react-navigation/bottom-tabs\n' +
            'react-native-map-clustering\n' +
            'react-native-maps\n' +
            'react-native-vector-icons/Ionicons\n' +
            'react-native-dropdown-picker\n' +
            'react-native-async-storage/async-storage\n' +
            'react-native-community/datetimepicker\n' +
          'expo-location'}
          </Text>
        </View>
      </View>

      <TouchableOpacity onPress={closeModal} style={modalStyles.closeButton}>
        <Ionicons name="close" size={24} color="white" />
      </TouchableOpacity>
    </View>
  </View>
</Modal>

<View style={settingsPageStyles.section}>
  <Text style={settingsPageStyles.sectionTitle}>Feedback</Text>
  <TouchableOpacity style={settingsPageStyles.cardRow} onPress = {linkToAppStore}>
    <Ionicons name="heart-outline" size={22} color="white" style={settingsPageStyles.cardIcon} />
    <Text style={settingsPageStyles.cardLabel}>Leave a review</Text>
    <Ionicons name="chevron-forward-outline" size={20} color="gray" />
  </TouchableOpacity>
  <TouchableOpacity style={settingsPageStyles.cardRow} onPress={openEmail}>
    <Ionicons name="chatbubble-ellipses-outline" size={22} color="white" style={settingsPageStyles.cardIcon} />
    <Text style={settingsPageStyles.cardLabel}>Send feedback</Text>
    <Ionicons name="chevron-forward-outline" size={20} color="gray" />
  </TouchableOpacity>
</View>
    </ScrollView>
  );
}




const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Map"
      screenOptions={({ route }) => ({
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor:
            route.name === 'List' || route.name === 'Settings'
              ? 'black'
              : '#1C1C1E',
          opacity: 1,
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: 'red',
      })}
    >
      <Tab.Screen
        name="List"
        component={ListScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="list-outline" color={color} size={size} />
          ),
          headerTitle: '',
          headerStyle: {
            height: 60,
            backgroundColor: 'black',
            opacity: 1,
          },
          headerTintColor: 'white',
        }}
      />

      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="map-outline" color={color} size={size} />
          ),
          headerTitle: '',
          headerStyle: {
            height: Platform.OS === 'ios' ? 60 : 1,
            backgroundColor: {mapType} === 'standard' ? '#222B37' : '#313329',
            opacity: 0.95,
          },
          headerTintColor: 'white',
        }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="cog-outline" color={color} size={size} />
          ),
          headerTitle: '',
          headerStyle: {
            height: 60,
            backgroundColor: 'black',
            opacity: 1,
          },
          headerTintColor: 'white',
        }}
      />
    </Tab.Navigator>
  );
}


export default function App() {
  return (
    <ParkingPassProvider>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="black" />
        <MyTabs />
      </NavigationContainer>
    </ParkingPassProvider>
  );
}


const listViewStyles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
    backgroundColor: 'black',
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  dropdownRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: 10,
    justifyContent: 'center',
  },
  dropdownLabel: {
    color: '#ccc',
    fontSize: 16,
  },
  dropdown: {
    width: 180,
    backgroundColor: '#2C2C2E',
    borderColor: '#444',
    borderRadius: 10,
    paddingHorizontal: 12,
    minHeight: 45,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    
  },
  
  dropdownContainer: {
    backgroundColor: '#2C2C2E',
    borderColor: '#444',
    borderRadius: 10,
    //marginTop: 6,
    width: 180,
    zIndex: 999, // fixes overlap issues
  },
  card: {
    backgroundColor: '#2C2C2E',
    borderRadius: 14,
    padding: 16,
    marginVertical: 8,
    
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5,
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 6,
  },
  icon: {
    marginRight: 8,
    marginTop: 2,
  },
  lotName: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
    flexWrap: 'wrap',
  },
  cardText: {
    flex: 1,
    fontSize: 14,
    color: '#ccc',
    flexWrap: 'wrap',
  },
  headerContainer: {
    width: '100%',
    paddingHorizontal: 0,
    paddingTop: 5,
    marginBottom: 10,
  },
  
  headerLabel: {
    color: '#A0A0A0',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 2,
    marginLeft: 2,
  },
  
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
  },
  
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  listViewContainer: {
    flex: 1,
    backgroundColor: '#27313F',
    alignItems: 'center',
    justifyContent: 'center',
  },

  safeAreaContainer: {
    flex: 1,
    backgroundColor: 'black'
  },

  mapStyle: {
    width: '100%',
    height: '120%',
    justifyContent: 'center',
    alignItems: 'center',
    //marginBottom: 150,
    opacity: 0.8,
  },

  modalButton: {
    position: 'absolute',
    top: 15,
    right: 15,
    backgroundColor: '#1E1E1E',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#2A2A2A',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  modalButton2: {
    position: 'absolute',
    top: 67,
    right: 15,
    backgroundColor: '#1E1E1E',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#2A2A2A',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonImage: {
    width: 22,
    height: 22,
    tintColor: 'white',
  },  

  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'rgba(0,0,0,0.5)',
  },

  modalContent: {
    backgroundColor: '#1E1E1E',
    padding: 20,
    borderRadius: 20,
    width: '90%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2A2A2A',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 10,
    position: 'relative',
  },

  closeButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#1E1E1E',
    borderColor: '#FF3B30',
    borderWidth: 1.2,
    borderRadius: 15,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 6,
    zIndex: 999, 
  },
  

  closeButtonText: {
    color: '#FF3B30',
    fontSize: 16,
    fontWeight: 'bold',
  },

  modalText: {
    fontSize: 20,
    marginBottom: 16,
    color: '#FFFFFF',
    fontWeight: '600',
    textAlign: 'center',
    letterSpacing: 0.3,
  },

  radioRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 12,
  },

  radioOption: {
    flex: 1,
    paddingVertical: 10,
    marginHorizontal: 6,
    backgroundColor: '#1A1A1A',
    borderColor: '#2A2A2A',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
  },

  radioOptionActive: {
    backgroundColor: '#FF3B30',
    borderColor: '#FF3B30',
  },

  radioText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },

  radioButton: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: '#888',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },

  selectedRadioButton: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#FF3B30',
  },

  zoomButtonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 16,
  },

  zoomButton: {
    backgroundColor: '#1E1E1E',
    borderRadius: 10,
    borderColor: '#2A2A2A',
    borderWidth: 1.5,
    paddingVertical: 10,
    paddingHorizontal: 14,
    width: '47%',
    marginBottom: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },

  zoomButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0.3,
    textAlign: 'center',
  },

  resetButton: {
    position: 'absolute',
    bottom: 20,
    right: 15,
    backgroundColor: '#1E1E1E',
    padding: 12,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#2A2A2A',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },

  targetImage: {
    width: 22,
    height: 22,
    tintColor: 'white',
  },

  markerDetails: {
    position: 'absolute',
    bottom: 70,
    left: 16,
    right: 16,
    backgroundColor: '#1E1E1E',
    flexDirection: 'row', // compact horizontal layout
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#2A2A2A',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  markerTextContainer: {
    flex: 1,
    paddingRight: 12,
  },
    

  markerTitle: {
    color: 'white',
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 4,
  },
  
  markerSubTitle: {
    color: '#CCCCCC',
    fontSize: 13,
    lineHeight: 18,
  },

  directionsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',          // darker background to match the modal/map
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#FF3B30',              // red accent border (matches your theme)
    shadowColor: '#FF3B30',              // red-ish glow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  
  directionsButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 8,
  },
  
  

  passView: {
    position: 'absolute',
    top: 15,
    left: 16,
    paddingVertical: 10,
    paddingHorizontal: 18,
    backgroundColor: '#1E1E1E',
    borderRadius: 25,
    borderColor: '#2A2A2A',
    borderWidth: 1,
  },

  passViewText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },

  sText: {
    color: 'white',
    fontFamily: 'SF-Pro',
    fontSize: 34,
  },
  customMarker: {
    //backgroundColor: '#1E1E1E',
    borderRadius: 25,
    padding: 6,
    //borderWidth: 1,
    borderColor: '#2A2A2A',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  
});


const settingsPageStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // dark theme
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'left',
  },

  topCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    padding: 16,
    borderRadius: 16,
    marginBottom: 25,
    borderColor: '#2A2A2A',
    borderWidth: 1,
  },

  logo: {
    width: 60,
    height: 60,
    borderRadius: 12,
    marginRight: 16,
  },

  cardTextContainer: {
    flex: 1,
  },

  appName: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
  },

  versionText: {
    color: '#888',
    fontSize: 14,
    marginTop: 2,
  },

  madeByText: {
    color: '#aaa',
    fontSize: 14,
    marginTop: 2,
  },

  linkText: {
    color: '#FF3B30', // red accent
    fontWeight: '500',
    textDecorationLine: "underline"
  },

  section: {
    marginBottom: 30,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    marginBottom: 10,
  },

  dropdown: {
    backgroundColor: '#1E1E1E',
    borderColor: '#333',
    minHeight: 45,
  },

  dropdownText: {
    color: 'white',
    fontSize: 14,
  },

  dropdownContainer: {
    backgroundColor: '#1E1E1E',
    borderColor: '#333',
  },

  helperText: {
    color: '#999',
    fontSize: 12,
    marginTop: 6,
  },

  helperTextAbove: {
    color: '#999',
    fontSize: 12,
    marginBottom: 6,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },

  label: {
    color: 'white',
    fontSize: 16,
  },

  switchMockOn: {
    width: 40,
    height: 22,
    borderRadius: 12,
    backgroundColor: '#FF3B30',
  },

  switchMockOff: {
    width: 40,
    height: 22,
    borderRadius: 12,
    backgroundColor: '#555',
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginTop: 10,
    marginBottom: 4,
  },
  
  cardLabel: {
    flex: 1,
    fontSize: 16,
    color: 'white',
    marginLeft: 10,
  },
  
  cardStatus: {
    color: 'limegreen',
    fontSize: 14,
    marginRight: 8,
    fontWeight: '500',
  },
  
  cardIcon: {
    width: 24,
  },
  
  aboutBox: {
    backgroundColor: '#1E1E1E',
    padding: 16,
    borderRadius: 12,
    marginTop: 10,
  },
  
  aboutText: {
    fontSize: 14,
    color: '#CCCCCC',
    lineHeight: 20,
  },
  
});

const modalStyles = {
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // optional dimmed background
  },
  bottomModal: {
    height: '80%',
    backgroundColor: '#1a1a1a',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#444',
    borderRadius: 20,
    padding: 6,
  },
};
const updateModalStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#1E1E1E',
    padding: 24,
    borderRadius: 20,
    width: '85%',
    alignItems: 'center',
    borderColor: '#2A2A2A',
    borderWidth: 1.5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF3B30',
    marginBottom: 12,
    textAlign: 'center',
  },
  message: {
    fontSize: 15,
    color: '#ccc',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#FF3B30',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    marginBottom: 10,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  skipText: {
    color: '#999',
    fontSize: 14,
    textDecorationLine: 'underline',
    marginTop: 4,
  },
});


const welcomeModalStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    backgroundColor: '#1E1E1E',
    padding: 24,
    margin: 20,
    borderRadius: 20,
    borderColor: '#2A2A2A',
    borderWidth: 1.2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 10,
    alignItems: 'center',
  },
  title: {
    color: '#FF3B30',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 12,
    textAlign: 'center',
  },
  message: {
    color: '#ccc',
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FF3B30',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    shadowColor: '#FF3B30',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

