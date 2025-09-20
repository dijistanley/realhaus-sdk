import {
  FeePaymentFrequency,
  LeaseEndAction,
  LeaseAgreementStatus,
  OccupantRelationship,
  LeaseAgreementSource,
  RentDueDay,
  AddedLeaseAgreementDocument,
  LeaseRequestDocStatus,
  AutoDebitSetupStatus,
  RentInsuranceStatus,
} from '../enums/lease';
import { IDescription } from './description';
import { IDocument, IEntity } from './entity';
import { IListing, IProperty } from './property';

export type ILeaseListingInfo = Omit<IListing, 'propertyId'> & Omit<IProperty, 'ownerId'>;

export interface UtilityCoverage {
  utility: string;
  percentage: number;
}

export interface IInsuranceDoc extends IDocument {
  status: RentInsuranceStatus;
  RejectedReason?: string;
}
export interface ILeasePolicy {
  petsAllowed: boolean;
  smokingAllowed: boolean;
  rentInsuranceProof: boolean;
  tenantInsuranceDoc?: IInsuranceDoc;
  autoPaymentSetup: boolean;
  utilitiesCovered: UtilityCoverage[];
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
  statusUpdatedOn?: number;
  occupants: IOccupant[];
  changeRequests: ILeaseChangeRequest[];
  source: LeaseAgreementSource;
  timestamp: number;
  dueRentDay: RentDueDay | number;
  autoDebitSetup?: IAutoDebitSetup;
  initialLeaseAgreementId?: string;
  isExipred?: boolean;
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

export interface ITenantLeaseInvite {
  firstname: string;
  lastname: string;
  email: string;
  invitationSent?: boolean;
}

export interface ILeaseAgreementDocument {
  title: string;
  file?: File;
  url?: string;
  tag?: AddedLeaseAgreementDocument;
  ownerId: string;
}

export type IdLeaseAgreementDocument = IEntity & ILeaseAgreementDocument;

export type IdTenantInviteLease = IEntity & ITenantLeaseInvite;

export interface IDocumentType {
  title?: string;
  file?: File;
  tag?: AddedLeaseAgreementDocument;
}

export interface IRequestDocumentType {
  title: string;
  description: string;
  timestamp: number;
  status: LeaseRequestDocStatus;
}

export interface IAutoDebitSetup {
  status: AutoDebitSetupStatus;
  timestamp: number;
  stripePaymentId?: string;
}
