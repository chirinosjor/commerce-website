import React from 'react';
import { ReactPhotoCollage } from 'react-photo-collage';
import styles from '../styles/Home.module.css';
import { useI18n } from '../context/i18n';
import { homeCollageSettings } from '../utils/homeCollageSettings';

export default function Home() {
  const { t } = useI18n();
  return (
    <>
      <div className={styles.coverContainer}>
        <img
          src="/assets/home-cover.svg"
          alt="Home cover image"
          className={styles.hero}
        />
        <p className={styles.coverText}>{t('HOME_COVER_TEXT')}</p>
      </div>
      <div className={styles.sectionContainer}>
        <h2 className={styles.homeSubtitle}>{t('HOME_COMPANY_SUBTITLE')}</h2>
        <p className={styles.homeText}>{t('HOME_COMPANY_TEXT')}</p>
      </div>
      <div className={styles.sectionContainer}>
        <h1 className={styles.homeTitle}>{t('HOME_OUR_PRODUCTS')}</h1>
        <div className={styles.imageCollage}>
          <ReactPhotoCollage {...homeCollageSettings} />
        </div>
      </div>
      <div className={`${styles.contactContainer} ${styles.contactBackground}`}>
        <div>
          <h2 className={styles.contactTitle}>{t('HOME_CONTACT_TITLE')}</h2>
          <h3 className={styles.contactSubtitle}>
            {t('HOME_CONTACT_SUBTITLE')}
          </h3>
        </div>
        <button className={styles.contactButton}>
          <p className={styles.contactButtonText}>{t('HOME_CONTACT_BUTTON')}</p>
        </button>
      </div>
    </>
  );
}
