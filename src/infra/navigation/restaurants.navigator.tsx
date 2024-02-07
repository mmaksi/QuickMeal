import React from "react";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import RestaurantScreens from "@/features/screen/Restaurants.screen";
import { Text } from "react-native-paper";

export type RootStackParamList = {
  Restaurants: undefined;
  RestaurantDetail: undefined;
};

const RestaurantStack = createStackNavigator<RootStackParamList>();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      {/* Every component in the stack will receive a navigation prop */}
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantScreens}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={() => <Text>Restaurant Detail</Text>}
      />
    </RestaurantStack.Navigator>
  );
};
