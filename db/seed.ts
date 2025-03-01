/*
<ai_context>
Seed script to populate the database with initial data for testing.
</ai_context>
*/

import { db } from './db';
import { users, channels, messages, channelMembers } from './schema/index';
import { config } from 'dotenv';

// Load environment variables
config({ path: '.env.local' });

// Define types for our data
interface User {
  id: string;
  name: string;
  email: string;
  imageUrl?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

interface Channel {
  id: string;
  name: string;
  description?: string | null;
  isPrivate: boolean;
  createdAt: Date;
  updatedAt: Date;
  creatorId: string;
}

// Sample users data
const sampleUsers = [
  {
    name: 'John Doe',
    email: 'john@example.com',
    imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=john',
  },
  {
    name: 'Jane Smith',
    email: 'jane@example.com',
    imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=jane',
  },
  {
    name: 'Bob Johnson',
    email: 'bob@example.com',
    imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=bob',
  },
  {
    name: 'Alice Williams',
    email: 'alice@example.com',
    imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=alice',
  },
  {
    name: 'Charlie Brown',
    email: 'charlie@example.com',
    imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=charlie',
  },
];

// Sample channels data
const sampleChannels = [
  {
    name: 'general',
    description: 'General discussion channel',
    isPrivate: false,
  },
  {
    name: 'random',
    description: 'Random topics and fun stuff',
    isPrivate: false,
  },
  {
    name: 'development',
    description: 'Development discussions and updates',
    isPrivate: false,
  },
  {
    name: 'design',
    description: 'Design discussions and resources',
    isPrivate: false,
  },
  {
    name: 'secret-project',
    description: 'Private channel for secret project',
    isPrivate: true,
  },
];

// Sample messages
const sampleMessages = [
  'Hello everyone! How are you doing today?',
  'Just finished working on the new feature. Looking for feedback!',
  'Has anyone seen the latest update to the design system?',
  'I\'m having trouble with the API. Can someone help?',
  'Don\'t forget about the team meeting tomorrow at 10 AM.',
  'Just pushed a new commit to the repository.',
  'The new UI looks amazing!',
  'Who\'s up for lunch?',
  'I found a bug in the production environment. Working on a fix.',
  'Happy Friday everyone!',
];

async function seed() {
  try {
    console.log('🌱 Starting seeding...');

    // Clear existing data (optional, comment out if you don't want to clear)
    console.log('Clearing existing data...');
    await db.delete(messages);
    await db.delete(channelMembers);
    await db.delete(channels);
    await db.delete(users);

    // Insert users
    console.log('Inserting users...');
    const insertedUsers = await Promise.all(
      sampleUsers.map(user => db.insert(users).values(user).returning())
    );
    const flattenedUsers = insertedUsers.flat() as User[];
    console.log(`Inserted ${flattenedUsers.length} users`);

    // Insert channels (using the first user as creator)
    console.log('Inserting channels...');
    const insertedChannels = await Promise.all(
      sampleChannels.map(channel => 
        db.insert(channels).values({
          ...channel,
          creatorId: flattenedUsers[0].id,
        }).returning()
      )
    );
    const flattenedChannels = insertedChannels.flat() as Channel[];
    console.log(`Inserted ${flattenedChannels.length} channels`);

    // Add all users to non-private channels
    console.log('Adding users to channels...');
    const channelMemberships = [];
    for (const user of flattenedUsers) {
      for (const channel of flattenedChannels) {
        // Only add users to non-private channels or if it's the first user (creator)
        if (!channel.isPrivate || user.id === flattenedUsers[0].id) {
          channelMemberships.push({
            userId: user.id,
            channelId: channel.id,
          });
        }
      }
    }
    await db.insert(channelMembers).values(channelMemberships);
    console.log(`Added ${channelMemberships.length} channel memberships`);

    // Insert messages in the general channel
    console.log('Inserting messages...');
    const generalChannel = flattenedChannels.find((c) => c.name === 'general');
    if (generalChannel) {
      const messageInserts = [];
      for (let i = 0; i < sampleMessages.length; i++) {
        // Distribute messages among users
        const userIndex = i % flattenedUsers.length;
        messageInserts.push({
          content: sampleMessages[i],
          channelId: generalChannel.id,
          userId: flattenedUsers[userIndex].id,
        });
      }
      await db.insert(messages).values(messageInserts);
      console.log(`Inserted ${messageInserts.length} messages`);
    }

    console.log('✅ Seeding completed successfully!');
  } catch (error) {
    console.error('❌ Seeding failed:', error);
  } finally {
    // Close the database connection
    process.exit(0);
  }
}

// Run the seed function
seed(); 