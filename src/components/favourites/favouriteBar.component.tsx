import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import Spacer from "@/components/spacer/Spacer";
import { CompactRestaurantInfo } from "@/components/restaurant/CompactRestaurantInfo";
import Text from "@/components/typography/Text";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "@/infra/navigation/restaurants.navigator";
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
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
