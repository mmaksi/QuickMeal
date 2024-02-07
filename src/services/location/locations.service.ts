import camelize from "camelize";

import { locations } from "./locations.mock";
import { LocationInfo, LocationResult } from "./locations";

export const locationRequest = (searchTerm: string): Promise<LocationInfo> => {
  return new Promise((resolve, reject) => {
    const locationMock: LocationInfo = locations[searchTerm];
    if (!locationMock) {
      reject("not found");
    }
    resolve(locationMock);
  });
};

export const locationTransform = (result: LocationInfo) => {
  const formattedResponse = camelize(result);
  const { geometry } = formattedResponse.results[0] as LocationResult;
  const { lat, lng } = geometry.location;

  return { lat, lng };
};
