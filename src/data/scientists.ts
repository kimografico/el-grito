import { img } from '../config/constants';

export interface Scientist {
  id: string;
  name: string;
  image: string;
}

export const scientists: Scientist[] = [
  {
    id: 'jose-abel-flores',
    name: 'José Abel Flores Villarejo',
    image: img('/images/scientists/jose-abel-flores.jpg'),
  },
  {
    id: 'alex-hearn',
    name: 'Alex Hearn',
    image: img('/images/scientists/alex-hearn.jpg'),
  },
  {
    id: 'shady-heredia',
    name: 'Shady Heredia Santos',
    image: img('/images/scientists/shady-heredia.jpg'),
  },
  {
    id: 'cristina-castro',
    name: 'Cristina Castro Ayala',
    image: img('/images/scientists/cristina-castro.jpg'),
  },
  {
    id: 'patricia-castillo',
    name: 'Patricia Castillo-Briceño',
    image: img('/images/scientists/patricia-castillo.jpg'),
  },
  {
    id: 'francisco-navarrete',
    name: 'Francisco Navarrete-Mier',
    image: img('/images/scientists/francisco-navarrete.jpg'),
  },
];
