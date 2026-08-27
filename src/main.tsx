import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { LocaleProvider } from './locales/context';
import { router } from './router';
import './styles/global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LocaleProvider>
      <RouterProvider router={router} />
    </LocaleProvider>
  </StrictMode>,
);
