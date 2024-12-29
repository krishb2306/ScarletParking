//import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet,StatusBar, Image, FlatList, ImageBackground, SafeAreaView,Dimensions,Modal, Text, TouchableOpacity, View,Linking} from 'react-native';
import MapView, { Marker } from 'react-native-maps'; 
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { BlurView } from '@react-native-community/blur';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState, useEffect } from 'react';


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
          name: "Lot 50, Lot 51, Lot 51B, Lot 53A, Lot 54, Lot 58, Lot 58A, Lot 59, Lot 60A, Lot 60B, Lot 61, Lot 63, Lot 63B, Lot 63C, Lot 64, Lot 66B, Gated Lot 55",
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
<<<<<<< HEAD
    <View style = {styles.container}>
      <Text>List Screen</Text>
    </View>
=======
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
              onChangeValue={(value) => {
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
              <View style={listViewStyles.lotBox}>
                <Text> {item.name} </Text>
                <Text> {item.timeslots[0]} </Text>
                <Text> {item.timeslots[1]} {value} </Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    </SafeAreaView>
>>>>>>> c1a91bc99a8a007da9349d182516bd10a6265b58
  );
}

function MapScreen() {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedMarker, setSelectedMarker] = React.useState(null);
  const [hideTimeout, setHideTimeout] = useState(null);


  const markers = [
    {
      id: '1',
      title: 'Yellow Lot',
      description: 'This is the first marker',
      coordinate: { latitude: 40.52785148042749, longitude: -74.43821430107958 },
    },
    {
      id: '2',
      title: 'Lot 105',
      description: 'This is the second marker',
      coordinate: { latitude: 40.52397, longitude: -74.43439 },
    },
    {
      id: '3',
      title: 'Lot 103',
      description: 'This is the third marker',
      coordinate: { latitude: 40.52088112738152, longitude: -74.43243729118925 },
    },
    
  ];

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



  return (
    <SafeAreaView style={styles.safeAreaContainer}>
    <View style={styles.container}>
      <MapView
      userInterfaceStyle='dark'
       style={styles.mapStyle}
       initialRegion={{
        latitude: 40.50636845036389, 
        longitude: -74.45282314766699, 
        latitudeDelta: 0.05, 
        longitudeDelta: 0.05, 
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
            <Text style={styles.markerTitle}></Text>
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
              <Text style={styles.modalText}>This is a modal!</Text>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.closeButtonText}>Close</Text>
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
    opacity: 1
  },

  lotBox: {
    flex: 0.5,
    backgroundColor: "red",
    width: "95%",
    height: 150,
    justifyContent: "center",
    alignItems: "center", 
    margin: 5,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 10

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
    marginBottom: "95%"
    //backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#27313F',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
  buttonImage: {
    width: 25,  // Set the desired size for the image
    height: 25, // Set the desired size for the image
<<<<<<< HEAD
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
    }
=======
  },

>>>>>>> c1a91bc99a8a007da9349d182516bd10a6265b58
 });
