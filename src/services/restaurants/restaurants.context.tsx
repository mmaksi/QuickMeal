import React, { createContext, ReactNode, useEffect, useState } from "react";
import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";
import { Result } from "./restaurant";
import { Camelize } from "@/utils/camelize";

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

  const fetchRestaurants = () => {
    setIsLoading(true);
    setTimeout(async () => {
      try {
        const results = await restaurantsRequest();
        const transformed = restaurantsTransform(results);
        setRestaurants(transformed);
        setIsLoading(false);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    }, 1500);
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
