import { AppointmentType } from '../enums/appointment';
import { IEntity } from './entity';

export interface Appointment {
  type: AppointmentType;
  timeslotId: string;
  listingId: string;
  propertyId: string;
  guestId: string;
}

export type IDAppointment = IEntity & Appointment;