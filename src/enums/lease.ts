export enum LeaseEndAction {
  TERMINATE = 'TERMINATE',
  RENEW_MONTHLY = 'RENEW_MONTHLY',
}

export enum FeePaymentFrequency {
  MONTHLY = 'MONTHLY',
  ONCE_FEE = 'ONCE_FEE',
  ONCE_DEPOSIT = 'ONCE_DEPOSIT',
  NONE = 'NONE',
}

export enum LeaseAgreementStatus {
  DRAFT = 'draft',
  PENDING_TENANT_SIGNATURE = 'pending-tenant-signature',
  SIGNED = 'signed',
}

export enum LeaseAgreementViewer {
  TENANT = 'Tenant',
  LANDLORD = 'LANDLORD',
}

export enum ConditionOPS {
  NOTEQUAL = '!=',
  GTEQUAL = '>=',
  LTEQUAL = '<=',
  EQUAL = '=',
  GT = '>',
  LT = '<',
}

export enum OccupantRelationship {
  SPOUSE = 'Spouse',
  COMMON_LAW = 'Common Law',
  CHILD = 'Child',
  PARENT = 'Parent',
  SIBLING = 'Sibling',
  GRAND_PARENT = 'Grand Parent',
  GRAND_CHILD = 'Grand Child',
  OTHER = 'Other',
}

export enum LeaseAgreementSource {
  REALHAUS = 'realhaus',
  NON_REALHAUS = 'non-realhaus',
}

export enum ListingStatus {
  DEACTIVATED = 'Deactivated',
  UNAVAILABLE = 'Unavailable',
  VACANT = 'Vacant',
}

export enum RentDueDay {
  FIRST_OF_MONTH = 'First of month',
  END_OF_MONTH = 'End of month',
}
