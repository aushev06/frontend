import clsx from 'clsx';
import React from 'react';
import { Button } from '../Button';

import styles from './SideMenu.module.scss';

interface ButtonProps {
  newCount?: number;
}

export const SideMenu: React.FC<ButtonProps> = ({ newCount }) => {
  return (
    <ul>
      <li className={styles.item}>
        <Button
          className={clsx('w100 justify-content-between', styles.button)}
          variant="contained"
          color="primary"
          startIcon={<img src="/fire.svg" />}
          endIcon={<img src="/dots.svg" />}
        >
          <span className="mr-auto">Популярное</span>
        </Button>
      </li>
      <li className={styles.item}>
        <Button
          className={clsx('w100 justify-content-between', styles.item)}
          color="primary"
          startIcon={<img src="/news.svg" />}
        >
          <span className="mr-auto">Новое {newCount ? <span className={styles.newCount}>+{newCount}</span> : ''}</span>
        </Button>
      </li>
    </ul>
  );
};
