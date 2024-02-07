import React, { useContext, useState } from "react";
import RestaurantInfoCard from "@/features/components/InfoCard.component";
import styled from "styled-components/native";
import Spacer from "@/components/spacer/Spacer";
import { SafeArea } from "@/features/components/utility/SafeArea";
import { RestaurantsContext } from "@/services/restaurants/restaurants.context";
import { Camelize } from "@/utils/camelize";
import { Result } from "@/services/restaurants/restaurant";
import { ActivityIndicator } from "react-native";
import { Search } from "../components/search.component";

const RestaurantsList = styled.FlatList`
  padding: 0 16px;
`;

const Loading = styled.View`
  position: absolute;
  top: 50%;
  left: 46%;
  z-index: 1;
`;

export default function RestaurantScreens() {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);

  return (
    <>
      {isLoading && (
        <Loading>
          <ActivityIndicator color="#FFBC11" size="large" />
        </Loading>
      )}

      <SafeArea>
        <Search />
        <RestaurantsList
          data={restaurants}
          renderItem={(props) => {
            const item = props.item as Camelize<Result>;
            return (
              <Spacer key={item.name} position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            );
          }}
          keyExtractor={(item: any) => item.name}
        />
      </SafeArea>
    </>
  );
}
