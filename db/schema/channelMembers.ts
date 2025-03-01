/*
<ai_context>
Defines the channel members junction table schema.
</ai_context>
*/

import { pgTable, primaryKey, timestamp, uuid } from 'drizzle-orm/pg-core';
import { channels } from './channels';
import { users } from './users';

export const channelMembers = pgTable('channel_members', {
  channelId: uuid('channel_id').notNull().references(() => channels.id, { onDelete: 'cascade' }),
  userId: uuid('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  joinedAt: timestamp('joined_at').defaultNow().notNull(),
}, (table) => {
  return {
    pk: primaryKey({ columns: [table.channelId, table.userId] }),
  };
}); 