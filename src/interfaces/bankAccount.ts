import { IEntity } from './entity';
import { AccountConnectionState, Vendors } from '../enums/bankAccount';
import { StripePADSetup } from './lease';

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

export interface IStripeContext {
  connectedAccountId?: string;
}

export interface IPaypalBankConnection {
  timestamp: number;
  vendor: Vendors.PAYPAL;
  context: IPaypalContext;
}

export interface IStripeBankConnection {
  timestamp: number;
  vendor: Vendors.STRIPE;
  context: IStripeContext;
}

export type IBankConnection = IPaypalBankConnection | IStripeBankConnection;

export interface IBankAccount {
  connection: IBankConnection;
}

export type IdBankAccount = IEntity & IBankAccount;

export interface IBankEftAccountInfo {
  account: string;
  accountId: string;
  institution: string;
  branch: string;
}

export type IPreAuthDebitMandateAgreement = Omit<
  IBankEftAccountInfo,
  'accountId'
> & {
  email: string;
  agreementDate: number;
  accountHolder: string;
};

export interface IConfirmAutoDebitAgreementRequest {
  leaseId: string;
  mandate: IPreAuthDebitMandateAgreement;
  ipAddress: string;
  userAgent: string;
}

export interface IConfirmAutoDebitAgreementResponse {
  stripe: StripePADSetup;
  timestamp: number;
}

export interface IAccountConnectionStatusResponse {
  state: AccountConnectionState;
  details_submitted: boolean;
  charges_enabled: boolean;
  payouts_enabled: boolean;
}