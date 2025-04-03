export interface ICreditReportSeats {
  seatsAvailable: number;
}

export interface ICreditReportSeatsUsage {
  listingId: string;
  timestamp: number;
}

export interface ICreditReportSeatsPurchases {
  amountPaid: number;
  noOfSeats: number;
  trxRefId: string;
  timestamp: number;
}
