import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import RestaurantScreens from "@/features/screen/Restaurants.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator screenOptions={{ headerShown: false }}>
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantScreens}
      />
    </RestaurantStack.Navigator>
  );
};
