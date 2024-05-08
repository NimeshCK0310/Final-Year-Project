import { View, Text } from "react-native";
import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import BookingScreen from "../Screens/BookingScreen/BookingScreen";
import ProfileScreen from "../Screens/ProfileScreen/ProfileScreen";
import { FontAwesome } from "@expo/vector-icons";
import PetCareScreen from "../Screens/PetCare/PetCareScreen";
import PetShopScreen from "../Screens/PetShop/PetShopScreen";
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import HomeNavigation from "./HomeNavigation";
import Colors from "../Utils/Colors";

const Tab = createMaterialBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      barStyle={{ backgroundColor: Colors.Blue}}
      activeColor="blue"
      inactiveColor={{ color: Colors.PRIMARY}}
    >
      {/* HomeScreen */}
      <Tab.Screen
        name="home"
        component={HomeNavigation}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={25} color={color}  />
          ),
        }}
      />

      {/* BookingScreen */}
      <Tab.Screen
        name="Booking"
        component={BookingScreen}
        options={{
          tabBarLabel: 'Booking',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="bookmark" size={25} color={color} />
          ),
        }}
      />

      {/* Petcare Screen */}
      <Tab.Screen
        name="PetCare"
        component={PetCareScreen}
        options={{
          tabBarLabel: 'Pet Care',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="pets" size={25} color={color} />
          ),
        }}
      />

      {/* PetShop Screen */}
      <Tab.Screen
        name="PetShop"
        component={PetShopScreen}
        options={{
          tabBarLabel: 'Pet Shop',
          tabBarIcon: ({ color }) => (
            <Entypo name="shop" size={25} color={color} />
          ),
        }}
      />

      {/* ProfileScreen */}
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile', 
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
