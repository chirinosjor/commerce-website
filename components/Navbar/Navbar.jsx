import React from 'react';
import Image from 'next/image';
import { useI18n } from '../../context/i18n';
import styles from './Navbar.module.css';
import Translate from '../Translate/Translate';

function Navbar() {
  const { t } = useI18n();
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
        <Translate />
      </div>
    </div>
  );
}

export default Navbar;
