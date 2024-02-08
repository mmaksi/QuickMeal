interface Location {
  lat: number;
  lng: number;
}

export interface Viewport {
  northeast: Location;
  southwest: Location;
}

interface Geometry {
  location: Location;
  viewport: Viewport;
}

export interface LocationResult {
  geometry: Geometry;
}

export interface LocationInfo {
  results: Result[];
}
