import { Camelize } from "@/utils/camelize";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Result } from "../restaurants/restaurant";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../authentication/firebase.context";

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

  const { user } = useContext(AuthenticationContext);

  const saveFavourites = async (value: Camelize<Result>[], uid: string) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue);
    } catch (e) {
      console.log("error storing", e);
    }
  };

  const loadFavourites = async (uid: string) => {
    try {
      const value = await AsyncStorage.getItem(`@favourites-${uid}`);
      if (value !== null) {
        setFavourites(JSON.parse(value));
      }
    } catch (e) {
      console.log("error loading", e);
    }
  };

  const add = (restaurant: Camelize<Result>) => {
    setFavourites([...favourites, restaurant]);
  };

  const remove = (restaurant: Camelize<Result>) => {
    const newFavourites = favourites.filter(
      (x: Camelize<Result>) => x.placeId !== restaurant.placeId
    );
    setFavourites(newFavourites);
  };

  useEffect(() => {
    loadFavourites(user.uid);
  }, []);

  useEffect(() => {
    saveFavourites(favourites, user.uid);
  }, [favourites]);

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
