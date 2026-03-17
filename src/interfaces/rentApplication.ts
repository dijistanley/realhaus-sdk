import { RentApplicationStatus } from '../enums/rentApplication';
import { IEntity } from './entity';

export interface IRentApplicationForm {
  moveinDate: number;
  hasPets: boolean;
  hasVehicle: boolean;
  smokes: boolean;
}
export interface IRentApplication {
  tenantId: string;
  listingId: string;
  dateSubmitted: number;
  application: IRentApplicationForm;
  status: RentApplicationStatus;
  statusReason?: string;
  statusDate?: number;
}

export type IdRentApplication = IEntity & IRentApplication;