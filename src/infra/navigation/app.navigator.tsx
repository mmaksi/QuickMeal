import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { Button, Text } from "react-native";

import { SafeArea } from "@/components/utility/SafeArea";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "@/features/map/screens/map.screen";
import { AuthenticationContext } from "@/services/authentication/firebase.context";
import { FavouritesContextProvider } from "@/services/favourites/favourites.context";
import { LocationContextProvider } from "@/services/location/locations.context";
import { RestaurantsContextProvider } from "@/services/restaurants/restaurants.context";

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
  <FavouritesContextProvider>
    <LocationContextProvider>
      <RestaurantsContextProvider>
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
      </RestaurantsContextProvider>
    </LocationContextProvider>
  </FavouritesContextProvider>
);
