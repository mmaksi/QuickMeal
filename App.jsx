import React from "react";
import { Fragment } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import RestaurantScreens from "./src/features/screen/restaurants.screen";

export default function App() {
  return (
    <Fragment>
      <RestaurantScreens />
      <ExpoStatusBar style="auto" />
    </Fragment>
  );
}
