export interface Scientist {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  location?: string;
}

export const scientists: Scientist[] = [
  {
    id: 'jose-abel-flores',
    name: 'José Abel Flores Villarejo',
    role: 'Divulgador científico',
    image: '/images/scientists/jose-abel-flores.jpg',
    bio: `Profesor en la Universidad de Salamanca en la Facultad de Ciencias y el Instituto de Ciencia y Tecnología, así como docente visitante en varios países, ha creado una escuela de investigadores destacados en el estudio de los Cocolitóforos (algas planctónicas fundamentales en el ciclo C) en América del Norte y del Sur, Asia, Australia y Europa.

Pionero en España y en la comunidad internacional en el estudio de Cocolitóforos, algas planctónicas fundamentales en el ciclo C, y por lo tanto en la caracterización y evolución del clima, como marcador paleoambiental.

Su compromiso con el medio ambiente le valió el Premio a la Protección del Medio Ambiente de Castilla y León en 2011.

Con más de doscientas publicaciones en las revistas científicas más prestigiosas (Science o Nature) y la dirección de 25 tesis doctorales en España y el extranjero, ha sido IP de proyectos nacionales e internacionales relacionados con la exploración del océano y su historia climática.

Actualmente es Coordinador del Programa Nacional de Ciencias de la Tierra y del Agua en la Agencia Estatal de Investigación.`,
    location: 'España',
  },
  {
    id: 'alex-hearn',
    name: 'Alex Hearn',
    role: 'Presidente de Migramar',
    image: '/images/scientists/alex-hearn.jpg',
    bio: `Es un ecólogo de pesca marina que ha trabajado como profesor e investigador en la Universidad San Francisco de Quito y el Centro de Ciencias de Galápagos desde 2015.

Obtuvo su licenciatura en Oceanografía y Biología Marina de la Universidad de Southampton, Reino Unido; y su maestría y doctorado de la Universidad Heriot-Watt en las Islas Orkney.

Ha trabajado en las Islas Galápagos desde 2002 en investigación y manejo pesquero, y encabezó el desarrollo del Programa de Investigación de Tiburones para la Reserva Marina de Galápagos desde 2006.

Sus proyectos actuales incluyen el uso de telemetría acústica y satelital para establecer las rutas migratorias de tiburones, evaluando la ecología del movimiento del conjunto pelágico alrededor de los islotes oceánicos y el monitoreo de los criaderos de tiburones en la Reserva Marina de Galápagos.`,
    location: 'Reino Unido / Ecuador',
  },
  {
    id: 'shady-heredia',
    name: 'Shady Heredia Santos',
    role: 'Protección Animal Ecuador',
    image: '/images/scientists/shady-heredia.jpg',
    bio: `Coordinadora de campañas en Protección Animal Ecuador. Médico Veterinaria, Activista, Vegetariana.

Ha trabajado en la defensa de derechos de los animales desde hace 10 años. Colabora con diversas organizaciones sociales incluyendo el Movimiento Animalista Nacional, Colectivo Abolición es Evolución, Movimiento Ecuador Abolicionista y Mundo Veg.

Ha trabajado con organizaciones internacionales como la Red Internacional Antitauromaquia y Open Wing Alliance.

Coordinadora de la campaña Felinos en Casa, Aves Seguras.`,
    location: 'Riobamba – Ecuador',
  },
  {
    id: 'cristina-castro',
    name: 'Cristina Castro Ayala',
    role: 'Doctora en Biología',
    image: '/images/scientists/cristina-castro.jpg',
    bio: `Cristina Castro Ayala es doctora en Biología por la Universidad Central del Ecuador, su tesis de grado versó sobre "Demografía de la ballena jorobada Megaptera novaeangliae en el Parque Nacional Machalilla". Es Master en Gestión Ambiental por la ESPE, con la tesis: "Plan de Manejo del área marina del PNM. Propuestas para turismo y pesca artesanal sostenible".

Su campo de investigación son los Cetáceos: poblaciones, ecología, acústica. Entre el 2000 y 2009 ha publicado varios artículos científicos en revistas especializadas en ballenas, como autora individual y en coautoría. Ha participado en varias reuniones internacionales de expertos en ballenas y en numerosas conferencias y charlas.

Es miembro de la Asociación Ecuatoriana de Mastozoología, y de Pacific Whale Foundation; Centro de Investigaciones de Ballenas del Pacífico, Ecuador, desempeña la función de directora de Investigaciones. Desde hace 20 años viene estudiando a las ballenas jorobadas; lo hace ahora con el mismo entusiasmo de los primeros años y con la finalidad de conocer cada vez más sobre los grandes mamíferos marinos y apoyar su conservación.`,
    location: 'Ecuador',
  },
  {
    id: 'patricia-castillo',
    name: 'Patricia Castillo-Briceño',
    role: 'PhD en Biología',
    image: '/images/scientists/patricia-castillo.jpg',
    bio: `Investigadora y asesora científica en fisiología animal aplicada en estudios de alteraciones climáticas y ambientales.

Bióloga Marina (Pontificia Universidad Católica del Ecuador – PUCE, Ecuador); MSc en Tecnología e Investigación en Ciencias Experimentales (Universidad de Murcia – UMU, España); MSc en Acuicultura (Escuela Superior Politécnica del Litoral – ESPOL, Ecuador); PhD en Biomedicina (UMU, España).

Tiene experiencia internacional como evaluadora en convocatorias de educación superior para la Comisión Europea y de investigación; y como investigadora en el Instituto de Biología del Desarrollo CNRS – U. Aix-Marseille (Francia); el Instituto Pasteur de París (Francia), la U. de Cambridge (Reino Unido); y la ESPOL (Ecuador).

Actualmente reside en Ecuador, donde es Profesora titular principal de la carrera de Biología en la Universidad Laica Eloy Alfaro de Manabí, y colabora como docente de posgrado en la PUCE Sede Manabí.`,
    location: 'Ecuador',
  },
  {
    id: 'francisco-navarrete',
    name: 'Francisco Navarrete-Mier',
    role: 'Investigador y docente universitario',
    image: '/images/scientists/francisco-navarrete.jpg',
    bio: `Investigador y docente universitario con enfoque en acuicultura, cambio climático y comportamiento de animales acuáticos.

Biólogo Marino (Pontificia Universidad Católica del Ecuador – PUCE, Ecuador); MSc. en Acuicultura y PhD en Biología de Peces (Universidad de Murcia, España).

Ha participado en múltiples proyectos de investigación para analizar los impactos ambientales de la acuicultura y otras actividades antropogénicas. Sus intereses de investigación actuales están enfocados en el análisis de las alteraciones ecológicas y comportamentales de la fauna marina nativa bajo escenarios previstos de acidificación oceánica.

Actualmente es profesor titular principal en la Facultad de Ciencias del Mar de la Universidad Laica Eloy Alfaro de Manabí, y colabora como docente de posgrado en la PUCE Sede Manabí.`,
    location: 'Ecuador',
  },
];
