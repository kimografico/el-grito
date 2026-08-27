import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './components/Layout/Layout';

const Home = lazy(() => import('./pages/Home/Home').then(m => ({ default: m.Home })));
const Team = lazy(() => import('./pages/Team/Team').then(m => ({ default: m.Team })));
const PersonDetail = lazy(() => import('./pages/MemberDetail/PersonDetail').then(m => ({ default: m.PersonDetail })));
const DirectorLetter = lazy(() => import('./pages/DirectorLetter/DirectorLetter').then(m => ({ default: m.DirectorLetter })));
const Collaborations = lazy(() => import('./pages/Collaborations/Collaborations').then(m => ({ default: m.Collaborations })));
const ScientificSupport = lazy(() => import('./pages/ScientificSupport/ScientificSupport').then(m => ({ default: m.ScientificSupport })));
const Artists = lazy(() => import('./pages/Artists/Artists').then(m => ({ default: m.Artists })));
const Scientists = lazy(() => import('./pages/Scientists/Scientists').then(m => ({ default: m.Scientists })));
const Sponsors = lazy(() => import('./pages/Sponsors/Sponsors').then(m => ({ default: m.Sponsors })));
const Volunteer = lazy(() => import('./pages/Volunteer/Volunteer').then(m => ({ default: m.Volunteer })));
const Gallery = lazy(() => import('./pages/Gallery/Gallery').then(m => ({ default: m.Gallery })));
const NotFound = lazy(() => import('./pages/NotFound/NotFound').then(m => ({ default: m.NotFound })));

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
      { index: true, element: <Home /> },
      { path: 'equipo', element: <Team /> },
      { path: 'equipo/:slug', element: <PersonDetail /> },
      { path: 'cientifico/:slug', element: <PersonDetail /> },
      { path: 'carta-directora', element: <DirectorLetter /> },
      { path: 'colaboradores', element: <Collaborations /> },
      { path: 'apoyo-cientifico', element: <ScientificSupport /> },
      { path: 'artistas', element: <Artists /> },
      { path: 'comunidad-cientifica', element: <Scientists /> },
      { path: 'patrocinio', element: <Sponsors /> },
      { path: 'voluntariado', element: <Volunteer /> },
      { path: 'galeria', element: <Gallery /> },
      { path: '*', element: <NotFound /> },
    ],
  },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);
