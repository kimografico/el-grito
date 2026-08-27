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
    image: '/images/team/lidia-aparicio.jpg',
    category: 'team',
  },
  {
    id: 'fernanda-gallardo',
    name: 'Fernanda Gallardo Velásquez',
    image: '/images/team/fernanda-gallardo.jpg',
    category: 'team',
  },
  {
    id: 'amseld-belen',
    name: 'Asociación AMSELD',
    image: '/images/team/amseld-belen.png',
    category: 'team',
  },
];

export const artists: TeamMember[] = [
  {
    id: 'kimo-saez',
    name: 'Kimográfico',
    image: '/images/artists/kimo-saez.jpg',
    category: 'artists',
  },
  {
    id: 'isaias-escudero',
    name: 'Isaías Escudero',
    image: '/images/artists/isaias-escudero.jpg',
    category: 'artists',
  },
  {
    id: 'jose-vazquez',
    name: 'José Vazquez',
    image: '/images/artists/jose-vazquez.jpg',
    category: 'artists',
  },
];

function getAllMembers(): TeamMember[] {
  return [...teamMembers, ...artists];
}

export function getMemberBySlug(slug: string): TeamMember | undefined {
  return getAllMembers().find((m) => m.id === slug);
}
