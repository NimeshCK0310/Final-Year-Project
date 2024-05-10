import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, MaterialIcons, Entypo } from '@expo/vector-icons'; // Import necessary icons
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import BookingScreen from '../Screens/BookingScreen/BookingScreen';
import HomeNavigation from './HomeNavigation';
import PetCareScreen from '../Screens/PetCareScreen/PetCareScren'; // Corrected import
import PetShopScreen from '../Screens/PetShopScreen/PetShopScreen'; // Import PetShopScreen

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: { fontSize: 12, marginTop: -2 },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Booking"
        component={BookingScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color }}>Booking</Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="calendar" size={size} color={color} />
          ),
        }}
      />
     
      {/* PetCare Screen */}
      <Tab.Screen
        name="PetCare"
        component={PetCareScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginTop: -2 }}>
              Pet Care
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="pets" size={size} color={color} />
          ),
        }}
      />
      {/* PetShop Screen */}
      <Tab.Screen
        name="PetShop"
        component={PetShopScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginTop: -2 }}>
              Pet Shop
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <Entypo name="shop" size={size} color={color} />
          ),
        }}
      />

<Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color }}>Profile</Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
        }}
      />

    </Tab.Navigator>
  );
}



// import { View, Text } from "react-native";
// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import BookingScreen from "../Screens/BookingScreen/BookingScreen";
// import ProfileScreen from "../Screens/ProfileScreen/ProfileScreen";
// import { FontAwesome } from "@expo/vector-icons";
// import PetCareScreen from "../Screens/PetCare/PetCareScreen";
// import PetShopScreen from "../Screens/PetShop/PetShopScreen";
// import { MaterialIcons } from '@expo/vector-icons';
// import { Entypo } from '@expo/vector-icons';
// import HomeNavigation from "./HomeNavigation";
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// const Tab = createMaterialBottomTabNavigator();
// export default function TabNavigation() {
//   return (
//     <Tab.Navigator screenOptions={{ headerShown: false }}>

//       {/* HomeScreen */}
//       <Tab.Screen
//         name="home"
//         component={HomeNavigation}
//         options={{
//           tabBarLabel: ({ color }) => (
//             <Text style={{ color: color, fontSize: 12, marginTop: -2 }}>
//               Home
//             </Text>
//           ),
//           tabBarIcon: ({ color, size }) => (
//             <FontAwesome name="home" size={size} color={color} />
//           ),
//         }}
//       />

//       {/* BookingScreen */}
//       <Tab.Screen
//         name="Booking"
//         component={BookingScreen}
//         options={{
//           tabBarLabel: ({ color }) => (
//             <Text style={{ color: color, fontSize: 12, marginTop: -2 }}>
//               Booking
//             </Text>
//           ),
//           tabBarIcon: ({ color, size }) => (
//             <FontAwesome name="bookmark" size={size} color={color} />
//           ),
//         }}
//       />

//       {/* Petcare Screen */}
//       <Tab.Screen
//         name="PetCare"
//         component={PetCareScreen}
//         options={{
//           tabBarLabel: ({ color }) => (
//             <Text style={{ color: color, fontSize: 12, marginTop: -2 }}>
//               Pet Care
//             </Text>
//           ),
//           tabBarIcon: ({ color, size }) => (
//             <MaterialIcons name="pets" size={size} color={color} />
//           ),
//         }}
//       />

//       {/* PetShop Screen */}
//       <Tab.Screen
//         name="PetShop"
//         component={PetShopScreen}
//         options={{
//           tabBarLabel: ({ color }) => (
//             <Text style={{ color: color, fontSize: 12, marginTop: -2 }}>
//               Pet Shop
//             </Text>
//           ),
//           tabBarIcon: ({ color, size }) => (
//             <Entypo name="shop" size={size} color={color} />
//           ),
//         }}
//       />

//       {/* ProfileScreen */}
//       <Tab.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{
//           tabBarLabel: ({ color }) => (
//             <Text style={{ color: color, fontSize: 12, marginTop: -2 }}>
//               Profile
//             </Text>
//           ),
//           tabBarIcon: ({ color, size }) => (
//             <FontAwesome name="user" size={size} color={color} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

