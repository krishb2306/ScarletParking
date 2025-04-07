//import * as React from 'react';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet,Animated, StatusBar, AppState, Switch, Image,ScrollView, FlatList, ImageBackground, SafeAreaView,Dimensions,Modal, Text, TouchableOpacity, View,Linking} from 'react-native';
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



function ListScreen() {

  const { currPass, currListViewInfo } = useContext(ParkingPassContext);
  console.log(currListViewInfo)
  const [listInfo, setListInfo] = React.useState(currListViewInfo[0] || {});
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("Busch");
  const [items, setItems] = React.useState([
    {label: 'Busch', value: 'Busch'}, 
    {label: 'College Ave', value: 'College Ave'},
    {label: 'Cook/Douglass', value: 'Cook/Douglass'},
    {label: 'Livingston', value: 'Livingston'},
  ]);

  return (
    <SafeAreaView style={listViewStyles.safeAreaContainer}>
      <View style = {listViewStyles.container}>
        <View style = {listViewStyles.topListView}> 
          <Text style = {listViewStyles.headerText}> Info for {currPass} </Text>
        </View>

        <View style = {listViewStyles.middleListView}>
          <Text> Pick what campus lots to view </Text>
          
          <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setItems={setItems}
              onSelectItem={(selectedItem) => {
                const selectedCampus = selectedItem.value;
                const selectedInfo = currListViewInfo.find(info => info.campus === selectedCampus);
              
                if (selectedInfo) {
                  setListInfo(selectedInfo);
                }
              }}
              style = {{width: 150, minHeight: 40}}
              containerStyle = {{width: 150}}
            />
        </View>

        <View style = {listViewStyles.bottomListView}> 
          <FlatList
            horizontal={false}
            data={listInfo.lots}
            renderItem={({ item }) => (
              <View style={listViewStyles.listViewBox}>
                <View style = {listViewStyles.thirdListViewBox1}>
                <Image
                  style={{width: 35, height: 35, resizeMode: 'contain'}}
                  source={require('./images/pinpoint.png')}
                />
                <Text style = {{fontWeight: "bold"}}> {item.name} </Text>
                </View>

                <View style = {listViewStyles.thirdListViewBox2}>
                <Image
                  style={{width: 35, height: 35, resizeMode: 'contain'}}
                  source={require('./images/clock-icon.png')}
                />
                <Text style = {{fontWeight: "bold"}}> {item.timeslots[0]} </Text>
                </View>

                <View style = {listViewStyles.thirdListViewBox}>
                <Image
                  style={{width: 35, height: 35, resizeMode: 'contain'}}
                  source={require('./images/clock-icon.png')}
                />
                <Text style = {{fontWeight: "bold"}}> {item.timeslots[1]} {value} </Text>
                </View>
                
                
                
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

function MapScreen() {
  const { currPass, currMapViewID } = useContext(ParkingPassContext);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedMarker, setSelectedMarker] = React.useState(null);
  const [hideTimeout, setHideTimeout] = useState(null);
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

  const temp = [];
  const markers = [];

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);


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

    // Then fetch every 30 seconds
    locationInterval = setInterval(fetchLocation, 30000);

    return () => {
      isMounted = false;
      clearInterval(locationInterval);
    };
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
    }, 150); // 1000ms = 1 second delay
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

  const [passName, setPassName] = useState("Busch Commuter (BCC)");

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
  };

  const onTimeChange = (event, selectedDate) => {
    //setShowTimePicker(false); // Hide the picker after selection
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
    description="You are here!"
  >
    <Ionicons name="location-sharp" size={30} color="yellow" />
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
          mode="datetime"
          display="compact"
          onChange={onTimeChange}
          style={{ marginVertical: 10 }}
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
      </View>
    </View>
  </View>
</Modal>


    </View>
    </SafeAreaView>
  );
}

