import { IAddress } from './address';

export interface IProfile {
  firstname: string;
  lastname: string;
  gender: string;
  dateOfBirth: number;
  phone: string;
  address: IResidenceInfo;
  isVerified: boolean;
  verifyContext: IVerifyContext;
}

export interface IVerifyContext {
  vendor: string;
  vendorContextId: string;
  dateVerified: number;
}

export enum IncomeType {
  WEEKLY = 'weekly',
  BIWEEKLY = 'bi-weekly',
  MONTHLY = 'monthly',
  YEARLY = 'yearly',
}

export interface IOccupation {
  status: string;
  employer: string;
  title: string;
  startDate: number;
  businessType: string;
  income: number;
  incomeType: IncomeType;
  manager: string;
}

export interface IUserInfo {
  uid: string;
  username: string;
  email: string;
  photoURL: string;
}

export enum IdentityType {
  DRIVERS_LICENSE,
  TRAVEL_PASSPORT,
}

export interface IIdentity {
  image: string;
  type: IdentityType;
  country: string;
  expiryDate: number;
  verified: boolean;
}
export interface IResidenceInfo {
  address: IAddress;
  moveinDate: number;
  moveoutDate?: number;
}
export interface ITenantProfile extends IProfile {
  occupation: IOccupation;
  identity: IIdentity;
  previousNonRentalAddresses: IResidenceInfo[];
  emergencyContact: IEmergencyContact;
}
export interface IEmergencyContact {
  name: string;
  email: string;
  phone: string;
}
