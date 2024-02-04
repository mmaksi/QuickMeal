import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import RestaurantScreens from "./src/features/screen/Restaurants.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infra/theme";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { SafeArea } from "@/features/components/utility/SafeArea";
import Text from "@/components/typography/Text";

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <SafeArea>
      <Text variant="label">Home</Text>
    </SafeArea>
  );
};

const Settings = () => {
  return (
    <SafeArea>
      <Text variant="label">Home</Text>
    </SafeArea>
  );
};

const Map = () => {
  return (
    <SafeArea>
      <Text variant="label">Home</Text>
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
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Settings" component={Settings} />
          <Tab.Screen name="Map" component={Map} />
        </Tab.Navigator>
        <ExpoStatusBar style="auto" />
      </NavigationContainer>
    </ThemeProvider>
  );
}
