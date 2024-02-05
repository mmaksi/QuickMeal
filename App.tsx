import React from "react";

import { ThemeProvider } from "styled-components/native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { theme } from "@/infra/theme";
import Text from "@/components/typography/Text";
import RestaurantScreens from "@/features/screen/Restaurants.screen";
import { SafeArea } from "@/features/components/utility/SafeArea";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { MaterialIcons } from "@expo/vector-icons";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

const Tab = createBottomTabNavigator();

const Settings = () => {
  return (
    <SafeArea>
      <Text variant="label">Settings</Text>
    </SafeArea>
  );
};

const Map = () => {
  return (
    <SafeArea>
      <Text variant="label">Map</Text>
    </SafeArea>
  );
};

export default function App() {
  const [oswald] = useOswald({
    Oswald_400Regular,
  });
  const [lato] = useLato({
    Lato_400Regular,
  });

  if (!oswald || !lato) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
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
            component={RestaurantScreens}
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="restaurant" size={28} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Map"
            component={Map}
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
    </ThemeProvider>
  );
}
