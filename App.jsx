import React from "react";
import { Fragment } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import RestaurantScreens from "./src/features/screen/restaurants.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infra/theme";

export default function App() {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <RestaurantScreens />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </Fragment>
  );
}
