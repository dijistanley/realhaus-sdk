import { IAddress } from './address';

export interface IUserBio {
  firstname: string;
  lastname: string;
  gender: string;
  dateOfBirth: number;
  phoneNumber: string;
  photoURL: string;
}

export interface IProfile extends IUserBio {
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
  phoneNumber: string;
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
export interface ITenantProfile {
  occupation: IOccupation;
  identity: IIdentity;
  address: IResidenceInfo;
  previousNonRentalAddresses: IResidenceInfo[];
  emergencyContact: IEmergencyContact;
}
export interface IEmergencyContact {
  name: string;
  email: string;
  phone: string;
}

export interface IServiceAgreementConsent {
  userId: string;
  timeStamp: number;
  deviceInfo: {
    userAgent: string;
    operatingSystem: string;
  };
}

export type ITenantInfo = ITenantProfile & IUserBio;
