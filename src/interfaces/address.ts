import { LatLngLiteral } from './googlemaps';

export interface GeohashLiteral {
  geohash: string;
}

export interface IAddress {
  streetAddress: string;
  unit: string;
  city: string;
  province: string;
  postalCode: string;
  country: string;
  neighborhood: string;
  geoloc: LatLngLiteral & GeohashLiteral;
}