import React from "react";
import { StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import styled from "styled-components/native";

const SafeArea = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchBarContainer = styled.View`
  flex-grow: 0;
  padding: ${(props) => props.theme.space[3]};
`;

export default function RestaurantScreens() {
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <SafeArea>
      <SearchBarContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </SearchBarContainer>
      <RestaurantInfoCard />
    </SafeArea>
  );
}
