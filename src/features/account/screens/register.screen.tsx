import Spacer from "@/components/spacer/Spacer";
import Text from "@/components/typography/Text";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  AuthInput,
  ErrorContainer,
  Title,
} from "@/features/account/components/account.styles";
import { colors } from "@/infra/theme/colors";
import { AuthenticationContext } from "@/services/authentication/firebase.context";
import { useContext, useState } from "react";
import { ActivityIndicator } from "react-native-paper";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onRegister, error, setError, isLoading } = useContext(
    AuthenticationContext
  );

  const returnHome = () => {
    setError("");
    navigation.goBack();
  };

  return (
    <AccountBackground>
      <AccountCover />
      <Title>QuickMeal</Title>
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
        <Spacer size="large">
          <AuthInput
            label="Repeat Password"
            value={repeatedPassword}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setRepeatedPassword(p)}
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
              icon="email"
              mode="contained"
              onPress={() => onRegister(email, password, repeatedPassword)}
            >
              Register
            </AuthButton>
          )}
        </Spacer>
      </AccountContainer>
      <Spacer size="large">
        <AuthButton mode="contained" onPress={returnHome}>
          Back
        </AuthButton>
      </Spacer>
    </AccountBackground>
  );
};
