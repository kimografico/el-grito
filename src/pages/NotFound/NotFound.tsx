import { Link } from 'react-router-dom';
import { useTranslation } from '../../locales/context';

export function NotFound() {
  const { ts } = useTranslation();

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', textAlign: 'center' }}>
      <div className="container">
        <h1>404</h1>
        <p>{ts('pages.notFound')}</p>
        <Link to="/">{ts('pages.backToHome')}</Link>
      </div>
    </div>
  );
}
