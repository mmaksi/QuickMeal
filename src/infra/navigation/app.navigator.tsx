import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { Button, Text } from "react-native";

import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { SafeArea } from "@/features/restaurants/components/utility/SafeArea";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "@/features/map/screens/map.screen";
import { AuthenticationContext } from "@/services/authentication/firebase.context";

const Tab = createBottomTabNavigator();

const Settings = () => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <Text>Settings</Text>
      <Button title="logout" onPress={() => onLogout()} />
    </SafeArea>
  );
};

export const AppNavigator = () => (
  <>
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#FFBC11",
        tabBarInactiveTintColor: "grey",
      }}
    >
      {/* Every Screen component receives a navigation prop */}
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
  </>
);
