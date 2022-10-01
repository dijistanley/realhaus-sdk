import { IEntity } from './entity';

export enum AppointmentType {
  SHOWING
}
export interface Appointment {
  type: AppointmentType;
  timeslotId: string;
  listingId: string;
  propertyId: string;
  guestId: string;
}

export type IDAppointment = IEntity & Appointment;