import { IEntity } from './entity';

export enum BillType {
  RENT = 'RENT',
  FEES = 'FEES',
  SERVICE = 'SERVICE'
}

export enum BillStatus {
  PENDING = 'PENDING',
  OVERDUE = 'OVERDUE',
  PAID = 'PAID'
}

export interface IBill {
  due: Date;
  amount: number;
  type: BillType;
  status: BillStatus;
  dateCreated: number;
  dateUpdated: number;
}

export type IdBill = IEntity & IBill;