import { IEntity } from './entity';

export enum BillType {
  RENT = 'RENT',
  SERVICE = 'SERVICE',
  PET_FEE = 'PET_FEE',
  NSF_FEE = 'NSF_FEE',
  OTHER_FEE = 'OTHER_FEE',
  MOVE_IN_FEE = 'MOVE_IN_FEE',
  MOVE_OUT_FEE = 'MOVE_OUT_FEE',
  PARKING_FESS = 'PARKING_FEE',
  SMOKING_FEE = 'SMOKING_FEE',
  KEY_DEPOSIT = 'KEY_DEPOSIT',
  SECURITY_DEPOSIT = 'SECURITY_DEPOSIT',
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
  dateUpdated?: number;
}

export type IdBill = IEntity & IBill;