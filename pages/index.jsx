import React from 'react';
import styles from '../styles/Home.module.css';
import { useI18n } from '../context/i18n';

export default function Home() {
  const { t } = useI18n();
  return (
    <>
      <div className={styles.coverContainer}>
        <img src="/assets/home-cover.svg" alt="Home cover image" />
        <p className={styles.coverText}>{t('HOME_COVER_TEXT')}</p>
      </div>
      <div className={styles.subtitleContainer}>
        <h2 className={styles.homeSubtitle}>{t('HOME_COMPANY_SUBTITLE')}</h2>
        <p className={styles.homeText}>{t('HOME_COMPANY_TEXT')}</p>
      </div>
    </>
  );
}
