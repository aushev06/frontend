import React from 'react';
import Link from 'next/link';

import styles from './Tags.module.scss';
import {Theme} from "../../interfaces";
import { Button } from '../Button';
import clsx from "clsx";

type TagItem = { theme: Theme, onClick?: (t: Theme) => void, isActive: boolean};

const Tag: React.FC<TagItem> = ({ theme, onClick, isActive }) => (
  <Link href={theme.name}>
    <a onClick={() => onClick(theme)} className={styles.tag}>
        <Button className={clsx(styles.btn, isActive ? styles.active : '')} variant={isActive ? 'text' : 'text'}>
            {theme.name}
        </Button>
    </a>
  </Link>
);

export const Tags: React.FC<{ items: Theme[], selectedItems: Theme[], handleSelect: (t: Theme) => void }> = ({ items, handleSelect, selectedItems }) => {
  return (
    <>
      {items.map((obj) => (
        <Tag key={obj.name} theme={obj} onClick={handleSelect} isActive={!!selectedItems?.find(t => +t.id === +obj.id)} />
      ))}
    </>
  );
};
