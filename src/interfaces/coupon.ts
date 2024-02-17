import { CouponStatus, CouponTitle, CouponType } from '../enums/coupon';

export interface ICoupon {
  title: CouponTitle;
  type: CouponType;
  value: number;
  status: CouponStatus;
}

export interface IUserCoupon {
  start: number;
  end: number;
  couponId: string;
}

export interface IUserFirstLeaseHalfOffCoupon extends IUserCoupon {
  usage: number;
  leaseAgreementId: string;
}
