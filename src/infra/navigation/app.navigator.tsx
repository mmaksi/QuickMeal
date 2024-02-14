import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "@/features/map/screens/map.screen";
import { FavouritesContextProvider } from "@/services/favourites/favourites.context";
import { LocationContextProvider } from "@/services/location/locations.context";
import { RestaurantsContextProvider } from "@/services/restaurants/restaurants.context";
import { SettingsNavigator } from "./settings.navigator";

const Tab = createBottomTabNavigator();

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
            component={SettingsNavigator}
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
