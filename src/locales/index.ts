import { load } from 'js-yaml';

import globalEsRaw from './es/global.yml?raw';
import globalEnRaw from './en/global.yml?raw';
import navigationEsRaw from './es/navigation.yml?raw';
import navigationEnRaw from './en/navigation.yml?raw';
import homeEsRaw from './es/home.yml?raw';
import homeEnRaw from './en/home.yml?raw';
import directorLetterEsRaw from './es/director-letter.yml?raw';
import directorLetterEnRaw from './en/director-letter.yml?raw';
import volunteerEsRaw from './es/volunteer.yml?raw';
import volunteerEnRaw from './en/volunteer.yml?raw';
import collaborationsEsRaw from './es/collaborations.yml?raw';
import collaborationsEnRaw from './en/collaborations.yml?raw';
import sponsorsEsRaw from './es/sponsors.yml?raw';
import sponsorsEnRaw from './en/sponsors.yml?raw';
import pagesEsRaw from './es/pages.yml?raw';
import pagesEnRaw from './en/pages.yml?raw';
import contactEsRaw from './es/contact.yml?raw';
import contactEnRaw from './en/contact.yml?raw';
import sponsorTiersEsRaw from './es/sponsor-tiers.yml?raw';
import sponsorTiersEnRaw from './en/sponsor-tiers.yml?raw';
import rolesEsRaw from './es/roles.yml?raw';
import rolesEnRaw from './en/roles.yml?raw';
import teamBiosEsRaw from './es/team-bios.yml?raw';
import teamBiosEnRaw from './en/team-bios.yml?raw';
import scientistBiosEsRaw from './es/scientists-bios.yml?raw';
import scientistBiosEnRaw from './en/scientists-bios.yml?raw';
import organizationsEsRaw from './es/organizations.yml?raw';
import organizationsEnRaw from './en/organizations.yml?raw';

const base = import.meta.env.BASE_URL;

function parseYaml(raw: string): Record<string, unknown> {
  return load(raw) as Record<string, unknown>;
}

function rewriteImagePaths(obj: unknown): unknown {
  if (typeof obj === 'string' && obj.startsWith('/images/')) {
    return `${base}${obj.slice(1)}`;
  }
  if (Array.isArray(obj)) {
    return obj.map(rewriteImagePaths);
  }
  if (obj && typeof obj === 'object') {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [key, rewriteImagePaths(value)])
    );
  }
  return obj;
}

function parseAndRewrite(raw: string): Record<string, unknown> {
  return rewriteImagePaths(parseYaml(raw)) as Record<string, unknown>;
}

export const messages = {
  es: {
    ...parseAndRewrite(globalEsRaw),
    ...parseAndRewrite(navigationEsRaw),
    ...parseAndRewrite(homeEsRaw),
    ...parseAndRewrite(directorLetterEsRaw),
    ...parseAndRewrite(volunteerEsRaw),
    ...parseAndRewrite(collaborationsEsRaw),
    ...parseAndRewrite(sponsorsEsRaw),
    ...parseAndRewrite(pagesEsRaw),
    ...parseAndRewrite(contactEsRaw),
    ...parseAndRewrite(sponsorTiersEsRaw),
    ...parseAndRewrite(rolesEsRaw),
    ...parseAndRewrite(teamBiosEsRaw),
    ...parseAndRewrite(scientistBiosEsRaw),
    ...parseAndRewrite(organizationsEsRaw),
  },
  en: {
    ...parseAndRewrite(globalEnRaw),
    ...parseAndRewrite(navigationEnRaw),
    ...parseAndRewrite(homeEnRaw),
    ...parseAndRewrite(directorLetterEnRaw),
    ...parseAndRewrite(volunteerEnRaw),
    ...parseAndRewrite(collaborationsEnRaw),
    ...parseAndRewrite(sponsorsEnRaw),
    ...parseAndRewrite(pagesEnRaw),
    ...parseAndRewrite(contactEnRaw),
    ...parseAndRewrite(sponsorTiersEnRaw),
    ...parseAndRewrite(rolesEnRaw),
    ...parseAndRewrite(teamBiosEnRaw),
    ...parseAndRewrite(scientistBiosEnRaw),
    ...parseAndRewrite(organizationsEnRaw),
  },
};
