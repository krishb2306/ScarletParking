//import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet,StatusBar, Image, ImageBackground, FlatList,SafeAreaView,Dimensions,Modal, Text, TouchableOpacity, View,Linking } from 'react-native';
import MapView, { Marker } from 'react-native-maps'; 
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { BlurView } from '@react-native-community/blur';

function ListScreen() {
  return (
    <View style = {styles.container}>
      <Text>List Screen</Text>
    </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
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
 });
