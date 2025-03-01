// Re-export types from context files for easier imports
export type { User } from "./context/user-context";
export type { Channel } from "./context/channel-context";
export type { DirectMessageUser } from "./context/direct-message-context";

// Message types
export type Message = {
  id: string;
  content: string;
  createdAt: Date;
  updatedAt?: Date;
  userId: string;
  channelId?: string;
  threadId?: string;
  reactions?: MessageReaction[];
  attachments?: Attachment[];
  mentions?: string[]; // Array of user IDs
  isEdited?: boolean;
};

export type MessageReaction = {
  emoji: string;
  count: number;
  users: string[]; // Array of user IDs
};

export type Attachment = {
  id: string;
  name: string;
  url: string;
  type: string;
  size: number;
};

// Thread types
export type Thread = {
  id: string;
  parentMessageId: string;
  replies: Message[];
  participantIds: string[]; // Array of user IDs
  lastReplyAt: Date;
  replyCount: number;
};

// Notification types
export type Notification = {
  id: string;
  userId: string;
  type: "message" | "mention" | "reaction" | "thread";
  read: boolean;
  createdAt: Date;
  sourceId: string; // ID of the message, channel, etc.
  sourceType: "message" | "channel" | "thread";
  sourceUserId: string; // ID of the user who triggered the notification
}; 