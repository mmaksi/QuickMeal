import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";
import { Result } from "./restaurant";
import { Camelize } from "@/utils/camelize";
import { LocationsContext } from "../location/locations.context";

interface RestaurantsContextType {
  restaurants: Camelize<Result[]> | undefined[];
  isLoading: boolean;
  error: any;
}

export const RestaurantsContext = createContext<RestaurantsContextType>(
  {} as RestaurantsContextType
);

interface Props {
  children: ReactNode;
}

type RestaurantsState = Camelize<Result[]> | undefined[];

export const RestaurantsContextProvider = ({ children }: Props) => {
  // You can add state or context logic here if needed
  const [restaurants, setRestaurants] = useState<RestaurantsState>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { location } = useContext(LocationsContext);

  const fetchRestaurants = async (loc: string) => {
    setIsLoading(true);
    setRestaurants([]);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    try {
      const results = await restaurantsRequest(loc);
      const transformed = restaurantsTransform(results);
      setRestaurants(transformed);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      fetchRestaurants(locationString);
    }
  }, [location]);

  return (
    <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
