import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";

import { ThemeProvider } from "styled-components/native";

import { theme } from "@/infra/theme";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { RestaurantsContextProvider } from "@/services/restaurants/restaurants.context";
import { LocationContextProvider } from "@/services/location/locations.context";
import { Navigation } from "@/infra/navigation";
import { FavouritesContextProvider } from "@/services/favourites/favourites.context";
import { AuthContextProvider } from "@/services/authentication/firebase.context";

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
      <AuthContextProvider>
        <Navigation />
      </AuthContextProvider>
    </ThemeProvider>
  );
}
