import React from "react";
import styled from "styled-components/native";
import WebView from "react-native-webview";
import { Platform } from "react-native";

import Text from "@/components/typography/Text";

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebview = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const isAndroid = Platform.OS === "android";

export const CompactRestaurantInfo = ({ restaurant, isMap }) => {
  return (
    <Item>
      {isAndroid && isMap && (
        <CompactWebview source={{ uri: restaurant.photos[0] }} />
      )}
      {!(isAndroid && isMap) && (
        <CompactImage source={{ uri: restaurant.photos[0] }} />
      )}
      <Text variant="caption" numberOfLines={3}>
        {restaurant.name}
      </Text>
    </Item>
  );
};
