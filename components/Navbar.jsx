import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useI18n } from '../context/i18n';
import styles from '../styles/Navbar.module.css';

function Navbar() {
  const { locale, locales, asPath } = useRouter();
  const { t } = useI18n();
  const restOfLocales = locales.filter((l) => l !== locale);
  return (
    <div className={styles.navbar}>
      <a className={styles.navbarLogo} href="#">
        <Image width={150} height={100} src="/logo.svg" alt="logo" />
      </a>
      <div className={styles.linksSection}>
        <a className={`${styles.navbarLink} ${styles.activeLink}`} href="#">
          {t('NAVBAR_HOME')}
        </a>
        <a className={styles.navbarLink} href="#">
          {t('NAVBAR_ABOUT')}
        </a>
        <a className={styles.navbarLink} href="#">
          {t('NAVBAR_PROJECT')}
        </a>
        <a className={styles.navbarLink} href="#">
          {t('NAVBAR_MERRYLAND')}
        </a>
        <a className={styles.navbarLink} href="#">
          {t('NAVBAR_PROJECT')}
        </a>
        <a className={styles.navbarLink} href="#">
          {t('NAVBAR_NEWS')}
        </a>
        <a className={styles.navbarLink} href="#">
          {t('NAVBAR_CONTACT')}
        </a>
        <a className={styles.navbarLink} href="#">
          Search
        </a>
        <Link
          href={asPath}
          className="text-sm font-semibold"
          locale={restOfLocales[0]}
        >
          🌐 {restOfLocales[0] === 'en' ? '🇺🇸' : '🇪🇸'}
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
