import React from 'react';
import Link from 'next/link';

import styles from './Tags.module.scss';

type TagItem = { name: string; url: string };

const Tag: React.FC<TagItem> = ({ name, url }) => (
  <Link href={url}>
    <a className={styles.tag}>#{name}</a>
  </Link>
);

export const Tags: React.FC<{ items: TagItem[] }> = ({ items }) => {
  return (
    <>
      {items.map((obj) => (
        <Tag name={obj.name} url={obj.url} />
      ))}
    </>
  );
};
