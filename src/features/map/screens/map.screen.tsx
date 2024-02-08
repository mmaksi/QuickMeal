import React, { useContext, useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";

import { Search } from "@/features/map/components/search.component";
import styled from "styled-components";
import { LocationsContext } from "@/services/location/locations.context";
import { RestaurantsContext } from "@/services/restaurants/restaurants.context";
import { Camelize } from "@/utils/camelize";
import { Result } from "@/services/restaurants/restaurant";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = () => {
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
          longitudeDelta: 0.2,
        }}
      >
        {restaurants.map((restaurant) => {
          return null;
        })}
      </Map>
    </>
  );
};
