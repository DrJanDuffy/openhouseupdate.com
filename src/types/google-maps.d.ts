declare global {
  interface Window {
    google: typeof google;
  }
}

declare namespace google.maps {
  class Map {
    constructor(mapDiv: Element | null, opts?: MapOptions);
  }

  interface MapOptions {
    center?: LatLng | LatLngLiteral;
    zoom?: number;
    styles?: MapTypeStyle[];
    mapTypeControl?: boolean;
    streetViewControl?: boolean;
    fullscreenControl?: boolean;
  }

  interface LatLng {
    lat(): number;
    lng(): number;
  }

  interface LatLngLiteral {
    lat: number;
    lng: number;
  }


  class LatLng {
    constructor(lat: number, lng: number);
  }

  class Size {
    constructor(width: number, height: number);
  }

  class Point {
    constructor(x: number, y: number);
  }

  enum Animation {
    DROP = 1,
    BOUNCE = 2
  }

  class Marker {
    constructor(opts?: MarkerOptions);
    setMap(map: Map | null): void;
    getPosition(): LatLng;
    setIcon(icon: Icon | Symbol | string): void;
    addListener(eventName: string, handler: Function): void;
  }

  interface MarkerOptions {
    position?: LatLng | LatLngLiteral;
    map?: Map;
    title?: string;
    icon?: Icon | Symbol | string;
    animation?: Animation;
  }

  interface Icon {
    url: string;
    scaledSize?: Size;
    anchor?: Point;
  }



  interface DirectionsRequest {
    origin: LatLng | LatLngLiteral | string;
    destination: LatLng | LatLngLiteral | string;
    waypoints?: DirectionsWaypoint[];
    travelMode?: TravelMode;
    optimizeWaypoints?: boolean;
  }

  interface DirectionsWaypoint {
    location: LatLng | LatLngLiteral | string;
    stopover?: boolean;
  }

  enum TravelMode {
    DRIVING = 0,
    WALKING = 1,
    BICYCLING = 2,
    TRANSIT = 3
  }

  enum DirectionsStatus {
    OK = 'OK',
    NOT_FOUND = 'NOT_FOUND',
    ZERO_RESULTS = 'ZERO_RESULTS',
    MAX_WAYPOINTS_EXCEEDED = 'MAX_WAYPOINTS_EXCEEDED',
    INVALID_REQUEST = 'INVALID_REQUEST',
    OVER_QUERY_LIMIT = 'OVER_QUERY_LIMIT',
    REQUEST_DENIED = 'REQUEST_DENIED',
    UNKNOWN_ERROR = 'UNKNOWN_ERROR'
  }

  interface DirectionsResult {
    routes: DirectionsRoute[];
  }

  interface DirectionsRoute {
    legs: DirectionsLeg[];
  }

  interface DirectionsLeg {
    steps: DirectionsStep[];
  }

  interface DirectionsStep {
    // Add properties as needed
  }


  interface MapTypeStyle {
    featureType?: string;
    elementType?: string;
    stylers?: MapTypeStyler[];
  }

  interface MapTypeStyler {
    visibility?: string;
  }

}

export {};
