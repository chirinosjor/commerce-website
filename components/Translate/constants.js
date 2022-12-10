import React from 'react';

export const LOCALES = {
  ENGLISH: 'en',
  SPANISH: 'es',
};

export const LANGUAGES = {
  ENGLISH: '🇺🇸 English',
  SPANISH: '🇪🇸 Español',
};

export const dropdownDownArrow = (
  <svg
    height="24"
    fill="rgb(70,70,70)"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m0 0h24v24h-24z" fill="none" />
    <path d="m7.41 15.41 4.59-4.58 4.59 4.58 1.41-1.41-6-6-6 6z" />
  </svg>
);

export const dropdownUpArrow = (
  <svg
    height="24"
    fill="rgb(70,70,70)"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m0 0h24v24h-24z" fill="none" />
    <path d="m7.41 8.59 4.59 4.58 4.59-4.58 1.41 1.41-6 6-6-6z" />
  </svg>
);
