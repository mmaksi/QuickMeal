import React from "react";

import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { SettingsScreen } from "@/features/settings/screens/settings.screen";
import Text from "@/components/typography/Text";
import { SafeArea } from "@/components/utility/SafeArea";
import { FavouritesScreen } from "@/features/settings/screens/favourites.screen";
import { CameraScreen } from "@/features/settings/screens/camera.screen";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <>
      <SettingsStack.Navigator
        screenOptions={{
          headerShown: true,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <SettingsStack.Screen
          options={{
            header: () => null,
          }}
          name="Settings"
          component={SettingsScreen}
        />
        <SettingsStack.Screen name="Favourites" component={FavouritesScreen} />
        <SettingsStack.Screen name="Camera" component={CameraScreen} />
      </SettingsStack.Navigator>
    </>
  );
};
