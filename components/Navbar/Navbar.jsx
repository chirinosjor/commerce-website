import React from 'react';
import Image from 'next/image';
import styles from './Navbar.module.css';
import Translate from '../Translate';
import NavbarLinks from '../NavbarLinks';

function Navbar() {
  return (
    <div className={styles.navbar}>
      <a className={styles.navbarLogo} href="#">
        <Image width={150} height={100} src="/logo.svg" alt="logo" />
      </a>
      <div className={styles.linksSection}>
        <NavbarLinks />
        <a className={styles.navbarLink} href="#">
          Search
        </a>
        <Translate />
      </div>
    </div>
  );
}

export default Navbar;
