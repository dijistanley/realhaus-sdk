import { IAddress } from './address';
import { IAmenitiesInfo } from './amenities';
import { IEntity } from './entity';

export enum PropertyTypeEnum {
  HOUSE = 'house',
  APARTMENT = 'apartment',
  BASEMENT = 'basement',
  CONDO = 'condo',
  DUPLEX = 'duplex',
  MOBILE_HOME = 'mobile_home',
  ROOM = 'room',
  TOWNHOUSE = 'townhouse',
}

export const Utilities = ["Heat", "Electricity", "Gas", "Water", "Internet", "Cable TV"]
export const Pets = ["Small Dogs", "Large Dogs", "Cats", "Other Pets"]

export interface IProperty {
  ownerId: string;
  address: IAddress;
  description: string;
  propertyType: PropertyTypeEnum;
  yearBuilt: number;
  size: number;
  bedrooms: number;
  bathrooms: number;
  photos: { id: string, url: string }[]
}
export type IdProperty = IEntity & IProperty;

export interface IListing {
  title: string;
  propertyId: string;
  bathroomPrivacy: string;
  isSharedProperty: boolean;
  bedroomForRent: number;
  amenities: IAmenitiesInfo[];
  isDeactivated?: boolean;
}

export type IdListing = IEntity & IListing;

export type IdPropertyListing = { listingId: string; } & IListing & IProperty;

export type IdPricedListingProperty = IListingTerm & IListing & IProperty;

export interface IPolicy {
  text: string;
  suffix?: string;
  value: boolean;
}

export interface IListingPolicy {
  utilities: IPolicy[];
  additionalUtilityRules: string;
  houseRules: IPolicy[];
  additionalHouseRules: string;
}

export interface IListingTerm {
  listingId: string;
  dateAvailable: number;
  rentAmount: number;
  depositAmount: number;
  duration: number;
  durationType: string;
  features: IListingPolicy;
}
export type IdLeaseTerm = IEntity & IListingTerm;

export interface ShowingTimeslot {
  timestamp: number; // datetime in unix timestamp
  duration: number; // duration in minutes
  reservedBy: {
    id: string;
    name: string;
  } | null; // userId of the visitor
}

export type IdShowingTimeslot = IEntity & ShowingTimeslot