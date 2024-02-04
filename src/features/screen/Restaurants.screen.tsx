import React, { useState } from "react";
import { StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurantInfoCard from "../components/InfoCard.component";
import styled from "styled-components/native";
import Spacer from "../../components/spacer/Spacer";

const SafeArea = styled.SafeAreaView`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

const SearchBarContainer = styled.View`
  flex-grow: 0;
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantsList = styled.FlatList`
  padding: 16px;
`;

export default function RestaurantScreens() {
  const [searchQuery, setSearchQuery] = useState("");

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
        data={[{ name: "1" }, { name: "2" }, { name: "3" }, { name: "4" }]}
        renderItem={({ item }) => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard
              restaurant={{
                name: "Some Restaurant",
                icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
                photos: [
                  "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
                ],
                address: "100 some random street",
                isOpenNow: true,
                rating: 4,
                isClosedTemporarily: true,
              }}
            />
          </Spacer>
        )}
        keyExtractor={(item: any) => item.name}
      />
    </SafeArea>
  );
}
