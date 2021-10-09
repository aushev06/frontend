import React from 'react';
import styles from '../Post.module.scss';

export interface PostListBlock {
  type: 'list';
  data: {
    style: 'unordered';
    items: string[];
  };
}

interface ListBlockProps {
  block: PostListBlock;
}

export const ListBlock: React.FC<ListBlockProps> = ({ block }) => {
  return (
    <ul className={styles.list}>
      {block.data.items.map((item, index) => (
        <li key={index} className={styles.listItem}>{item}</li>
      ))}
    </ul>
  );
};
