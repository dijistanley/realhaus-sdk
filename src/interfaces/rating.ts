import { IEntity } from './entity';

export enum SubjectType {
  LEASE = 'Lease',
  LANDLORD = 'Landlord',
  TENANT = 'Tenant',
}

export enum GradeType {
  CLEANLINESS = 'Cleanliness',
  COMMUNICATION = 'Communication',
  CHECK_IN = 'Check-In',
  ACCURACY = 'Accuracy',
  LOCATION = 'Location',
  VALUE = 'Value',
}

export type Grades = {
  [type in GradeType]: number;
};

export interface IRating {
  grades: Grades;
  review: string;
  timestamp: number;
  reviewerId: string;
  subjectId: string;
  subjectType: SubjectType;
}

export type IdRating = IEntity & IRating;

export interface IReview {
  firstName?: string;
  profileImage?: string;
  review: string;
  date: string;
}

export interface IRatings {
  rating: number;
  maxRating: number;
  reviews: IReview[];
  averageGrades: Grades;
}

export interface IRatingReviewTerm {
  dateCreated: number;
  dateDue: number;
  ownerCompletedOn?: number;
  tenantCompletedOn?: number;
  /**
   * When both reviews became visible to both parties: as soon as both submitted, or when the term
   * closed at dateDue. Until then each party sees only their own review (blind reveal).
   */
  revealedOn?: number;
  /** At revealedOn, rent on the lease had been paid through Realhaus. */
  verifiedTenancy?: boolean;
}

export interface ILeaseRatingReviewDetails {
  midterm: IRatingReviewTerm;
  endterm: IRatingReviewTerm;
  leaseAgreementId: string;
  ownerId: string;
  tenantId: string;
}

/** What tenants rate landlords on. 5 stars is always the best. */
export enum LandlordGrades {
  LISTING_ACCURACY = 'Listing_Accuracy',
  COMMUNICATION = 'Communication',
  RESPECTFULNESS = 'Respectfulness',
  RESPONSIVENESS = 'Responsiveness',
}

/**
 * Category keys in reviews written before LandlordGrades was renamed. Accuracy is read as
 * Listing_Accuracy. Difficulty had no clear direction (is 5 stars easy or hard?), so it is ignored.
 */
export enum LegacyLandlordGrades {
  ACCURACY = 'Accuracy',
  DIFFICULTY = 'Difficulty',
}

export enum TenantGrades {
  COMMUNICATION = 'Communication',
  CLEANLINESS = 'Cleanliness',
  RESPECTFULNESS = 'Respectfulness',
  HOUSE_RULES = 'House_Rules',
}

export type RatingsForTenant = { [grade in TenantGrades]: number };
export type RatingsForLandlord = { [grade in LandlordGrades]: number };

export interface ILeaseReview {
  /** Star ratings, end-of-lease reviews only. Mid-lease feedback is text only. */
  ratings?: RatingsForTenant | RatingsForLandlord;
  review: string;
  timeStamp: number;
}

export interface ILeaseRatingsReview {
  middleOfTerm: ILeaseReview;
  endOfTerm: ILeaseReview;
}

export enum LeaseTerm {
  midterm = 'midterm',
  endterm = 'endterm',
}

/** POST /lease/:leaseId/reviews */
export interface ISubmitLeaseReviewRequest {
  term: LeaseTerm;
  /** Required for the end-of-lease review, not allowed for mid-lease feedback. */
  ratings?: RatingsForTenant | RatingsForLandlord;
  review: string;
}

export interface ISubmitLeaseReviewResponse {
  /** Both parties have now reviewed, so both reviews are visible. */
  revealed: boolean;
}

/** One term of a lease's reviews, as the landlord or tenant asking sees it. */
export interface ILeaseReviewTermView {
  dateDue: number;
  revealed: boolean;
  verifiedTenancy?: boolean;
  /** The caller's own review. */
  mine?: ILeaseReview;
  /** The other party's review, once revealed. */
  theirs?: ILeaseReview;
  /** The other party has submitted theirs (shown before the reveal). */
  theyHaveReviewed: boolean;
}

/** GET /lease/:leaseId/reviews */
export interface ILeaseReviewsView {
  leaseAgreementId: string;
  midterm?: ILeaseReviewTermView;
  endterm?: ILeaseReviewTermView;
}

/**
 * Ratings worked out by the server from revealed end-of-lease reviews. Only verified tenancies
 * (rent paid through Realhaus) count toward the averages; unverified reviews are still listed.
 */
export interface IRatingSummary {
  /** Average over verified reviews, 0 when there are none. */
  average: number;
  /** Per-category averages over verified reviews. */
  grades: { [grade: string]: number };
  verifiedCount: number;
  /** All public reviews, verified or not. */
  reviewCount: number;
  maxRating: number;
}

/** A revealed end-of-lease review. */
export interface IPublicReview {
  ratings: RatingsForTenant | RatingsForLandlord;
  review: string;
  timeStamp: number;
  verifiedTenancy: boolean;
  /** The lease's "City, Province". */
  location?: string;
}

/** A past landlord's review of a rent applicant. */
export interface IApplicantReview extends IPublicReview {
  reviewerId: string;
  leaseAgreementId: string;
}

/** GET /rent-application/:applicationId/reviews: for the landlord of the application's listing. */
export interface IApplicantReviews {
  summary: IRatingSummary;
  reviews: IApplicantReview[];
}

/** A landlord's rating from their tenants, shown on their listings without the tenants' names. */
export interface ILandlordRating {
  summary: IRatingSummary;
  reviews: IPublicReview[];
}
