export interface Organization {
  id: string;
  name: string;
  logo: string;
  website: string;
}

export const organizations: Organization[] = [
  {
    id: 'migramar',
    name: 'MIGRAMAR',
    logo: '/images/organizations/migramar.png',
    website: 'https://www.migramar.org/en/index',
  },
  {
    id: 'kuna',
    name: 'KUNA',
    logo: '/images/organizations/kuna.jpg',
    website: 'http://www.kunaecuador.org/',
  },
  {
    id: 'pae',
    name: 'PAE Protección Animal Ecuador',
    logo: '/images/organizations/pae.png',
    website: 'http://www.pae.ec/',
  },
  {
    id: 'fondo-animal',
    name: 'FONDO ANIMAL',
    logo: '/images/organizations/fondo-animal.png',
    website: 'https://www.fondoanimal.com/',
  },
  {
    id: 'mas-galapagos',
    name: 'MÁS GALÁPAGOS',
    logo: '/images/organizations/mas-galapagos.png',
    website: 'https://www.masgalapagos.info/',
  },
  {
    id: 'amseld',
    name: 'AMSELD',
    logo: '/images/organizations/amseld.png',
    website: 'http://www.wonderencuentrosbm.com/',
  },
  {
    id: 'ebioac',
    name: 'EBIOAC',
    logo: '/images/organizations/ebioac.png',
    website: 'https://ebioac.weebly.com/',
  },
];
