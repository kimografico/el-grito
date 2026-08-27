export interface Organization {
  id: string;
  name: string;
  logo: string;
  description: string;
  website: string;
  location: string;
}

export const organizations: Organization[] = [
  {
    id: 'migramar',
    name: 'MIGRAMAR',
    logo: '/images/organizations/migramar.png',
    description: 'La red MigraMar lleva a cabo la investigación científica necesaria para comprender mejor y salvaguardar poblaciones saludables de especies migratorias marinas en el Pacífico Oriental.',
    website: 'https://www.migramar.org/en/index',
    location: 'Costa Rica y Estados Unidos',
  },
  {
    id: 'kuna',
    name: 'KUNA',
    logo: '/images/organizations/kuna.jpg',
    description: 'KUNA es una Comunidad de actores sociales interesados en fortalecer la comunicación entre investigadores, científicos, académicos y la sociedad en general para fortalecer el acceso al conocimiento científico y ancestral, mediante la realización de proyectos interdisciplinarios y actividades de divulgación en espacios públicos.',
    website: 'http://www.kunaecuador.org/',
    location: 'Comunidad de Divulgadores del Conocimiento Científico y Ancestral del Ecuador',
  },
  {
    id: 'pae',
    name: 'PAE Protección Animal Ecuador',
    logo: '/images/organizations/pae.png',
    description: 'La fundación Protección Animal Ecuador, PAE, se fundó y legalizó en Quito el 3 de agosto de 1984 ante el Ministerio de Inclusión Social y Económica bajo la figura original de asociación y posteriormente reformada a fundación el 2 de marzo de 2005 con Acuerdo Ministerial # 4883, como una entidad apolítica, arreligiosa, con personería jurídica, de derecho privado y sin fines de lucro, fundada para la defensa y protección de los animales.\n\nPromueve la protección y el bienestar de los animales mediante acciones directas y la concienciación de la comunidad en el respeto que merecen y se debe tener hacia las demás especies.',
    website: 'http://www.pae.ec/',
    location: 'Ecuador',
  },
  {
    id: 'fondo-animal',
    name: 'FONDO ANIMAL',
    logo: '/images/organizations/fondo-animal.png',
    description: 'Fondo Animal es una plataforma de crowdfunding que busca ayudar a proyectos, de organizaciones legalmente reconocidas, que actualmente trabajan con fauna urbana o fauna silvestre, para conectarlos con jóvenes agentes de cambio, comprometidos con el bienestar animal y la conservación de especies.\n\nCreemos en la creación colaborativa, por lo que procuramos generar comunidades de ayuda entre: proyectos de conservación de biodiversidad, refugios de vida silvestre, zoológicos que trabajan con fauna nativa, refugios o albergues de fauna urbana, entre otros.\n\nPrincipalmente apoyamos a proyectos que buscan el bienestar de animales de compañía y la conservación de fauna silvestre nativa. La mejor forma de ayudar activamente es participando de los proyectos que se encuentran en esta plataforma, dentro de cada uno de ellos podrás ayudar con: donaciones, voluntariado o compra de productos de cada uno de los proyectos.',
    website: 'https://www.fondoanimal.com/',
    location: 'Ecuador',
  },
  {
    id: 'mas-galapagos',
    name: 'MÁS GALÁPAGOS',
    logo: '/images/organizations/mas-galapagos.png',
    description: 'Somos un grupo de ciudadanos que aman, valoran y respetan la biodiversidad marina que caracteriza al archipiélago de Galápagos y queremos defenderlo.\n\nProponemos acciones concretas para la protección de la Reserva Marina de Galápagos, trabajando en un solo equipo, Autoridades y Sociedad Civil, con el objetivo de mantener conservados los frágiles ecosistemas del Primer Patrimonio del Mundo, que hoy están nuevamente amenazados.',
    website: 'https://www.masgalapagos.info/',
    location: 'Ecuador',
  },
  {
    id: 'amseld',
    name: 'AMSELD',
    logo: '/images/organizations/amseld.png',
    description: 'La filosofía del AMSELD surge de la necesidad actual de ayudarnos mutuamente para alcanzar nuestros sueños en el terreno laboral y familiar donde las socias se caracterizan por ser emprendedoras, trabajadoras infatigables y solidarias. Para llevarlo a cabo se ha conformado un Directorio de Empresas-socias, una base de archivos con la que mantenemos informadas a socias de todos los temas relacionados con la mujer: moda, belleza, salud, cuidados, empleo, eventos, quedadas, cursos y talleres, salidas o excursiones, etc. En ellos vais a encontrar a un grupo de personas afines a vosotros y a vosotras, un punto de encuentro para disipar dudas que tengáis, apoyo y colaboración cuando deseéis hacer un evento, asesoramiento empresarial, descuentos en compras realizadas en las empresas del club, información sobre eventos en diversos puntos de nuestra geografía, y veladas de diversión asegurada.',
    website: 'http://www.wonderencuentrosbm.com/',
    location: 'España',
  },
  {
    id: 'ebioac',
    name: 'EBIOAC',
    logo: '/images/organizations/ebioac.png',
    description: 'BIOMA ecuatorial y acidificación oceánica (EBIOAc), es uno de los proyectos de investigación que se desarrolla en la Universidad Laica Eloy Alfaro de Manabí (ULEAM), en la facultad de Ciencias del Mar, desde marzo del 2016, bajo la dirección de los PhDs Patricia Castillo-Briceño y Francisco Navarrete-Mier, docentes de esta unidad académica.\n\nEl proyecto se enmarca en el objetivo 7 del Plan Nacional de Buen vivir, que garantiza el derecho de la naturaleza y promueve la sostenibilidad ambiental territorial y global, además, está dentro de la línea de investigación 5 de la ULEAM: Biología, Ecología y Conservación de la Flora y Fauna Marina y Terrestre y ligado al programa Biodiversidad y Ambiente.',
    website: 'https://ebioac.weebly.com/',
    location: 'Ecuador',
  },
];
