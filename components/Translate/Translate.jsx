import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { mouseDownEvent } from './utils';
import {
  LOCALES,
  LANGUAGES,
  dropdownDownArrow,
  dropdownUpArrow,
} from './constants';
import {
  dropdownWrapper,
  dropdownActivator,
  dropdownItemList,
  active,
  itemList,
} from './Translate.module.css';

function Translate() {
  const activatorRef = useRef(null);
  const dropdownListRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const { locale, locales, asPath } = useRouter();
  const currentLocale =
    locale === LOCALES.ENGLISH ? LANGUAGES.ENGLISH : LANGUAGES.SPANISH;
  const restOfLocales = locales.filter((l) => l !== locale);

  const clickHandler = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = () => {
    setIsOpen(false);
  };

  const keyHandler = (event) => {
    if (event.key === 'Escape' && isOpen) {
      setIsOpen(false);
    }
  };

  const clickOutsideHandler = (event) => {
    const isRefActive =
      dropdownListRef.current.contains(event.target) ||
      activatorRef.current.contains(event.target);

    isRefActive ? null : setIsOpen(false);
  };

  useEffect(() => {
    isOpen && mouseDownEvent(clickOutsideHandler);
  }, [isOpen]);

  return (
    <div className={dropdownWrapper} onKeyUp={keyHandler}>
      <button
        className={dropdownActivator}
        aria-controls={currentLocale}
        onClick={clickHandler}
        ref={activatorRef}
      >
        {currentLocale} {isOpen ? dropdownDownArrow : dropdownUpArrow}
      </button>
      <ul
        ref={dropdownListRef}
        className={`${dropdownItemList} ${isOpen && active} `}
        onClick={handleSelect}
      >
        {restOfLocales.map((item) => (
          <li className={itemList} key={item}>
            <Link href={asPath} locale={restOfLocales[0]}>
              {restOfLocales[0] === LOCALES.ENGLISH
                ? LANGUAGES.ENGLISH
                : LANGUAGES.SPANISH}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Translate;
