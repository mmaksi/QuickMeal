import React, { useContext } from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { FavouritesContext } from "@/services/favourites/favourites.context";
import { Camelize } from "@/utils/camelize";
import { Result } from "@/services/restaurants/restaurant";

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 30px;
  right: 30px;
  z-index: 9;
`;

interface Props {
  restaurant: Camelize<Result>;
}

export const Favourite = ({ restaurant }: Props) => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);

  const isFavourite = favourites.find((r) => r.placeId === restaurant.placeId);

  return (
    <FavouriteButton
      onPress={() =>
        !isFavourite
          ? addToFavourites(restaurant)
          : removeFromFavourites(restaurant)
      }
    >
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={24}
        color={isFavourite ? "red" : "white"}
      />
    </FavouriteButton>
  );
};
