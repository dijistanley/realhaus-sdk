import { IEntity } from './entity';

export interface IProspectiveTenant {
  firstname: string;
  lastname: string;
  email: string;
  listingId: string;
}

export type IdProspectiveTenent = IEntity & IProspectiveTenant;
