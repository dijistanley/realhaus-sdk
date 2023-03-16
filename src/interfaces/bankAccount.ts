import { IEntity } from './entity';
import { Vendors } from '../enums/bankAccount';

export interface IFlinksContext {
  loginId?: string;
  institution?: string;
  accountId?: string;
}

export interface IPaypalContext {
  payer_id?: string;
  email?: string;
}

export interface IPaypalToken {
  scope: string;
  access_token: string;
  token_type: string;
  expires_in: string;
  refresh_token: string;
  nonce: string;
}

export interface IBankConnection {
  timestamp: number;
  vendor: Vendors;
  context: IFlinksContext & IPaypalContext;
}

export interface IBankAccount {
  payments: IBankConnection[];
  payouts: IBankConnection[];
}

export type IdBankAccount = IEntity & IBankAccount;
