export interface LatLngBoundsLiteral {
  east: number;
  north: number;
  south: number;
  west: number;
}
export interface LatLngLiteral {
  lat: number; lng: number;
}
export interface LatLng {
  lat: () => number; lng: () => number;
}

export interface AutocompletionRequest {
  input: string;
  bounds?: LatLngBoundsLiteral;
  componentRestrictions?: { country: string | string[] };
  location?: LatLngLiteral;
  radius?: number;
}

export interface AutocompletePrediction {
  description: string;
  place_id: string;
  reference: string;
  structured_formatting: {
    main_text: string;
    secondary_text: string;
    main_text_matched_substrings: [
      {
        offset: number;
        length: number;
      },
    ];
  };
  terms: { offset: number; value: string }[];
  types: string[];
}

export interface AutocompleteResponse { predictions: AutocompletePrediction[] }

// https://developers.google.com/maps/documentation/javascript/reference/places-service#FindPlaceFromQueryRequest
export interface FindPlaceFromQueryRequest {
  // The request's query. For example, the name or address of a place.
  query: string;
  // See: https://developers.google.com/maps/documentation/javascript/reference/places-service#PlaceResult for list of possible fields
  fields: string[];
}

export interface IAddressComponent {
  long_name: string;
  short_name: string;
  types: string[];
}

// See: https://developers.google.com/maps/documentation/javascript/reference/places-service#PlaceResult
export interface PlaceResult {
  name?: string;
  place_id?: string;
  formatted_address?: string;
  address_components?: IAddressComponent[]
  geometry?: { location: { lat: number; lng: number } }
}

/// See: https://developers.google.com/maps/documentation/javascript/reference/geocoder#GeocoderRequest
export interface GeocoderRequest {
  // Address to geocode. One, and only one, of address, location and placeId must be supplied.
  address?: string;
  bounds?: LatLngBoundsLiteral;
  componentRestrictions?: { country: string | string[] };
  location?: LatLngLiteral;
  placeId?: string;
  region?: string;
}
export interface GeocoderResponse {
  results: GeocoderResult[];
}
export interface GeocoderGeometry {
  location: LatLng;
}
export interface GeocoderAddressComponent {
  long_name: string;
  short_name: string;
  types: string[];
}
export interface GeocoderResult {
  address_components: GeocoderAddressComponent[];
  formatted_address: string;
  geometry: GeocoderGeometry;
  place_id: string;
  types: string[];
  partial_match?: boolean;
}

// https://developers.google.com/maps/documentation/javascript/reference/places-service#PlaceDetailsRequest
export interface PlaceDetailRequest {
  placeId: string;
}