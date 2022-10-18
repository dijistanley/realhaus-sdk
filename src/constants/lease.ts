import { FeePaymentFrequency } from '../enums/lease';

export const FeePaymentFrequencies = [
  {
    val: FeePaymentFrequency.ONCE_FEE,
    label: 'One - time Fee',
  },
  {
    val: FeePaymentFrequency.ONCE_DEPOSIT,
    label: 'One - time Deposit',
  },
  {
    val: FeePaymentFrequency.MONTHLY,
    label: 'Monthly Fee (due with rent)',
  },
];

export const ConditionComparer = {
  "!=": (a: string, b: string) => a.toLowerCase() !== b.toLowerCase(),
  "<=": (a: string, b: string) => a.toLowerCase() <= b.toLowerCase(),
  ">=": (a: string, b: string) => a.toLowerCase() >= b.toLowerCase(),
  "=": (a: string, b: string) => a.toLowerCase() === b.toLowerCase(),
  ">": (a: string, b: string) => a.toLowerCase() > b.toLowerCase(),
  "<": (a: string, b: string) => a.toLowerCase() < b.toLowerCase(),
};
