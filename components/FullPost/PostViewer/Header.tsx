import React from 'react';
import styles from '../Post.module.scss';

export interface PostHeaderBlock {
  type: 'header';
  data: {
    text: string;
    level: 1 | 2 | 3 | 4 | 5 | 6;
  };
}

interface HeaderBlockProps {
  block: PostHeaderBlock;
}

export const HeaderBlock: React.FC<HeaderBlockProps> = ({ block }) => {
  return React.createElement(`h${block.data.level}`, { className: styles.header }, block.data.text);
};
