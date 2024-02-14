import { ActivityIndicator } from "react-native-paper";

import Spacer from "@/components/spacer/Spacer";
import Text from "@/components/typography/Text";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  AuthInput,
  BackButton,
  ErrorContainer,
} from "@/features/account/components/account.styles";
import { AuthenticationContext } from "@/services/authentication/firebase.context";
import { useContext, useState } from "react";
import { colors } from "@/infra/theme/colors";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error, setError, isLoading } = useContext(
    AuthenticationContext
  );

  const returnHome = () => {
    setError("");
    navigation.goBack();
  };

  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        <Spacer size="large">
          <AuthInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setPassword(p)}
          />
        </Spacer>
        {error && (
          <ErrorContainer>
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
        <Spacer size="large">
          {isLoading && (
            <ActivityIndicator animating={true} color={colors.brand.primary} />
          )}
          {!isLoading && (
            <AuthButton
              icon="lock-open-outline"
              mode="contained"
              onPress={() => onLogin(email, password)}
            >
              Login
            </AuthButton>
          )}
        </Spacer>
      </AccountContainer>
      <Spacer size="large">
        <BackButton mode="contained" onPress={returnHome}>
          Back
        </BackButton>
      </Spacer>
    </AccountBackground>
  );
};
