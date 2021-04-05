import React, { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './LikeBlock.module.scss';
import { ThumbUpIcon } from './ThumbUpIcon';

interface LikeBlockProps {
  mode: 'mini' | 'full';
  likes: number;
  dislikes: number;
  vote?: 'like' | 'dislike';
  onChange: (vote: 'like' | 'dislike') => void;
}

export const LikeBlock: React.FC<LikeBlockProps> = ({ mode, likes: upCount, dislikes: downCount, vote, onChange }) => {
  const thumbUpClassName = vote === 'like' ? styles.likeVoted : styles.noVotes;
  const thumbDownClassName = vote === 'dislike' ? styles.dislikeVoted : styles.noVotes;

  const onThumbUpClick = () => {
    onChange('like');
  };
  const onThumbDownClick = () => {
    onChange('dislike');
  };

  return (
    <div className={styles.likeBlock}>
      <div className={mode === 'full' ? styles.likeBlockFull : styles.likeBlockMini}>
        <div className={clsx(styles.upBlock, thumbUpClassName)} onClick={onThumbUpClick}>
          <ThumbUpIcon className={thumbUpClassName} />
          <span>{upCount}</span>
        </div>
        <div className={clsx(styles.downBlock, thumbDownClassName)} onClick={onThumbDownClick}>
          <ThumbUpIcon className={clsx(thumbDownClassName, styles.rotate)} />
          <span>{downCount}</span>
        </div>
      </div>
    </div>
  );
};
