import React from 'react';
import styles from '../Post.module.scss';

export interface PostDelimiterBlock {
  type: 'delimiter';
  data: {};
}

interface DelimiterBlockProps {}

export const DelimiterBlock: React.FC<DelimiterBlockProps> = () => {
  return <div className={styles.delimiter}></div>;
};
