export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  category: 'team' | 'artists';
}

export const teamMembers: TeamMember[] = [
  {
    id: 'lidia-aparicio',
    name: 'Lidia Aparicio Sales',
    role: 'Directora – Guionista',
    image: '/images/team/lidia-aparicio.jpg',
    bio: `Formación profesional de imagen y sonido con una amplia complementariedad de formación en el ámbito visual en la Universidad de Valencia, como operadora de cámara e imagen y sonido.

Estudiante autodidacta de guion y multitud de cursos de fotografía digital, efectos especiales, marketing entre otros, para mantenerse actualizada en las nuevas tecnologías y tendencias en el entorno de las redes sociales en los ámbitos de arquitectura, industrial, documental, gastronómica y creativa.

Más de 10 años trabajando en diferentes empresas, como qubo3, BNI Valencia, Gsoft innova marketing estratégico. Como fotógrafa creativa, documentalista, industrial y publicitaria. Realizando imágenes personalizadas.

Dentro de su portfolio de clientes ha realizado documentales para La Ford, El Corte Inglés, Icemi, Westin, Oscar Torrijos, Milestone, Panamar, Marina Beach, Hotel Holiday entre muchas empresas diversas.

Ha colaborado en asociaciones como Agfoval y actualmente forma parte del equipo de la Asociación Amseld. Realizando diferentes proyectos creativos solidarios, como la exposición "El alma de las mujeres Luna" Premiada con el Foto Europa 2001 sección cultura / Emprendimiento.

Ha realizado publicaciones en prensa y revistas tanto en fotografía documental periodística, gastronómica y editorial. Desde España hasta Los Angeles (California).

Ha viajado a México Guadalajara, Toronto y Los Ángeles como fotógrafa y directora de fotografía. Una de las experiencias más destacables fue ser invitada al rodaje de la película Pacific Rim dirigida por Guillermo del Toro, para después realizar entrevistas a algunos de sus compañeros que han formado parte de su vida.`,
    category: 'team',
  },
  {
    id: 'fernanda-gallardo',
    name: 'Fernanda Gallardo Velásquez',
    role: 'Productora Ejecutiva en Territorio',
    image: '/images/team/fernanda-gallardo.jpg',
    bio: `Fotógrafa naturalista, divulgadora científica, productora audiovisual y gestora de proyectos de comunicación y ciencia con 11 años de experiencia.

En Ecuador me desarrollé como periodista gráfica durante el periodo del 2010 al 2015 en instituciones públicas y como capacitadora en talleres de profesionalización para fotógrafos y camarógrafos en todo el Ecuador. En los espacios privados impartí talleres de fotografía digital en el Centro de la Imagen Arte y Fotografía durante tres años.

En España, en la ciudad de Sevilla, durante los años 2017 y 2018 trabajé para la Fundación «Solidarios para el Desarrollo» impartiendo el primer Taller de Fotografía Social Comunitaria para los usuarios de la fundación, para personas en situación de calle, y al mismo tiempo formé parte del equipo de la Compañía de Teatro MUJEREANDO, mujeres también en situación de calle que usan el teatro como terapia, en donde realicé books fotográficos y artículos periodísticos para España y Ecuador.

En el 2019, en la ciudad de Valencia trabajé para el Ajuntament de Valencia como guía fotográfica, en un proyecto llamado Click Al'Horta.

La idea era recorrer cada huerta e impulsar el interés que tiene su patrimonio hacia la comunidad valenciana y paralelamente, colaboré como asistente fotográfica para el proyecto VALIENTES PHOTON y la «Fundación Adonar» en los talleres para jóvenes tutelados en condición de migrantes, aquí se usó la fotografía como herramienta de cambio social.

Actualmente en Ecuador, me desempeño de manera independiente como capacitadora en varios espacios, productora audiovisual en KUNA, la «Comunidad de Divulgadores del Conocimiento Científico y Ancestral del Ecuador» y comunicadora ambiental en Fondo Animal, una organización que apoya a los centros de rescate de fauna urbana y silvestre en Ecuador.`,
    category: 'team',
  },
  {
    id: 'amseld-belen',
    name: 'Asociación AMSELD',
    role: 'Belén Motilla Ginés • Coproductora ejecutiva',
    image: '/images/team/amseld-belen.png',
    bio: `La Asociación de Mujeres y Hombres Solidarias/os y Emprendedoras/es L.D. lleva más de 15 años realizando diversas acciones dentro de los Fines y Actos que se registraron en nuestros Estatutos y que, con el paso de los años, hemos evolucionado y se han ido añadiendo nuevos proyectos.

Realizar acciones tales como eventos, campañas, marketing etc., para aquellas asociaciones sin ánimo de lucro, que necesiten de nuestro tiempo y ponerlo al servicio de éstas con el fin de conseguir los objetivos deseados. Para ello, el único requisito que solicitamos es que todo el dinero que se recaude con nuestro trabajo sea donado para fines benéficos.

Nuestra asociación también hace de enlace entre empresas y organismos oficiales. Lo único que solicitamos es que, si hacemos captación de fondos, un porcentaje será donado a nuestra entidad para poder seguir trabajando en nuestra labor social.

Realizamos encuentros entre emprendedores/as, empresas y organismos para hacer Networking.

Caminamos de la mano de las personas que vienen a solicitarnos ayuda para emprender, dándole todas las herramientas necesarias para que puedan desarrollar su proyecto.

Nos involucramos y participamos en temas tan diversos e importantes como: Medioambiente, Sostenibilidad, Ecología, Inclusión Social, Mujer, LGTBI, Infancia, Diversidad Funcional, Discapacidad, Geriatría, Moda, Migración, Derechos de animales, Organización de Eventos y Acciones de Concienciación.`,
    category: 'team',
  },
];

