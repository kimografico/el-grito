export interface SponsorTier {
  id: string;
  name: string;
  icon: string;
  description: string;
  amount: string;
  benefits: string[];
}

export const sponsorTiers: SponsorTier[] = [
  {
    id: 'tierra',
    name: 'TIERRA',
    icon: '/images/sponsors/tierra.jpg',
    description: 'Entidades o particulares que aportan donaciones económicas, o productos que apoyen a la producción del documental que tengan un valor a partir de los 5000$',
    amount: 'Desde $5,000',
    benefits: [
      'Logotipo destacado como uno de los patrocinadores principales',
      'Se realizará una entrevista de 5 minutos en donde se contará sobre la EMPRESA como ejemplo motivacional para el documental',
      'Difusión y participación en ruedas de prensa, mesas redondas, y empresariales',
      'Si el acuerdo es por un canje, se mostrará el producto o el servicio, por medio de imágenes que formarán parte de la narración visual del documental',
      'Difusión en redes sociales incluyendo un bodegón personalizado',
      'Photo Call y Roll ups',
    ],
  },
  {
    id: 'agua',
    name: 'AGUA',
    icon: '/images/sponsors/agua.jpg',
    description: 'Entidades o particulares, que aportan donaciones económicas de más de $2500 para la producción',
    amount: 'Desde $2,500',
    benefits: [
      'Logotipo secundario como patrocinador en el capítulo de estreno y 4 capítulos de la serie documental',
      'Se realizará una mención de la EMPRESA como ejemplo motivacional y agradecimiento',
      'Difusión en redes sociales incluyendo un bodegón personalizado',
      'Si el acuerdo es por un canje, se mostrará el producto o el servicio, por medio de imágenes que formarán parte de la narración visual',
      'Photo Call y Roll ups',
    ],
  },
  {
    id: 'fuego',
    name: 'FUEGO',
    icon: '/images/sponsors/fuego.jpg',
    description: 'Entidades o particulares, que aportan donaciones económicas de más de $1000 para la producción',
    amount: 'Desde $1,000',
    benefits: [
      'Logotipo terciario como patrocinador',
      'Difusión en redes sociales',
      'Photo Call y Roll ups',
    ],
  },
  {
    id: 'metal',
    name: 'METAL',
    icon: '/images/sponsors/metal.jpg',
    description: 'Entidades o particulares, que aportan donaciones económicas de más de $500 para la producción',
    amount: 'Desde $500',
    benefits: [
      'Logotipo cuaternario como patrocinador',
      'Difusión en ruedas de prensa',
      'Photo Call y Roll ups',
    ],
  },
  {
    id: 'madera',
    name: 'MADERA',
    icon: '/images/sponsors/madera.jpg',
    description: 'Entidades o particulares, que aportan donaciones económicas de más de $250 para la producción',
    amount: 'Desde $250',
    benefits: [
      'Logotipo quinario como patrocinador',
      'Mención en ruedas de prensa',
    ],
  },
];
