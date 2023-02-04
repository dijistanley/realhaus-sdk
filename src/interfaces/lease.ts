import { FeePaymentFrequency, LeaseEndAction, LeaseAgreementStatus, OccupantRelationship } from '../enums/lease';
import { IDescription } from './description';
import { IEntity } from './entity';
import { IListing, IProperty } from './property';

export type ILeaseListingInfo = Omit<IListing, 'propertyId'> & Omit<IProperty, 'ownerId'>;

export interface UtilityCoverage {
  utility: string;
  percentage: number
}
export interface ILeasePolicy {
  petsAllowed: boolean;
  smokingAllowed: boolean;
  rentInsuranceProof: boolean;
  autoPaymentSetup: boolean;
  utilitiesCovered: UtilityCoverage[]
}

export interface ILeaseFees {
  nsfFee: number;
  lateRentFee: number;
  parkingFee?: number;
  moveInFee: number;
  moveOutFee: number;
  petFee?: number;
  petFeeFrequency: FeePaymentFrequency;
  smokingFee?: number;
  smokingFeeFrequency: FeePaymentFrequency;
}

export type ILeaseClause = IDescription;

export type ILeaseRule = IDescription;

export interface ILeaseSignature {
  acknowledgedBy: string;
  userAgent: string;
  timestamp: number;
}

export interface ILeaseAgreement {
  tenantIds: string[];
  ownerId: string;
  rentApplicationId: string;
  listingId: string;
  listingInfo: ILeaseListingInfo;
  moveinDate: number;
  moveoutDate: number;
  rentAmount: number;
  securityDepositAmount: number;
  leaseEndAction: LeaseEndAction;
  fees: ILeaseFees;
  policies: ILeasePolicy;
  clauses: ILeaseClause[];
  rules: ILeaseRule[];
  signatures: ILeaseSignature[];
  signatureRequestDate?: number;
  status: LeaseAgreementStatus;
  occupants: IOccupant[];
  changeRequests: ILeaseChangeRequest[];
  source: string
}

export type IdLeaseAgreement = IEntity & ILeaseAgreement;

export interface ILeaseInvite {
  leaseId: string;
  email: string;
  firstname: string;
  isLandlord: boolean;
}
export type IdLeaseInvite = IEntity & ILeaseInvite;

export interface IOccupant {
  firstName: string;
  middleName: string;
  lastName: string;
  relationship: OccupantRelationship;
}

export interface ILeaseChangeRequest {
  message: string;
  requestedBy: string;
  userAgent: string;
  timestamp: number;
  resolvedAt?: number;
}