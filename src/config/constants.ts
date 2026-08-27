export const CONTACT_EMAIL = 'info@elgritodelanaturaleza.com';

export const INSTAGRAM_USERNAME = 'el_grito_de_la_naturaleza';

const base = import.meta.env.BASE_URL;

export function img(path: string): string {
  return `${base}${path.startsWith('/') ? path.slice(1) : path}`;
}

export const IMAGES = {
  logo: img('/images/logo/logo.png'),
  logoFull: img('/images/logo/logo-full.png'),
  heroBackground: img('/images/decorative/antique-map-background.jpg'),
  scientistBackground: img('/images/decorative/pexels-scientist.jpg'),
  natureParallax: img('/images/decorative/nature-landscape-parallax.jpg'),
  cotopaxiParallax: img('/images/decorative/volcan-cotopaxi-painting.jpg'),
  lagunaGrande: img('/images/decorative/laguna-grande.png'),
  monoArdilla: img('/images/decorative/mono-ardilla.png'),
  disaster: img('/images/decorative/disaster.png'),
  scientistCollab: img('/images/decorative/scientist-cullab.jpg'),
} as const;
