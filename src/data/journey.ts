// Your career as a transit map: three cities, each its own "line".
// To add a new stop, copy one station object and edit it. Newest stops go last.

export type Station = {
  name: string;          // organization
  role: string;
  when: string;
  points: string[];      // 1–3 short lines; keep the numbers
  kind: 'work' | 'school' | 'lead';
};

export type City = {
  id: 'jkt' | 'chi' | 'nyc';
  city: string;
  code: string;          // short code shown on the map
  years: string;
  blurb: string;
  stations: Station[];
};

export const journey: City[] = [
  {
    id: 'jkt',
    city: 'Jakarta',
    code: 'JKT',
    years: 'Home base',
    blurb: 'Where I grew up, and where I came back to every summer to work.',
    stations: [
      {
        name: 'GenDigital Academy',
        role: 'President → Senior Advisor',
        when: 'Apr 2021 – present',
        kind: 'lead',
        points: [
          'Ran a MURI-recognized virtual event that taught 4,521 students across 180 schools in Indonesia.',
          'Led ASEAN+ Youth Summit 2023 partnerships expanding digital literacy to Cambodia and Kuala Lumpur.',
        ],
      },
      {
        name: 'Indostation (PT Indomobil Prima Energi)',
        role: 'Business Development Intern',
        when: 'Jan – Jun 2022',
        kind: 'work',
        points: [
          'Diagnosed bottlenecks across retail microsites; process changes lifted efficiency by 19%.',
          'Designed and ran a site survey from scratch, visiting rural microsites in person.',
        ],
      },
      {
        name: 'Maybank Indonesia',
        role: 'Global Markets Analyst Intern',
        when: 'Jul – Aug 2023',
        kind: 'work',
        points: [
          'Found a projected 3.6% drop in active FX clients in two years of transaction data that existing reports missed.',
          'Presented retention recommendations to the Head of Global Markets and VP of Treasury.',
        ],
      },
      {
        name: 'Bain & Company',
        role: 'Case Team Assistant',
        when: 'Jun – Aug 2024',
        kind: 'work',
        points: [
          'Modeled carbon-credit economics under multiple pricing scenarios for a client.',
          'Benchmarked an org structure, found role duplication, and proposed a realignment leadership adopted.',
        ],
      },
      {
        name: 'Amazon Web Services',
        role: 'Solutions Architect Intern (AI/ML)',
        when: 'Jun – Aug 2025',
        kind: 'work',
        points: [
          'Built CekLondri, an AI-powered laundry-tracking MVP, and pitched it to 20+ Solutions Architects.',
          'Supported an AWS Summit Jakarta workshop where 55 people fine-tuned LLMs.',
        ],
      },
    ],
  },
  {
    id: 'chi',
    city: 'Evanston / Chicago',
    code: 'CHI',
    years: '2022 – 2026',
    blurb: 'Four years of cognitive science, data science, and a lot of Chicago coffee.',
    stations: [
      {
        name: 'Northwestern University',
        role: 'BA Cognitive Science · Data Science & Business minors · HCI Certificate',
        when: '2022 – 2026',
        kind: 'school',
        points: ['Cum Laude, 3.92 GPA.'],
      },
      {
        name: 'Student Consulting for Non-Profit Organizations',
        role: 'Team Leader',
        when: 'Mar 2023 – Mar 2026',
        kind: 'lead',
        points: ['Led consulting engagements for 6 nonprofits, including Literacy Chicago and Bravo Waukegan.'],
      },
    ],
  },
  {
    id: 'nyc',
    city: 'New York',
    code: 'NYC',
    years: '2026 – now',
    blurb: 'Current stop.',
    stations: [
      {
        name: 'Columbia University',
        role: 'MS in Applied Analytics · Merit Scholarship',
        when: 'Expected Dec 2027',
        kind: 'school',
        points: ['Recruiting for Summer 2027 roles in analytics, strategy, and consulting.'],
      },
    ],
  },
];
