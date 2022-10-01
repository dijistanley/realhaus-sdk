import { IEntity } from './entity';

export enum MessageType {
  EVENT = 'event',
  MESSAGE = 'message'
}

export enum MessageStatus {
  READ = 'read',
  UNREAD = 'unread',
  STARRED = 'starred'
}

// Schema

// >Conversations/:ConversationId
export interface IConversation {
  members: string[];
  lastMessageSentAt: number;
  lastMessage: {
    sender: string;
    message: string;
  }
}
export type IdConversation = IEntity & IConversation;

// >Conversations/:ConversationId/Messages/:MessageId
export interface IMessage {
  type: MessageType;
  sender: string; // must be a part of IConversation.Members
  timestamp: number;
  message: string;
  // status: MessageStatus;
}

export type IdMessage = IEntity & IMessage;
