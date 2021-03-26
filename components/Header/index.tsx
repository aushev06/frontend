import React from 'react';
import clsx from 'clsx';

import styles from './Header.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={clsx(styles.header, 'd-flex justify-content-between')}>
      <img className={styles.logo} src="/logo.svg" alt="Logo" />
      <div>Правая часть</div>
    </header>
  );
};
