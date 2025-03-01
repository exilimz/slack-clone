/*
<ai_context>
Defines the channels table schema.
</ai_context>
*/

import { boolean, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const channels = pgTable('channels', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  description: text('description'),
  isPrivate: boolean('is_private').default(false).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
  creatorId: uuid('creator_id').notNull(),
}); 