/*
<ai_context>
Defines the thread replies table schema.
</ai_context>
*/

import { boolean, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { messages } from './messages';
import { users } from './users';

export const threads = pgTable('threads', {
  id: uuid('id').primaryKey().defaultRandom(),
  content: text('content').notNull(),
  parentMessageId: uuid('parent_message_id').notNull().references(() => messages.id, { onDelete: 'cascade' }),
  userId: uuid('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
  isEdited: boolean('is_edited').default(false).notNull(),
}); 