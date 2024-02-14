import Spacer from "@/components/spacer/Spacer";
import Text from "@/components/typography/Text";
import { SafeArea } from "@/components/utility/SafeArea";
import RestaurantInfoCard from "@/features/restaurants/components/InfoCard.component";
import { RestaurantsList } from "@/features/restaurants/components/restaurantList.styles";
import { FavouritesContext } from "@/services/favourites/favourites.context";
import { Result } from "@/services/restaurants/restaurant";
import { Camelize } from "@/utils/camelize";
import { useContext } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const NoFavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  return favourites.length ? (
    <SafeArea>
      <RestaurantsList
        data={favourites}
        renderItem={(props) => {
          const item = props.item as Camelize<Result>;
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: item,
                })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item: Camelize<Result>) => item.name}
      />
    </SafeArea>
  ) : (
    <NoFavouritesArea>
      <Text>No favourites yet</Text>
    </NoFavouritesArea>
  );
};
