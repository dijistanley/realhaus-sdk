import { TransactionStatus, TransactionType, TrxLogType } from '../enums/wallet';
import { IEntity } from './entity';

export interface IWallet {
  amount: number;
  owner: string;
  lastTransactionId?: string;
  withdrawInfo?: {
    lastProcessedTranasctionId: string;
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

export interface ITransactionLogMeta {
  [x: string]: any;
  trxfees?: number;
  trxLogRef?: string;
  leaseId?: string;
  billId?: string;
  interac?: { url?: string; securityQuestion: string; securityAnswer: string };
  vendor?: { req: any; resp: any };
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
