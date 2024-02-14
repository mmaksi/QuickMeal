import Spacer from "@/components/spacer/Spacer";
import Text from "@/components/typography/Text";
import { SafeArea } from "@/components/utility/SafeArea";
import { AuthenticationContext } from "@/services/authentication/firebase.context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";

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
  const [photo, setPhoto] = useState("assets/avatar.png");
  const theme = useTheme();

  useFocusEffect(
    useCallback(() => {
      getProfilePicture();
    }, [user])
  );

  const getProfilePicture = async () => {
    const photoUri = await AsyncStorage.getItem(`${user.uid}-photo`);
    setPhoto(photoUri);
  };

  return (
    <SafeArea>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          <Avatar.Image
            size={80}
            source={photo ? { uri: photo } : require("assets/avatar.png")}
            style={{ backgroundColor: "white" }}
          />
        </TouchableOpacity>
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
