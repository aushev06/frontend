import React from 'react';
import styles from '../Post.module.scss';

export interface PostDelimiterBlock {
  type: 'delimiter';
  data: {};
}

interface DelimiterBlockProps {
  block: PostDelimiterBlock;
}

export const DelimiterBlock: React.FC<DelimiterBlockProps> = ({ block }) => {
  return <div className={styles.delimiter}></div>;
};