export const artists: TeamMember[] = [
  {
    id: 'kimo-saez',
    name: 'Kimo Sáez Blanco',
    role: 'Diseñador Gráfico',
    image: '/images/artists/kimo-saez.jpg',
    bio: 'Diseñador gráfico del proyecto El Grito.',
    category: 'artists',
  },
  {
    id: 'isaias-escudero',
    name: 'Isaías Escudero',
    role: 'Ilustrador',
    image: '/images/artists/isaias-escudero.jpg',
    bio: `Licenciado en la Facultad de Bellas Artes de San Carlos de la UPV (Valencia), especializándose en fotografía y pintura. Ha vivido en Irlanda (Dublín, 2007), Grecia (Tesalónica, 2001), China (Beijing, 2008) y Francia (Toulouse, 2010). Concentrado en la fotografía, la pintura y la ilustración, y de carácter marcadamente multidisciplinar, combina medios tradicionales y digitales.

En fotografía, ha trabajado asistiendo en la preparación y edición del calendario solidario del equipo de rugby nacional de Francia (2001), así como en diversas campañas publicitarias. También se ha dedicado al matte painting en proyectos de integración medioambientales (EDIGMA INGENIERÍA).

Ha realizado ilustraciones para diversos medios y publicaciones ("Bostezo"), fanzines y cómics. Maquetación, diseño e ilustración para varios CD's ("DUNA: terra", "Elma Sambeat: MUERTO DE AMOR", "MEDITERRANEAN ROOTS", "Vuelo de Mar") y ha colaborado como diseñador de escenografía, atrezzo e iluminación en diferentes obras de teatro ("STRINDBERG. LA MÁS FUERTE").

También ha colaborado en proyectos televisivos como "HISTORIETES MEDIEVALES" para "A Punt" (Valencia), fabricando props y atrezzo. Para Alaquàs (Valencia), realizó una pareja de gigantes, modelando las cabezas en barro y pasándolas a fibra de vidrio.

Ha impartido talleres en colegios e institutos sobre cómic, ilustración de cuentos infantiles y graffiti.`,
    category: 'artists',
  },
  {
    id: 'jose-vazquez',
    name: 'José Vazquez',
    role: 'Producciones Musicales',
    image: '/images/artists/jose-vazquez.jpg',
    bio: `Formador y músico por naturaleza, lleva más de 15 años impartiendo cursos y charlas sobre sensibilización medioambiental, higiene alimentaria y prevención de riesgos laborales. Inagotable lucha que siempre ha tratado de atajar sacudiendo conciencias y ampliando la visión global del auditorio.

Como músico, se ha entregado a la interpretación, arreglo y composición para numerosos proyectos (Sujeto K, La Golfería y otras formaciones) así como para jingles y BSOs.

Ahora, no quiere dejar escapar la oportunidad de aunar sus dos pasiones en este proyecto potenciando con su composición el impacto del discurso.`,
    category: 'artists',
  },
];

export function getAllMembers(): TeamMember[] {
  return [...teamMembers, ...artists];
}

export function getMemberBySlug(slug: string): TeamMember | undefined {
  return getAllMembers().find((m) => m.id === slug);
}
