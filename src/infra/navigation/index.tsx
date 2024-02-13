import React, { useContext } from "react";
import { AppNavigator } from "./app.navigator";
import { AccountNavigator } from "./account.navigator";
import { AuthenticationContext } from "@/services/authentication/firebase.context";
import { NavigationContainer } from "@react-navigation/native";

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {isAuthenticated && <AppNavigator />}
      {!isAuthenticated && <AccountNavigator />}
    </NavigationContainer>
  );
};
