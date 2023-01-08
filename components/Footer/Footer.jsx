import React from 'react';
import NavbarLinks from '../NavbarLinks';

import styles from './Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useI18n } from '../../context/i18n';

import { socialNetworks } from './constants';

function Footer() {
  const { t } = useI18n();
  return (
    <>
      <div className={styles.container}>
        <div>
          <Image
            width={315}
            height={177}
            src="/assets/footer-logo.svg"
            alt="logo"
          />
          <div className={styles.companyInfo}>
            <p>{`${t('COMPANY_PHONE')}: 71 656 741 696`}</p>
            <p>{`${t(
              'COMPANY_ADDRESS',
            )}: 32 Fitzroy street, Cleveland, QLD 4163 Australia`}</p>
            <p>{`${t('COMPANY_EMAIL')}: contact@bensonandharley.com.au `}</p>
            <p>{`${t('COMPANY_WEBSITE')}: www.bensonandharley.com.au`}</p>
          </div>
        </div>
        <div className={styles.socialsContainer}>
          <div className={styles.socialNetworks}>
            {socialNetworks.map((socialNetwork) => (
              <Link
                href={socialNetwork.link}
                target="_blank"
                rel="noopener noreferrer"
                key={socialNetwork.name}
              >
                <Image
                  width={80}
                  height={80}
                  src={socialNetwork.img}
                  alt={`${socialNetwork.name} Icon`}
                />
              </Link>
            ))}
          </div>
          <NavbarLinks />
        </div>
      </div>
      <div className={styles.copyright}>
        <p>{t('FOOTER_DESIGNED_BY')}</p>
        <p>{t('FOOTER_CREATED_BY')}</p>
      </div>
    </>
  );
}

export default Footer;
