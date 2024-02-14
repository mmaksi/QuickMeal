import Spacer from "@/components/spacer/Spacer";
import Text from "@/components/typography/Text";
import { SafeArea } from "@/components/utility/SafeArea";
import { AuthenticationContext } from "@/services/authentication/firebase.context";
import React, { useContext } from "react";

import { Avatar, List, useTheme } from "react-native-paper";
import styled from "styled-components/native";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;
const AvatarContainer = styled.View`
  align-items: center;
  margin-top: 8px;
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  const theme = useTheme();

  return (
    <SafeArea>
      <AvatarContainer>
        <Avatar.Image
          size={80}
          source={require("assets/avatar.png")}
          style={{ backgroundColor: "white" }}
        />
        <Spacer position="top" size="large">
          <Text variant="label">{user.email}</Text>
        </Spacer>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingsItem
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};
