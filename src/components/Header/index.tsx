import pt from 'date-fns/esm/locale/pt/index.js';
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import Link from 'next/link';
import React from 'react';
import { useTheme } from '../../contexts/themeContext';

import styles from './styles.module.scss';


export function Header() {
  const { toggleTheme, currentTheme } = useTheme();

  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR,
  });

  return (
    <header className={styles.headerContainer}>

      <Link href="/">
        <a>
          <img className={styles.logo} src="/logo.svg" alt="Podcastr" />
          <img className={styles.logoMobile} src="/logo2.svg" alt="Podcastr" />
        </a>
      </Link>


      <p>O melhor para você ouvir sempre</p>

      <span>{currentDate}</span>

      <button
        type="button"
        className={styles.theme}
        onClick={toggleTheme}
      >
        {currentTheme === 'dark' ?
          (
            <img
              src="/light.svg"
              alt="Light Mode"
            />
          ) :
          (
            <img
              src="/dark.svg"
              alt="Dark Mode"
            />
          )}

      </button>
    </header>
  );
}