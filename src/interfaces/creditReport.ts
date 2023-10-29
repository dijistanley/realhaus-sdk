import { CreditScoreLevel } from '../enums/creditScore';
import { IAddress } from './address';

export interface ICreditReport {
  uid: string;
  creditScore: number;
  dateCreated: number;
  datePulled: number;
  personalInformation: IPersonalInformation;
  accounts: ICreditReportAccounts;
  publicRecords: ICreditReportPublicRecord;
  evictions: ITenancyEvictions[];
}

type ICreditReportAddress = IAddress & { dateReported: number };

interface IPersonalInformation {
  phoneNumbers: string[];
  dateOfBirth: number;
  addresses: ICreditReportAddress[];
  employment: IEmployment[];
}

interface IEmployment {
  occupation: string;
  employer: string;
  salary: number;
  dateReported: number;
  dateVerified: number;
}

interface ICreditReportAccountSummary {
  totalBalance: number;
  totalMaxLimit: number;
  creditUsePercent: number; // balance / creditLimit
  numberOfAccounts: number;
  totalPastDue: number;
  totalLatePayment30: number;
  totalLatePayment60: number;
  totalLatePayment90: number;
  monthlyPayments: number;
}
interface ICreditReportAccounts {
  revolvingAccountSummary: ICreditReportAccountSummary;
  mortgageAccountSummary: ICreditReportAccountSummary;
  installmentAccountSummary: ICreditReportAccountSummary; // Loans: auto, student, etc
  otherAccountsSummary: ICreditReportAccountSummary;
}


interface ICollection {
  creditor: string;
  collector: string;
  amount: number;
  balance: number;
  dateReported: number;
  datePaid: number;
}
interface IBankruptcy {
  type: string;
  status: string;
  court: string;
  liability: number;
  asset: number;
  dateFiled: number;
  dateClosed: number;
}



interface ICreditReportPublicRecord {
  bankruptcies: IBankruptcy[];
  collections: ICollection[];
  judgement: IJudgement[];
  legalItems: ILegalItem[]
}

interface ITenancyEvictions {
  timestamp: number; reason: string;
}

export interface ICreditReportSummary {
  creditScore: number;
  creditScoreRange: CreditScoreRange;
  criminalHistory: number;
  evictions: number;
  employers: number;
  collections: number;
  publicRecords: number;
}

export interface CreditScoreRange {
  level: CreditScoreLevel;
  upper: number;
  lower: number;
  color: string;
}

export interface ILegalItem{
  dateFiled: number;
  dateSatisfied: number;
  amount: number;
  description: string;
  palintiff: string;
  caseNumber: string;
  courtEntity: string
}

export interface IJudgement extends ILegalItem {}
