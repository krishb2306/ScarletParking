//import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet,StatusBar, Image, FlatList, ImageBackground, SafeAreaView,Dimensions,Modal, Text, TouchableOpacity, View,Linking} from 'react-native';
import MapView from "react-native-map-clustering";
import { Marker } from "react-native-maps";
import React, { useState, useEffect, useRef} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import DropDownPicker from 'react-native-dropdown-picker';
import moment from 'moment';
//import { useState, useEffect } from 'react';


function ListScreen() {
  const currentPassInfo = [
    {
      campus: "Busch",
      lots: [
        {
          name: "Lot 613/Stadium West",
          timeslots: ["Monday - Friday, 6AM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
        },
        {
          name: "Lot 50, Lot 51, Lot 51B, Lot 53A, Lot 54, Lot 58, Lot 58A, Lot 59, Lot 60A, Lot 60B, Lot 61, Lot 63, Lot 63B, Lot 63C, Lot 64, Lot 66B, Gated Lot 55, TEST, TEST, TEST, TEST, TEST, TEST, TEST, TEST, TEST, TEST, TEST, TEST,",
          timeslots: ["Monday - Friday, 6PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
        },
        {
          name: "Lot 67",
          timeslots: ["Monday - Thursday, 6PM - 8AM", "Friday 6PM - Monday, 8AM"]
        }
      ]
    },
    {
      campus: "College Ave",
      lots: [
        {
          name: "Lot 11 NB, Gated Lot 16, Lot 20, Lot 26, Lot 30, Lot 32, Lot 33, Lot 505/CAC Parking Deck",
          timeslots: ["Monday - Friday, 6PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
        },
        {
          name: "Lot 13",
          timeslots: ["Monday - Thursday, 6PM - 8AM", "Friday 4PM - Monday, 8AM"]
        }
      ]
    },
    {
      campus: "Cook/Douglass",
      lots: [
        {
          name: "Lot 97, Lot 82",
          timeslots: ["Monday - Thursday, 6PM - 8AM", "Friday 6PM - Monday, 8AM"]
        },
        {
          name: "Lot 94, Lot 95, Lot 98A, Lot 98B, Lot 805/Lipman Drive, Lot 70, Lot 71A, Lot 74A, Lot 75, Lot 76, Lot 79, Lot 81, Lot 83, Lot 84, Lot 86, Lot 88, Lot 96, Lot 96A, Douglass Deck, Lot 709/Corwin",
          timeslots: ["Monday - Friday, 6PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
        },
        {
          name: "Gated Lot 79A",
          timeslots: ["Monday - Friday, 7:30PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
        }
      ]
    },
    {
      campus: "Livingston",
      lots: [
        {
          name: "Lot 101",
          timeslots: ["Monday - Thursday, 6PM - 8AM", "Friday 6PM - Monday, 8AM"]
        },
        {
          name: "Lot 107, Lot 108, Lot 110, Lot 111, Lot 112, Lot 914/Scarlet Lot, Lot 916/Green Lot, Lot 915/Yellow Lot",
          timeslots: ["Monday - Friday, 6PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
        }
      ]
    },
    {
      campus: "RBHS-Piscataway",
      lots: [
        {
          name: "Lot A, Lot B, Lot C",
          timeslots: ["Monday - Friday, 6PM - 2AM", "Saturday - Sunday, 6AM - 2AM"]
        }
      ]
    }
];

  const [listInfo, setListInfo] = React.useState(currentPassInfo[0]);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("Busch");
  const [items, setItems] = React.useState([
    {label: 'Busch', value: 'Busch'},
    {label: 'College Ave', value: 'College Ave'},
    {label: 'Cook/Douglass', value: 'Cook/Douglass'},
    {label: 'Livingston', value: 'Livingston'},
    {label: 'RBHS', value: 'RBHS'},
  ]);

  return (
    <SafeAreaView style={listViewStyles.safeAreaContainer}>
      <View style = {listViewStyles.container}>
        <View style = {listViewStyles.topListView}> 
          <Text style = {listViewStyles.headerText}> Info for Busch Commuter Pass </Text>
        </View>

        <View style = {listViewStyles.middleListView}>
          <Text> Pick what campus lots to view </Text>
          
          <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              onChangedValue={(value) => {
                for (let i = 0; i < 5; i++){
                  if (currentPassInfo[i].campus.localeCompare(value)){
                    setListInfo(currentPassInfo[i]);
                    break;
                  }
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
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedMarker, setSelectedMarker] = React.useState(null);
  const [hideTimeout, setHideTimeout] = useState(null);
  const [selectedOption, setSelectedOption] = useState('current'); // Default to 'Current Time'

  const bccLots = require('./bccLots');
  const allLots = require('./allLots');

  const mapViewRef = useRef(null);

  const temp = [];
  const markers = [];






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

  // Zoom to the selected region
  const zoomToRegion = (region) => {
    mapViewRef.current.animateToRegion(region, 1000); // 1000 ms for smooth zooming
    setModalVisible(false); // Close the modal after zooming
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
  
    // Convert UTC date to local time
    //const options = { timeZone, weekday: "long", hour: "2-digit", minute: "2-digit" };
    const localDate = moment().format('ddd MMM DD YYYY HH:mm:ss ZZ');

const currentDay = new Date(localDate).toLocaleDateString("en-US", { weekday: "long" });

// Extract hours and minutes from the localDate string
const timeString = localDate.split(" ")[4]; // Extract the "HH:mm:ss" part
const [hours, minutes] = timeString.split(":").map(Number);

const currentTime = hours * 60 + minutes; // Calculate minutes since midnight

console.log("Local Date:", localDate);
console.log("Current Day:", currentDay);
console.log("Current Time (minutes):", currentTime);
  
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
  
      console.log(`Checking schedule: Days = ${days.join(", ")}, Time = ${startTime} - ${endTime}`);
      console.log(`Day Matches: ${dayMatches}`);
  
      if (!dayMatches) return false;
  
      // Handle time ranges crossing midnight
      let timeMatches;
      if (start > end) {
        timeMatches = currentTime >= start || currentTime < end;
      } else {
        timeMatches = currentTime >= start && currentTime < end;
      }
      console.log(`Time Matches: ${timeMatches}`);
      return timeMatches;
    });
  }
  
  allLots.forEach(lot => {
    // Check if the current lot from allLots exists in bccLots
    let foundLot = bccLots.find(bccLot => bccLot.name === lot.title);
    
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

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
    <View style={styles.container}>
      <MapView
      ref={mapViewRef}
      clusterColor='#D4301F'
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
      {markers.map((marker) => (
            <Marker
              key={marker.id}
              coordinate={marker.coordinate}
              title={marker.title}
              description={""}
              onPress={(e) => {
                e.stopPropagation(); // Prevent the map's onPress from firing
                handleMarkerPress(marker);
              }}
              
            />
          ))}

     </MapView>
     {selectedMarker && (
          <View style={styles.markerDetails}>
            <Text style={styles.markerTitle}>{selectedMarker.title}</Text>
            <Text style={styles.markerSubTitle}>{selectedMarker.description}</Text>
            <TouchableOpacity
              style={styles.directionsButton}
              onPress={() => openDirections(
                selectedMarker.coordinate.latitude,
                selectedMarker.coordinate.longitude
              )}
            >
              <Text style={styles.directionsButtonText}>Get Directions</Text>
            </TouchableOpacity>
          </View>
        )}

      <TouchableOpacity
                style={styles.passView}
                disabled = {true}
              >
                <Text style = {styles.passViewText}>{passName}</Text>

      </TouchableOpacity>


     <TouchableOpacity
          style={styles.modalButton}
          onPress={() => setModalVisible(true)}
        >
          <Image 
            source={require('./assets/legend2.png')}  // Add your image path here
            style={styles.buttonImage}
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

              <Text style={styles.modalText}></Text>

              {/* Radio Button for Current Time */}
              <TouchableOpacity
                style={styles.radioButtonContainer}
                onPress={() => handleSelection('current')}
              >
                <View
                  style={[
                    styles.radioButton,
                    selectedOption === 'current' && styles.selectedRadioButton,
                  ]}
                />
                <Text style = {styles.radioText}>Current Time</Text>
              </TouchableOpacity>

              {/* Radio Button for Set Time */}
              <TouchableOpacity
                style={styles.radioButtonContainer}
                onPress={() => {handleSelection('set'), console.log(new Date())}}
              >
                <View
                  style={[
                    styles.radioButton,
                    selectedOption === 'set' && styles.selectedRadioButton,
                  ]}
                />
                <Text style = {styles.radioText}>Set Time</Text>
              </TouchableOpacity>


              <View style={styles.zoomButtonContainer}>
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


              
              {/* Close Button */}
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.closeButtonText}>X</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
    </View>
    </SafeAreaView>
  );
}

function SettingsScreen() {
  return (
    <View style = {styles.container}>
      <Text style = {styles.sText}>Settings</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Map"
      screenOptions={({ route }) => ({
        tabBarShowLabel: true, // Show tab labels
        tabBarStyle: { 
          backgroundColor: route.name === 'List' || route.name === 'Settings' ? 'black' : '#2B333E', // Change background color based on route
          opacity: 1,
          borderTopWidth: 0,
        }, 
        tabBarActiveTintColor: 'red', // Active icon/text color
      })}
    >
      <Tab.Screen
        name="List"
        component={ListScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="list" color={color} size={size} />
          ),
          headerTitle: '',
          headerStyle: {
            height: 60,
            backgroundColor: 'black', 
            opacity: 1// Header background color
          },
          headerTintColor: 'white', // Text color in the header
        }}
      />

      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="map" color={color} size={size} />
          ),
          headerTitle: '',
          headerStyle: {
            height: 60,
            backgroundColor: '#2B333E', 
            opacity: 0.95,
           
          },
          headerTintColor: 'white', // Text color in the header
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="settings" color={color} size={size} />
          ),
          headerTitle: '',
          headerStyle: {
            height: 60,
            backgroundColor: 'black', 
            opacity: 1// Header background color
          },
          headerTintColor: 'white', // Text color in the header
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <MyTabs />
    </NavigationContainer>
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
    justifyContent: "center",
    opacity: 1
  },
  listViewContainer: {
      flex: 1,
      backgroundColor: '#27313F',
      alignItems: "center",
      justifyContent: "center",
      opacity: 1
  },

  mapStyle:{
    width: "100%",
    height: "120%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 150,
    opacity: 0.85
  },
  safeAreaContainer: {
    flex: 1, 
  },
  modalButton: {
    position: 'absolute',
    top: 10, // Adjust this to place it at the desired position
    left: '98%',
    marginLeft: -50, // Centers the button horizontally
    backgroundColor: '#27313F',
    padding: 10,
    opacity: 0.9,
    borderRadius: 25,
    borderWidth: 1,
      borderColor: "white"
    //borderColor: "red",
    //borderWidth: 1,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: "50%"
    //backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  modalContent: {
    backgroundColor: '#27313F',
    padding: 20,
    borderRadius: 25,
    width: '85%',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    color: "white"
  },
  
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
  buttonImage: {
    width: 25,  // Set the desired size for the image
    height: 25, // Set the desired size for the image
    },
    markerDetails: {
      position: 'absolute',
      bottom: 20,
      left: 50,
      right: 10,
      backgroundColor: '#27313F',
      opacity: 0.9,
      padding: 15,
      borderRadius: 25,
      width: "75%",
      alignItems: 'center',
      borderWidth: 1,
      borderColor: "white"
    },
    markerTitle: {
      color: 'white',
      fontSize: 18,
      marginBottom: 10,
    },
    markerSubTitle: {
      color: 'white',
      fontSize: 12,
      textAlign: "center",
      marginBottom: 10,
    },
    directionsButton: {
      backgroundColor: '#27313F',
      padding: 12,
      borderRadius: 25,
      borderColor: "red",
      borderWidth: 1

    },
    directionsButtonText: {
      color: 'white',
      fontSize: 16,
    },
    sText: {
      color: 'white',
      fontFamily: 'SF-Pro',
      fontSize: 34
    },
    passView: {
      position: 'absolute',
      top: 10, // Adjust this to place it at the desired position
      left: '15%',
      width: "50%",
      marginLeft: -50, // Centers the button horizontally
      backgroundColor: '#27313F',
      padding: 10,
      opacity: 0.9,
      borderRadius: 25,
      //borderWidth: 1,
      //borderColor: "white"
      //borderColor: "red",
      //borderWidth: 1,
    },
    passViewText: {
      color: "white",
      textAlign: "center",

    },
    radioButtonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    radioButton: {
      width: 20,
      height: 20,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'white',
      marginRight: 10,
      backgroundColor: 'transparent',
    },
    selectedRadioButton: {
      backgroundColor: 'red',
    },
    closeButton: {
      //marginTop: 20,
      //padding: 10,
      left: "48.5%",
      bottom: "94%",
      backgroundColor: '#27313F',
      borderColor: "white",
      borderWidth: 1,
      borderRadius: 100,
      width: 30,
      height: 30,
      alignItems: "center",
      justifyContent: "center",

    },
    closeButtonText: {
      color: 'red',
    },
    radioText: {
      color: "white"
    },
    zoomButtonContainer: {
      marginTop: 20,
      width: '100%',
      alignItems: 'center',
    },
    zoomButton: {
      padding: 10,
      margin: 5,
      backgroundColor: '#27313F',
      borderRadius: 5,
      borderColor: "white",
      borderWidth: 1,
      width: '80%',
    },
    zoomButtonText: {
      color: 'white',
      textAlign: 'center',
    },
 });
