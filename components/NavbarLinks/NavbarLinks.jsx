import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useI18n } from '../../context/i18n';
import styles from './NavbarLinks.module.css';

function NavbarLinks() {
  const router = useRouter();
  const { t } = useI18n();

  const NavbarLink = (route, label) => {
    return (
      <Link
        className={`${styles.navbarLink} ${
          router.pathname === route && styles.activeLink
        }`}
        href={route}
      >
        {label}
      </Link>
    );
  };

  const routes = {
    '/': t('NAVBAR_HOME'),
    '/About': t('NAVBAR_ABOUT'),
    '/Projects': t('NAVBAR_PROJECT'),
    '/Merryland': t('NAVBAR_MERRYLAND'),
    '/News': t('NAVBAR_NEWS'),
    '/Contact': t('NAVBAR_CONTACT'),
  };

  return (
    <div className={styles.linksSection}>
      {Object.entries(routes).map(([route, label]) => {
        return NavbarLink(route, label);
      })}
    </div>
  );
}

export default NavbarLinks;
