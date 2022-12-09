import Image from 'next/image';
import React from 'react';
import styles from '../styles/Navbar.module.css';

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <a href="#">
        <Image width={150} height={150} src="/logo.svg" alt="logo" />
        </a>
      </div>
      <div className={styles.linksSection}>
        <a className={`${styles.navbarLink} ${styles.activeLink}`} href="#">Home</a>
        <a className={styles.navbarLink} href="#">About us</a>
        <a className={styles.navbarLink} href="#">Products</a>
        <a className={styles.navbarLink} href="#">Merryland</a>
        <a className={styles.navbarLink} href="#">Project</a>
        <a className={styles.navbarLink} href="#">News</a>
        <a className={styles.navbarLink} href="#">Contact</a>
      </div>
      <div className={styles.actionsSection}>
      <div className={styles.navbarLink}>
      <a href="#">Search</a>
      </div>
      <div className={styles.navbarLink}>
      <a href="#">Translate</a>
      </div>
      </div>
    </div>
  );
}

export default Navbar;