function SettingsScreen() {
  const { currPass, updateParkingPass } = useContext(ParkingPassContext);
  const [open, setOpen] = useState(false);
  const [locationStatus, setLocationStatus] = useState(null);
  const [appState, setAppState] = useState(AppState.currentState);
  const [allParkingPasses, setAllParkingPasses] = useState([
    { label: 'Busch Commuter', value: 'Busch Commuter' },
    { label: 'Busch Off-Campus Living', value: 'Busch Off-Campus Living' },
    { label: 'Busch Resident', value: 'Busch Resident' },
    { label: 'College Ave Commuter', value: 'College Ave Commuter' },
    { label: 'Cook Commuter', value: 'Cook Commuter' },
    { label: 'Cook Off-Campus Living', value: 'Cook Off-Campus Living' },
    { label: 'Cook Resident', value: 'Cook Resident' },
    { label: 'Douglass Commuter', value: 'Douglass Commuter' },
    { label: 'Gibbons Resident', value: 'Gibbons Resident' },
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
  ]);

  const openEmail = () => {
    const email = 'scarletparking@gmail.com';
    const url = `mailto:${email}`;
  
    Linking.openURL(url).catch(err => {
      console.error('Failed to open mail app:', err);
    });
  };

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

    const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <ScrollView
      style={settingsPageStyles.container}
      contentContainerStyle={{ paddingBottom: 50 }}
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
          <Text style={settingsPageStyles.appName}>Scarlet Parking</Text>
          <Text style={settingsPageStyles.versionText}>Version 1.0.0</Text>
          <Text style={settingsPageStyles.madeByText}>
            Made by <Text style={settingsPageStyles.linkText}>Krishanth Babu & Eashan Patel</Text>
          </Text>
        </View>
      </View>

      {/* PARKING PASS DROPDOWN */}
      <View style={settingsPageStyles.section}>
        <Text style={settingsPageStyles.sectionTitle}>Parking Pass</Text>
        <DropDownPicker
          open={open}
          value={currPass}
          items={allParkingPasses}
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

      {/* GENERAL SETTINGS */}
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
      </View>

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
      Scarlet Parking helps students check valid parking lots based on their permit.
    </Text>
    <Text style={[settingsPageStyles.aboutText, { marginTop: 8 }]}>
      If lot data is incorrect or unavailable, please send feedback through the option below.
    </Text>
  </View>
</View>

<View style={settingsPageStyles.section}>
  <Text style={settingsPageStyles.sectionTitle}>Privacy</Text>
  <TouchableOpacity style={settingsPageStyles.cardRow}>
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
          <Text style={settingsPageStyles.aboutText}>
            whatever we need here
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
  <TouchableOpacity style={settingsPageStyles.cardRow}>
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
            height: 60,
            backgroundColor: '#222B37',
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
  },

  container: {
      flex: 1,
      backgroundColor: '#27313F',
      alignItems: "center",
      justifyContent: "center",
      opacity: 1
  },

  topListView:{
    flex: 0.1,
    //backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: "center",
    opacity: 1,

  },

  headerText:{
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
    paddingTop: 20
  },

  middleListView:{
    flex: 0.1,
    //backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: "center",
    opacity: 1,
    flexDirection: "row"
    
  },

  bottomListView:{
    flex: 0.8,
    //backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: "center",
    opacity: 1,
  },

  listViewBox: {
    flexDirection: "column",
    backgroundColor: "white",
    width: "93%",
    justifyContent: "center",
    alignItems: "center", 
    margin: 10,
    borderRadius: 10,
    // borderColor: "white",
    // borderWidth: 2,

    elevation: 20,
    shadowColor: "black",
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.7,
    shadowRadius: 3,
  },

  thirdListViewBox: {
    //flex: 0.33,
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "95%",
    //backgroundColor: "red",
  },

  thirdListViewBox1: {
    //flex: 0.33,
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    textAlign: "center",
    textAlignVertical: "center",
    flexDirection: "row",
    width: "95%",
    paddingRight: "20%",
    //backgroundColor: "green"
  },

  thirdListViewBox2: {
    //flex: 0.33,
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "95%",
    //backgroundColor: "blue"
  }

})

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
  },

  mapStyle: {
    width: '100%',
    height: '120%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 150,
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


