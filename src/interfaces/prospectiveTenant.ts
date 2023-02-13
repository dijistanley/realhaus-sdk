import { IEntity } from './entity';

export interface IProspectiveTenant {
  firstname: string;
  lastname: string;
  email: string;
  listingInfo: {
    listingId: string;
    landlordName: string;
    rentAmount: number;
    city: string;
    province: string;
  };
}

export type IdProspectiveTenant = IEntity & IProspectiveTenant;
