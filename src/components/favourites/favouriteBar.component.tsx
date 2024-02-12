import { ScrollView, TouchableOpacity } from "react-native";
import { NavigationProp } from "@react-navigation/native";

import styled from "styled-components/native";

import { RootStackParamList } from "@/infra/navigation/restaurants.navigator";

import { CompactRestaurantInfo } from "@/components/restaurant/CompactRestaurantInfo";
import Spacer from "@/components/spacer/Spacer";
import Text from "@/components/typography/Text";

import { Result } from "@/services/restaurants/restaurant";

import { Camelize } from "@/utils/camelize";

const FavouritesWrapper = styled.View`
  padding: 10px;
`;

interface Props {
  navigation: NavigationProp<RootStackParamList>;
  favourites: Camelize<Result>[];
}
export const FavouritesBar = ({ favourites, navigation }: Props) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouritesWrapper>
      <Spacer position="left" size="medium">
        <Text variant="caption">Favourites</Text>
      </Spacer>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          return (
            <Spacer key={restaurant.name} position="left" size="medium">
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantDetail", {
                    restaurant,
                  })
                }
              >
                <CompactRestaurantInfo restaurant={restaurant} isMap={false} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
