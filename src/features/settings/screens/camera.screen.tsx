import Text from "@/components/typography/Text";
import { useContext, useEffect, useRef, useState } from "react";
import { View } from "react-native";
import { Camera, CameraType } from "expo-camera";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome6 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import { Button } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "@/services/authentication/firebase.context";

const CameraContainer = styled.View`
  width: 100%;
  height: 100%;
`;

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;

const FlipCamera = styled(TouchableOpacity)`
  max-width: auto;
`;

const Snap = styled(TouchableOpacity)`
  max-width: auto;
`;

const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: ${(props) => props.theme.space[4]};
`;

const ControlsContainer = styled.View`
  justify-content: center;
  align-items: flex-end;
  margin-top: auto;
  margin-bottom: ${(props) => props.theme.space[4]};
  flex-direction: row;
  gap: 40px;
`;

export const CameraScreen = ({ navigation }) => {
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [type, setType] = useState(CameraType.front);
  const { user } = useContext(AuthenticationContext);
  const cameraRef = useRef<Camera>();

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  const snap = async () => {
    if (cameraRef && cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  useEffect(() => {
    (async () => {
      await requestPermission();
    })();
  }, []);

  if (permission === null) {
    return <View />;
  }
  if (permission.granted === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <CameraContainer>
      <ProfileCamera
        ref={(camera) => (cameraRef.current = camera)}
        type={type}
        ratio={"16:9"}
      >
        <ControlsContainer>
          <Snap onPress={snap}>
            <Feather name="camera" size={50} color="white" />
          </Snap>
          <FlipCamera onPress={toggleCameraType}>
            <FontAwesome6 name="arrows-rotate" size={50} color="white" />
          </FlipCamera>
        </ControlsContainer>
      </ProfileCamera>
    </CameraContainer>
  );
};
