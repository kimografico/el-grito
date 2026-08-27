import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteContent } from '../../data/content';
import { ContactModal } from '../ContactModal/ContactModal';
import styles from './Header.module.css';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isDropdownOpen = (label: string) => openDropdown === label;

  const handleDropdownToggle = (label: string) => {
    setOpenDropdown(isDropdownOpen(label) ? null : label);
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const handleContactClick = () => {
    setContactModalOpen(true);
    handleLinkClick();
  };

  const renderNavItem = (path: string, label: string, className: string) => {
    if (path === '#contacto') {
      return (
        <button
          className={className}
          onClick={() => { handleContactClick(); }}
        >
          {label}
        </button>
      );
    }
    return (
      <Link
        to={path}
        className={`${className} ${isActive(path) ? styles.active : ''}`}
        onClick={handleLinkClick}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo} onClick={handleLinkClick}>
          <img src="/images/logo/logo.png" alt={siteContent.siteName} />
        </Link>

        <button
          className={`${styles.menuToggle} ${mobileMenuOpen ? styles.menuOpen : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`${styles.nav} ${mobileMenuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            {siteContent.navigation.map((item) => (
              <li
                key={item.label}
                className={`${styles.navItem} ${item.children ? styles.hasDropdown : ''}`}
                onMouseEnter={() => item.children && handleDropdownToggle(item.label)}
                onMouseLeave={() => item.children && setOpenDropdown(null)}
              >
                {item.children ? (
                  <>
                    <button
                      className={`${styles.navLink} ${styles.dropdownToggle}`}
                      onClick={() => handleDropdownToggle(item.label)}
                    >
                      {item.label}
                      <span className={styles.arrow}>▾</span>
                    </button>
                    <ul
                      className={`${styles.dropdown} ${isDropdownOpen(item.label) ? styles.dropdownOpen : ''}`}
                    >
                      {item.children.map((child) => (
                        <li key={child.path}>
                          {renderNavItem(child.path, child.label, styles.dropdownLink)}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  renderNavItem(item.path, item.label, styles.navLink)
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </header>
  );
}
