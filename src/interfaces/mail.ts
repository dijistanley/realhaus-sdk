import { IEntity } from './entity';

export interface IMail {
  to: string;
  message: {
    subject: string;
    html: string;
  };
}

export type IdMail = IEntity & IMail;
