import { mocks, mockImages } from "./mock";
import camelize from "camelize";
import { PlacesResponse, Result } from "./restaurant";

export const restaurantsRequest = (
  location: string
): Promise<PlacesResponse> => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location] as PlacesResponse;
    if (!mock) reject("not found");
    resolve(mock);
  });
};

export const restaurantsTransform = ({ results }: PlacesResponse) => {
  const mappedResults = results.map((restaurant) => {
    const photos = restaurant.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    return {
      ...restaurant,
      photos,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });

  return camelize<Result[]>(mappedResults);
};
