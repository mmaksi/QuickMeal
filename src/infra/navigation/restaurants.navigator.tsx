import React from "react";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import RestaurantScreens from "@/features/restaurants/screen/Restaurants.screen";
import { Text } from "react-native-paper";
import { Result } from "@/services/restaurants/restaurant";
import { Camelize } from "@/utils/camelize";
import { RestaurantDetailScreen } from "@/features/restaurants/screen/RestaurantDetails.component";

export type RootStackParamList = {
  Restaurants: undefined;
  RestaurantDetail: { restaurant: Camelize<Result> };
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
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
