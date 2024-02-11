import { Result } from "@/services/restaurants/restaurant";
import React from "react";
import styled from "styled-components/native";
import MapView, { MapCallout, MapMarker } from "react-native-maps";
import { Camelize } from "@/utils/camelize";
import { CompactRestaurantInfo } from "@/components/restaurant/CompactRestaurantInfo";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { RootStackParamList } from "@/infra/navigation/restaurants.navigator";

const MyText = styled.Text``;

interface Props {
  restaurant: Camelize<Result>;
  navigation: NavigationProp<RootStackParamList>;
}

export const MarkerCallout = ({ restaurant, navigation }: Props) => (
  <MapCallout
    onPress={() => navigation.navigate("RestaurantDetail", { restaurant })}
  >
    <CompactRestaurantInfo restaurant={restaurant} isMap={true} />
  </MapCallout>
);
