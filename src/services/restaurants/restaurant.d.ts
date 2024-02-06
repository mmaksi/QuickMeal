interface Location {
  lat: number;
  lng: number;
}

interface Viewport {
  northeast: Location;
  southwest: Location;
}

interface Geometry {
  location: Location;
  viewport: Viewport;
}

interface OpeningHours {
  open_now: boolean;
}

interface Photo {
  height: number;
  html_attributions: string[];
  photo_reference: string;
  width: number;
}

interface PlusCode {
  compound_code: string;
  global_code: string;
}

export interface Result {
  business_status?: string;
  geometry: Geometry;
  icon: string;
  name: string;
  opening_hours?: OpeningHours;
  photos: Photo[] | string[];
  place_id: string;
  plus_code?: PlusCode;
  rating?: number;
  reference: string;
  scope: string;
  types: string[];
  user_ratings_total: number;
  vicinity: string;
  price_level?: number;
  isOpenNow: boolean;
  isClosedTemporarily: boolean;
}

export interface PlacesResponse {
  html_attributions: string[];
  next_page_token: string;
  results: Result[];
  status: string;
}
