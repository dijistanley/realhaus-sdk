import { IEntity } from './entity';

export const notificationRoutes = [
  'lease-agreement',
  'rent-application',
  'listing',
] as const;

export type NotificationRoute = (typeof notificationRoutes)[number];

export interface INotificationData {
  route?: NotificationRoute;
  resourceId?: string;
}

export interface IUserNotification {
  title: string;
  body: string;
  type: string;
  data: INotificationData;
  createdAt?: unknown;
  readAt?: unknown;
}

export type IdUserNotification = IEntity & IUserNotification;

export interface IDeviceRegistration {
  expoPushToken: string;
  platform: 'android' | 'ios';
  enabled: boolean;
  createdAt?: unknown;
  updatedAt?: unknown;
}
