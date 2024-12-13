import { ConditionOPS } from "../enums/lease";
import { PropertyTypeEnum } from "./property";

export interface ILeaseAgreementTemplate {
  sections: ILeaseAgreementTemplateSection[];
  header?: ILeaseAgreementTemplateHeader;
}

export interface ILeaseAgreementTemplateSection {
  title: string;
  entries?: ILeaseAgreementTemplateEntry[];
}

export interface ILeaseAgreementTemplateHeader {
  label: string;
  name: string;
  entries?: ILeaseAgreementTemplateEntry[];
}

export interface ILeaseAgreementTemplateEntry {
  condition?: IEntryCondition;
  value: string;
  entries?: ILeaseAgreementTemplateEntry[];
}

export interface IEntryCondition {
  left: string;
  op: ConditionOPS;
  right: string;
}

export interface ILeaseAgreementTemplateData {
  LENGTH_OF_LEASE_MONTHS: number;
  START_DATE_OF_LEASE: string;
  END_DATE_OF_LEASE: string;
  PETS: boolean;
  PARKING: boolean;
  SMOKING: boolean;
  RENT_AMOUNT: number;
  RENT_DUE_DAY: string; // FIRST or 1st
  NSF_FEE_AMOUNT: number;
  LATE_RENT_FEE_AMOUNT: number;
  LATE_RENT_GRACE_PERIOD_DAYS: number;
  SECURITY_DEPOSIT_AMOUNT: number;
  SECURITY_DEPOSIT_RETURN_IN_DAYS: number;
  LEASE_RENEW_DAYS: number;
  MEDIATION_TIMELINE_BEFORE_ESCALATION_DAYS: number;
  PARKING_FEE_AMOUNT: number;
  RENT_DEPOSIT_RETURN_IN_DAYS: number;
  INSURANCE: boolean;
  PROPERTY_ADDRESS: string;
  PROPERTY_DESCRIPTION: string;
  PROPERTY_TYPE: string;
  LEASE_END_ACTION: string;
  PET_FEE_AMOUNT: number;
  SMOKING_FEE_AMOUNT: number;
  KEY_DEPOSIT_AMOUNT: number;
  SERVICES_UTILITIES_INCLUDED: string;
}
