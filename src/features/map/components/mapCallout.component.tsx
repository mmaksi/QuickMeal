import { Result } from "@/services/restaurants/restaurant";
import React from "react";
import styled from "styled-components/native";
import MapView, { MapCallout, MapMarker } from "react-native-maps";
import { Camelize } from "@/utils/camelize";
import { CompactRestaurantInfo } from "@/components/restaurant/CompactRestaurantInfo";

const MyText = styled.Text``;

interface Props {
  restaurant: Camelize<Result>;
}

export const MarkerCallout = ({ restaurant }: Props) => (
  <MapCallout>
    <CompactRestaurantInfo restaurant={restaurant} />
  </MapCallout>
);
