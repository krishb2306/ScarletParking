import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet,StatusBar, Image, ImageBackground, FlatList,SafeAreaView,Dimensions,Modal, Text, TouchableOpacity, View } from 'react-native';
import MapView, { MARKER } from 'react-native-maps'; 
import Icon from 'react-native-vector-icons/Ionicons';
import { BlurView } from '@react-native-community/blur';

function ListScreen() {
  const BuschCommuterPass = [
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
  
  return (
    <View>
      <Text>List Screen</Text>
    </View>
  );
}

function MapScreen() {
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
    <View style={styles.container}>
      <MapView
      userInterfaceStyle='dark'
       style={styles.mapStyle}
       initialRegion={{
        latitude: 40.5140, 
        longitude: -74.4067, 
        latitudeDelta: 0.05, 
        longitudeDelta: 0.05, 
      }}
     >
     </MapView>

     <TouchableOpacity
          style={styles.modalButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.modalButtonText}>Open Modal</Text>
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
    <View>
      <Text>Settings Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: true, // Hide tab labels
        tabBarStyle: { 
          backgroundColor: '#27313F',
          opacity: 1,
          borderTopWidth: 0,
          
      
      }, 
      tabBarActiveTintColor: 'red', // Active icon/text color
        //tabBarInactiveTintColor: 'white', // Inactive icon/text color
      }}
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
            opacity: 0.8// Header background color
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
            backgroundColor: '#27313F', 
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
            opacity: 0.8// Header background color
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
    top: 50, // Adjust this to place it at the desired position
    left: '50%',
    marginLeft: -50, // Centers the button horizontally
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 15,
    borderRadius: 10,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 18,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
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
 });
