import { IEntity } from './entity'
import { Vendors } from '../enums/bankAccount'

export interface IFlinksContext {
  loginId: string
  institution: string
  accountId?: string
}

export interface IBankConnection {
  timestamp: number
  vendor: Vendors
  context: IFlinksContext
}

export interface IBankAccount {
  payments: IBankConnection[]
  payouts: IBankConnection[]
}

export type IdBankAccount = IEntity & IBankAccount;