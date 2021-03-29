import React from 'react';
import clsx from 'clsx';

import styles from './Header.module.scss';
import { Checkbox } from '../Checkbox';

export const Header: React.FC = () => {
  return (
    <header className={clsx(styles.header, 'd-flex justify-content-between')}>
      <img className={styles.logo} src="/logo.svg" alt="Logo" />
      <Checkbox checkedTitle={'Доступен для работы'} uncheckedTitle={'Недоступен'} />
      <Checkbox />
      <div>Правая часть</div>
    </header>
  );
};
