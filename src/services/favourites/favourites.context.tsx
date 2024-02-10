import { Camelize } from "@/utils/camelize";
import React, { ReactNode, createContext, useState } from "react";
import { Result } from "../restaurants/restaurant";

export const FavouritesContext = createContext<FavouritesContextType>(
  {} as FavouritesContextType
);

interface Props {
  children: ReactNode;
}

interface FavouritesContextType {
  favourites: Camelize<Result>[];
  addToFavourites: (restaurant: Camelize<Result>) => void;
  removeFromFavourites: (restaurant: Camelize<Result>) => void;
}

export const FavouritesContextProvider = ({ children }: Props) => {
  const [favourites, setFavourites] = useState<Camelize<Result>[]>([]);

  const add = (restaurant: Camelize<Result>) => {
    setFavourites([...favourites, restaurant]);
  };

  const remove = (restaurant: Camelize<Result>) => {
    const newFavourites = favourites.filter(
      (x: Camelize<Result>) => x.placeId !== restaurant.placeId
    );
    setFavourites(newFavourites);
  };

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites: add,
        removeFromFavourites: remove,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
