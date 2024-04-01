import { IEntity } from './entity';
import { BankAccountPurpose, Vendors } from '../enums/bankAccount';

export interface IPaypalContext {
  payer_id: string;
  email: string;
}

export interface IPaypalToken {
  scope: string;
  access_token: string;
  token_type: string;
  expires_in: string;
  refresh_token: string;
  nonce: string;
}

export interface IPlaidContext {
  accessToken: string;
  requestId: string;
  itemId: string;
  institution: string;
  institutionId: string;
}

export interface IFlinksContext {
  loginId: string;
  institution: string;
  accountId: string;
}

export interface IBankConnection {
  timestamp: number;
  vendor: Vendors;
  context: IPlaidContext | IFlinksContext | IPaypalContext;
}

export interface IBankAccount {
  payments: IBankConnection[];
  payouts: IBankConnection[];
}

export interface IExchangePlaidLinkTokenRequest {
  publicToken: string;
  institution: string;
  institutionId: string;
  bankAccountPurpose: BankAccountPurpose;
}

export type IdBankAccount = IEntity & IBankAccount;

export interface IBankEftAccountInfo {
  account: string;
  accountId: string;
  institution: string;
  branch: string;
}

export type IPreAuthDebitMandateAgreement = Omit<IBankEftAccountInfo, 'accountId'> & {
  email: string;
  agreementDate: number;
  accountHolder: string;
}

export interface IConfirmAutoDebitAgreementRequest {
  leaseId: string;
  mandate: IPreAuthDebitMandateAgreement;
  ipAddress: string;
  userAgent: string;
}