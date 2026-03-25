import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    category: z.enum(['ai-services', 'money-ai', 'general', 'ai-tools', 'apps']),
    toolType: z.enum([
      'ai-assistant',
      'image-generation',
      'video-generation',
      'audio-generation',
      'automation',
      'translation',
      'writing',
      'coding',
      'other'
    ]).optional(),
    appType: z.enum([
      'mobile-app',
      'desktop-app',
      'website',
      'telegram-bot',
      'other'
    ]).optional(),
    author: z.string().optional(),
    image: z.string().optional(),
  }),
});

export const collections = {
  'posts': postsCollection,
};
