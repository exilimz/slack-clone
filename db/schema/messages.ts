/*
<ai_context>
Defines the messages table schema.
</ai_context>
*/

import { boolean, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { channels } from './channels';
import { users } from './users';

export const messages = pgTable('messages', {
  id: uuid('id').primaryKey().defaultRandom(),
  content: text('content').notNull(),
  channelId: uuid('channel_id').notNull().references(() => channels.id, { onDelete: 'cascade' }),
  userId: uuid('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
  isEdited: boolean('is_edited').default(false).notNull(),
  // For direct messages, we'll use a special channel
  isDirect: boolean('is_direct').default(false).notNull(),
}); 