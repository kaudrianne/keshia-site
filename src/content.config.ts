import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

// One Markdown file per project in src/content/projects/
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),                       // one sentence for cards
    kind: z.enum(['work', 'school', 'personal']),
    status: z.enum(['shipped', 'building', 'paused']).default('shipped'),
    year: z.string(),
    tools: z.array(z.string()).default([]),
    featured: z.boolean().default(false),     // shows on the home page
    order: z.number().default(99),            // lower = earlier
    stats: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
  }),
});

// Street photos: add the image to src/content/photos/ and one entry to photos.json
const photos = defineCollection({
  loader: file('./src/content/photos/photos.json'),
  schema: ({ image }) =>
    z.object({
      image: image(),
      caption: z.string(),
      place: z.string(),
      year: z.string(),
    }),
});

// Espresso log: add one entry per shot to the END of brews.json (oldest first).
// Give each a new id ("09", "10", …). Only dose_g, yield_g and roastery are required.
const brews = defineCollection({
  loader: file('./src/content/brews.json'),
  schema: z.object({
    date: z.string().optional(),          // YYYY-MM-DD
    roastery: z.string(),
    beans: z.string().optional(),
    grinder: z.string().optional(),
    clicks: z.number().optional(),        // grind setting
    dose_g: z.number(),                   // ground coffee in
    yield_g: z.number(),                  // espresso out
    preinfusion_s: z.number().optional(),
    shot_s: z.number().optional(),        // total pull time
    note: z.string().optional(),
  }),
});

export const collections = { projects, photos, brews };
