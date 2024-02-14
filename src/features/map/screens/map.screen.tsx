import React, { useContext, useState, useEffect } from "react";
import MapView, { MapCallout, MapMarker } from "react-native-maps";

import { Search } from "@/features/map/components/search.component";
import styled from "styled-components";
import { LocationsContext } from "@/services/location/locations.context";
import { RestaurantsContext } from "@/services/restaurants/restaurants.context";
import { Text } from "react-native-paper";
import { Result } from "@/services/restaurants/restaurant";
import { Camelize } from "@/utils/camelize";
import { MarkerCallout } from "../components/mapCallout.component";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "@/infra/navigation/restaurants.navigator";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationsContext);
  const { restaurants } = useContext(RestaurantsContext) as any;

  const [latDelta, setLatDelta] = useState(0);

  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant: Camelize<Result>) => {
          return (
            <MapMarker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <MarkerCallout restaurant={restaurant} navigation={navigation} />
            </MapMarker>
          );
        })}
      </Map>
    </>
  );
};
