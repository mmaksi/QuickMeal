import { createContext, useEffect, useState } from "react";
import { locationRequest, locationTransform } from "./locations.service";

interface LocationsContextType {
  keyword: string;
  location: { lat: number; lng: number };
  isLoading: boolean;
  error: any;
  search: (searchKeyword?: string) => Promise<void>;
}

const LocationsContext = createContext<LocationsContextType>(
  {} as LocationsContextType
);

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    onSearch();
  }, []);

  const onSearch = async (searchKeyword = "Antwerp") => {
    setIsLoading(true);
    setKeyword(keyword);
    try {
      const locationInfo = await locationRequest(
        searchKeyword.toLocaleLowerCase()
      );
      const result = locationTransform(locationInfo);
      setLocation(result);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

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
