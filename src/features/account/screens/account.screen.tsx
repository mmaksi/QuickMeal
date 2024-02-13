import Spacer from "@/components/spacer/Spacer";

import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  Title,
  AnimationWrapper,
} from "@/features/account/components/account.styles";

import LottieView from "lottie-react-native";
import { useEffect, useRef } from "react";

export const AccountScreen = ({ navigation }) => {
  const animation = useRef<null>();

  return (
    <AccountBackground>
      <AccountCover />
      <AnimationWrapper>
        <LottieView
          autoPlay
          ref={animation}
          key="animation"
          style={{
            width: 400,
            height: 400,
          }}
          source={require("assets/watermelon.json")}
        />
      </AnimationWrapper>
      <Title>Quick Meals</Title>
      <AccountContainer>
        <AuthButton
          icon="login"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>
        <Spacer size="large">
          <AuthButton
            icon="email-outline"
            mode="contained"
            onPress={() => navigation.navigate("Register")}
          >
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
