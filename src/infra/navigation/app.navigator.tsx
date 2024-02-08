import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { Text } from "react-native";

import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { SafeArea } from "@/features/restaurants/components/utility/SafeArea";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "@/features/map/screens/map.screen";

const Tab = createBottomTabNavigator();

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);
const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#FFBC11",
        tabBarInactiveTintColor: "grey",
      }}
    >
      <Tab.Screen
        name="Restaurants"
        component={RestaurantsNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="restaurant" size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="map" size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="settings" size={28} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
    <ExpoStatusBar style="auto" />
  </NavigationContainer>
);
