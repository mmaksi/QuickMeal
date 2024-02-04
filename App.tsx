import React, { Fragment } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import RestaurantScreens from "./src/features/screen/Restaurants.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infra/theme";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

export default function App(): JSX.Element {
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
    <Fragment>
      <ThemeProvider theme={theme}>
        <RestaurantScreens />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </Fragment>
  );
}
