import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';

import styles from './Categories.module.scss';
import { Button } from '../Button';
import { SideBlock } from '../SideBlock';

const items: CategoriesItem[] = [
  { name: 'Все подряд', url: '/specialists/all', isActive: true, count: 54 },
  { name: 'Front-end', url: '/specialists/fronted', isActive: false, count: 12 },
  { name: 'Back-end', url: '/specialists/backend', isActive: false, count: 7 },
  { name: 'UX/UI', url: '/specialists/uiux', isActive: false, count: 6 },
  { name: 'Брендинг', url: '/specialists/branding', isActive: false, count: 8 },
  { name: 'QA - тестирование', url: '/specialists/qa', isActive: false, count: 4 },
  { name: 'SMM', url: '/specialists/smm', isActive: false, count: 12 },
  { name: 'SEO', url: '/specialists/seo', isActive: false, count: 5 },
  { name: '1-C', url: '/specialists/1c', isActive: false, count: 5 },
];

type CategoriesItem = { name: string; url: string; isActive: boolean, count: number };

type CategoriesPropsType = {
  items: CategoriesItem[]
}

export const Categories = () => {
  return (
    <SideBlock name="Категории">
      <ul>
        {items.map(item => (
          <li className={styles.item}>
            <Link href={item.url}>
              <a>
                <Button
                  className={clsx('w100', styles.button)}
                  color="primary"
                  endIcon={
                    <>
                      <img src={'/users.svg'} className={styles.icon} />
                      <span className={styles.count}>{item.count}</span>
                    </>
                  }
                  variant={item.isActive ? 'contained' : 'text'}
                >
                  <span>{item.name}</span>
                </Button>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </SideBlock>
  );
};
