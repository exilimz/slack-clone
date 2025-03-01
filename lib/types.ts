/*
<ai_context>
TypeScript type definitions for the application.
</ai_context>
*/

// User type
export interface User {
  id: string;
  name: string;
  email: string;
  imageUrl?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

// Channel type
export interface Channel {
  id: string;
  name: string;
  description?: string | null;
  isPrivate: boolean;
  createdAt: Date;
  updatedAt: Date;
  creatorId: string;
}

// Message type
export interface Message {
  id: string;
  content: string;
  channelId: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  isEdited: boolean;
  isDirect: boolean;
}

// Thread type
export interface Thread {
  id: string;
  content: string;
  parentMessageId: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  isEdited: boolean;
}

// Channel Member type
export interface ChannelMember {
  channelId: string;
  userId: string;
  joinedAt: Date;
} 