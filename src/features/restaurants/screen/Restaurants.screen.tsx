import { TouchableOpacity } from "react-native-gesture-handler";
import { NavigationProp } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { ActivityIndicator } from "react-native";

import styled from "styled-components/native";

import { RootStackParamList } from "@/infra/navigation/restaurants.navigator";

import { RestaurantsContext } from "@/services/restaurants/restaurants.context";
import { FavouritesContext } from "@/services/favourites/favourites.context";
import { Result } from "@/services/restaurants/restaurant";

import RestaurantInfoCard from "@/features/restaurants/components/InfoCard.component";
import { SafeArea } from "@/components/utility/SafeArea";
import { Search } from "@/features/restaurants/components/search.component";

import { FavouritesBar } from "@/components/favourites/favouriteBar.component";
import Spacer from "@/components/spacer/Spacer";

import { Camelize } from "@/utils/camelize";

const RestaurantsList = styled.FlatList`
  padding: 0 16px;
`;

const Loading = styled.View`
  position: absolute;
  top: 50%;
  left: 46%;
  z-index: 1;
`;

type Props = {
  navigation: NavigationProp<RootStackParamList>;
};

export default function RestaurantScreens({ navigation }: Props) {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  const [isToggled, setIsToggled] = useState(false);
  const { favourites } = useContext(FavouritesContext);
  return (
    <>
      {isLoading && (
        <Loading>
          <ActivityIndicator color="#FFBC11" size="large" />
        </Loading>
      )}

      <SafeArea>
        <Search
          isFavouritesToggled={isToggled}
          onFavouritesToggle={() => setIsToggled(!isToggled)}
        />
        {isToggled && (
          <FavouritesBar favourites={favourites} navigation={navigation} />
        )}
        <RestaurantsList
          data={restaurants}
          renderItem={(props) => {
            const item = props.item as Camelize<Result>;
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantDetail", { restaurant: item })
                }
              >
                <Spacer key={item.name} position="bottom" size="large">
                  <RestaurantInfoCard restaurant={item} />
                </Spacer>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item: any) => item.name}
        />
      </SafeArea>
    </>
  );
}
