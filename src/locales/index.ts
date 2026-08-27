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

function parseYaml(raw: string): Record<string, unknown> {
  return load(raw) as Record<string, unknown>;
}

export const messages = {
  es: {
    ...parseYaml(globalEsRaw),
    ...parseYaml(navigationEsRaw),
    ...parseYaml(homeEsRaw),
    ...parseYaml(directorLetterEsRaw),
    ...parseYaml(volunteerEsRaw),
    ...parseYaml(collaborationsEsRaw),
    ...parseYaml(sponsorsEsRaw),
    ...parseYaml(pagesEsRaw),
    ...parseYaml(contactEsRaw),
    ...parseYaml(sponsorTiersEsRaw),
    ...parseYaml(rolesEsRaw),
    ...parseYaml(teamBiosEsRaw),
    ...parseYaml(scientistBiosEsRaw),
    ...parseYaml(organizationsEsRaw),
  },
  en: {
    ...parseYaml(globalEnRaw),
    ...parseYaml(navigationEnRaw),
    ...parseYaml(homeEnRaw),
    ...parseYaml(directorLetterEnRaw),
    ...parseYaml(volunteerEnRaw),
    ...parseYaml(collaborationsEnRaw),
    ...parseYaml(sponsorsEnRaw),
    ...parseYaml(pagesEnRaw),
    ...parseYaml(contactEnRaw),
    ...parseYaml(sponsorTiersEnRaw),
    ...parseYaml(rolesEnRaw),
    ...parseYaml(teamBiosEnRaw),
    ...parseYaml(scientistBiosEnRaw),
    ...parseYaml(organizationsEnRaw),
  },
};
