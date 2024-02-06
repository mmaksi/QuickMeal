import React, { useContext, useState } from "react";
import { Searchbar } from "react-native-paper";
import RestaurantInfoCard from "@/features/components/InfoCard.component";
import styled from "styled-components/native";
import Spacer from "@/components/spacer/Spacer";
import { SafeArea } from "@/features/components/utility/SafeArea";
import { RestaurantsContext } from "@/services/restaurants/restaurants.context";
import { Camelize } from "@/utils/camelize";
import { Result } from "@/services/restaurants/restaurant";

const SearchBarContainer = styled.View`
  flex-grow: 0;
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantsList = styled.FlatList`
  padding: 0 16px;
`;

export default function RestaurantScreens() {
  const [searchQuery, setSearchQuery] = useState("");
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      <SearchBarContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </SearchBarContainer>
      <RestaurantsList
        data={restaurants}
        renderItem={(props) => {
          const item = props.item as Camelize<Result>;
          return (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item: any) => item.name}
      />
    </SafeArea>
  );
}
