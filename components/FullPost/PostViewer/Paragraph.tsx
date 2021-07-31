import React from 'react';
import styles from '../Post.module.scss';

export interface PostParagraphBlock {
  type: 'paragraph';
  data: {
    text: string;
  };
}

interface ParagraphBlockProps {
  block: PostParagraphBlock;
}

export const ParagraphBlock: React.FC<ParagraphBlockProps> = ({ block }) => {
  return <div className={styles.paragraph} dangerouslySetInnerHTML={{ __html: block.data.text }}></div>;
};
