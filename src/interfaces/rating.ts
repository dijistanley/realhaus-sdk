import { IEntity } from './entity';

export enum SubjectType {
  LEASE = 'Lease',
  LANDLORD = 'Landlord',
  TENANT = 'Tenant'
}

export enum GradeType {
  CLEANLINESS = 'Cleanliness',
  COMMUNICATION = 'Communication',
  CHECK_IN = 'Check-In',
  ACCURACY = 'Accuracy',
  LOCATION = 'Location',
  VALUE = 'Value'
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
  review: string;
  date: string;
}

export interface IRatings {
  rating: number;
  maxRating: number;
  reviews: IReview[];
  averageGrades: Grades;
}