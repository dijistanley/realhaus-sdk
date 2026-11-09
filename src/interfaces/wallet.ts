import { ServiceFeeRule, TransactionStatus, TransactionType, TrxLogType } from '../enums/wallet';
import { IEntity } from './entity';

export interface IWallet {
  amount: number;
  owner: string;
  lastTransactionId?: string;
  withdrawInfo?: {
    lastProcessedTransactionId: string;
    timestamp: number;
  };
}

export type IDWallet = IEntity & IWallet;

export interface ITransaction {
  type: TransactionType; // CREDIT / DEBIT
  amount: number;
  balance: number;
  timestamp: number;
  notes: string;
  trxLogId: string;
  isWithdraw?: boolean;
  isWithdrawRefund?: boolean;
  refTrxIds?: string[];
}

export type IDTransaction = IEntity & ITransaction;

/**
 * How a rent service fee was worked out. Recorded on the fee's transaction log when it is charged,
 * so the app can explain the fee without recalculating it.
 */
export interface IServiceFeeCalculation {
  amount: number; // the fee
  basis: number; // the bill amount the fee is charged on
  rule: ServiceFeeRule;
  flatFeeLimit: number; // rent up to this amount pays the flat fee
  flatFee?: number; // set when rule is FLAT
  percent?: number; // set when rule is PERCENT, e.g. 0.025
}

export interface ITransactionLogMeta {
  [x: string]: any;
  trxfees?: number;
  trxLogRef?: string;
  leaseId?: string;
  billId?: string;
  paymentMethod?: string;
  offPlatform?: boolean; // service fee for rent marked paid outside Realhaus
  serviceFee?: IServiceFeeCalculation;
  offPlatformFeeIds?: string[]; // payout: wallet transaction ids of the service fees netted from it
  offPlatformFeeTotal?: number;
  creditReportSeatId?: string;
  numberOfSeats?: number;
  interac?: { url?: string; securityQuestion: string; securityAnswer: string };
  vendor?: { req: unknown; resp: unknown };
}

export interface ITransactionLog {
  timestamp: number;
  type: TrxLogType;
  senderId: string;
  amount: number;
  receiverId: string;
  status: TransactionStatus;
  statusMsg?: string;
  referenceId?: string;
  narration: string;
  notes?: string;
  source: string;
  meta?: ITransactionLogMeta;
}

export type IDTransactionLog = IEntity & ITransactionLog;
