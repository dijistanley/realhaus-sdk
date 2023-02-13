import { IEntity } from './entity';

export interface IMail {
  to: string;
  message: {
    subject: string;
    html: string;
  };
}

export type IdMail = IEntity & IMail;

export interface IListingMailInfo {
  listingId: string;
  landlordName: string;
  rentAmount: number;
  city: string;
  province: string;
}

