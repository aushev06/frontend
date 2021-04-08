import React from 'react';
import clsx from 'clsx';
import styles from './ViewsAndComments.module.scss';

interface ViewsAndCommentsProps {
  mode: 'mini' | 'full';
  comments: number;
  views: number;
}

const getFullTitle = (num: number, mainPart: string, lastParts: string[]) => {
  let text = mainPart;
  const lastDigit = num % 10;
  const preLastDigit = Math.floor(num / 10) % 10;
  if (lastDigit === 1 && preLastDigit !== 1) {
    text += lastParts[0];
  } else if (lastDigit > 1 && lastDigit <= 4 && preLastDigit !== 1) {
    text += lastParts[1];
  } else {
    text += lastParts[2];
  }
  return `${num} ${text}`;
};

export const ViewsAndComments: React.FC<ViewsAndCommentsProps> = ({ mode, views, comments }) => {
  const commentsTitle = mode === 'full' ? getFullTitle(comments, 'комментар', ['ий', 'ия', 'иев']) : `${comments}`;
  const viewsTitle = mode === 'full' ? getFullTitle(views, 'просмотр', ['', 'а', 'ов']) : `${views}`;
  return (
    <div className={clsx(styles.viewsAndComments, 'd-flex align-items-center')}>
      <img className={styles.icon} src="/comment.svg" alt="Comment icon" />
      <span className={styles.count}>{commentsTitle}</span>
      <img className={styles.icon} src="/eye.svg" alt="Eye icon" />
      <span className={styles.count}>{viewsTitle}</span>
    </div>
  );
};
