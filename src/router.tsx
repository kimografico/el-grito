import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Home } from './pages/Home/Home';
import { Team } from './pages/Team/Team';
import { MemberDetail } from './pages/MemberDetail/MemberDetail';
import { ScientistDetail } from './pages/MemberDetail/ScientistDetail';
import { DirectorLetter } from './pages/DirectorLetter/DirectorLetter';
import { Collaborations } from './pages/Collaborations/Collaborations';
import { Artists } from './pages/Artists/Artists';
import { Scientists } from './pages/Scientists/Scientists';
import { Sponsors } from './pages/Sponsors/Sponsors';
import { Volunteer } from './pages/Volunteer/Volunteer';
import { Gallery } from './pages/Gallery/Gallery';
import { Contact } from './pages/Contact/Contact';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'equipo', element: <Team /> },
      { path: 'equipo/:slug', element: <MemberDetail /> },
      { path: 'cientifico/:slug', element: <ScientistDetail /> },
      { path: 'carta-directora', element: <DirectorLetter /> },
      { path: 'colaboradores', element: <Collaborations /> },
      { path: 'artistas', element: <Artists /> },
      { path: 'comunidad-cientifica', element: <Scientists /> },
      { path: 'patrocinio', element: <Sponsors /> },
      { path: 'voluntariado', element: <Volunteer /> },
      { path: 'galeria', element: <Gallery /> },
      { path: 'contacto', element: <Contact /> },
    ],
  },
]);
