import { createContext, useEffect, useState } from "react";
import { locationRequest, locationTransform } from "./locations.service";
import { Viewport } from "./locations";

interface LocationsContextType {
  keyword: string;
  location: { lat: number; lng: number; viewport: Viewport };
  isLoading: boolean;
  error: any;
  search: (searchKeyword?: string) => Promise<void>;
}

export const LocationsContext = createContext<LocationsContextType>(
  {} as LocationsContextType
);

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("San Francisco");
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = async (searchKeyword: string) => {
    console.log("object");
    setIsLoading(true);
    setKeyword(searchKeyword);
  };

  const setSearchLocation = async () => {
    try {
      const locationInfo = await locationRequest(keyword.toLocaleLowerCase());
      const locationResult = locationTransform(locationInfo);
      setLocation(locationResult);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!keyword.length) return;
    setSearchLocation();
  }, [keyword]);

  return (
    <LocationsContext.Provider
      value={{
        keyword,
        location,
        isLoading,
        error,
        search: onSearch,
      }}
    >
      {children}
    </LocationsContext.Provider>
  );
};
