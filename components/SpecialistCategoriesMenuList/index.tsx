import clsx from 'clsx';
import React from 'react';
import Link from 'next/link';
import { Button } from '../Button';

import styles from './SpecialistMenuList.module.scss';

type MenuItem = {
    name: string;
    count?: number;
    isActive?: boolean
};

type MenuListProps = {
  items: MenuItem[];
  onClick: (item: unknown) => {};
};

export const SpecialistCategoriesMenuList: React.FC<MenuListProps> = ({ items, onClick }) => {
  return (
    <ul className="mb-40">
      {items.map((item) => (
        <li key={item.name} className={styles.item}>
            <Button
                onClick={() => onClick(item.name)}
                className={clsx('w100 justify-content-between', styles.button)}
                variant={item.isActive ? 'contained' : 'text'}
                color="primary"
                endIcon={<><img className={styles.icon} src={'/users.svg'} /><span className={styles.newCount}>{item.count}</span></>}
            >
                <span className="mr-auto">
                  {item.name}
                </span>
            </Button>
        </li>
      ))}
    </ul>
  );
};
