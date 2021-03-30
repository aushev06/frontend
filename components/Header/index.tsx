import React, { useState } from 'react';
import clsx from 'clsx';

import styles from './Header.module.scss';
import { AvailableForWork } from '../AvailableForWork';

export const Header: React.FC = () => {
  const [checked, setChecked] = useState(false);

  const onChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <header className={clsx(styles.header, 'd-flex justify-content-between')}>
      <img className={styles.logo} src="/logo.svg" alt="Logo" />
      <AvailableForWork checked={checked} onChange={onChangeCheckbox} setChecked={setChecked} />
      <div>Правая часть</div>
    </header>
  );
};
