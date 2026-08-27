import { img } from '../config/constants';

export interface TeamMember {
  id: string;
  name: string;
  image: string;
  category: 'team' | 'artists';
}

export const teamMembers: TeamMember[] = [
  {
    id: 'lidia-aparicio',
    name: 'Lidia Aparicio Sales',
    image: img('/images/team/lidia-aparicio.jpg'),
    category: 'team',
  },
  {
    id: 'fernanda-gallardo',
    name: 'Fernanda Gallardo Velásquez',
    image: img('/images/team/fernanda-gallardo.jpg'),
    category: 'team',
  },
  {
    id: 'amseld-belen',
    name: 'Asociación AMSELD',
    image: img('/images/team/amseld-belen.png'),
    category: 'team',
  },
];

export const artists: TeamMember[] = [
  {
    id: 'kimo-saez',
    name: 'Kimográfico',
    image: img('/images/artists/kimo-saez.jpg'),
    category: 'artists',
  },
  {
    id: 'isaias-escudero',
    name: 'Isaías Escudero',
    image: img('/images/artists/isaias-escudero.jpg'),
    category: 'artists',
  },
  {
    id: 'jose-vazquez',
    name: 'José Vazquez',
    image: img('/images/artists/jose-vazquez.jpg'),
    category: 'artists',
  },
];

function getAllMembers(): TeamMember[] {
  return [...teamMembers, ...artists];
}

export function getMemberBySlug(slug: string): TeamMember | undefined {
  return getAllMembers().find((m) => m.id === slug);
}
