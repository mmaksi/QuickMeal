import React from "react";
import { StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurantInfoCard from "../components/InfoCard.component";
import styled from "styled-components/native";
import Spacer from "../../components/spacer/Spacer";

const SafeArea = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchBarContainer = styled.View`
  flex-grow: 0;
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantsList = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

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
      <RestaurantsList
        data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }]}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
}
