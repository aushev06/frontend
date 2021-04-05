import clsx from 'clsx';
import styles from './LikeBlock.module.scss';
import { ThumbUpIcon } from './ThumbUpIcon';

interface LikeBlockProps {
  mode: 'mini' | 'full';
  likes: number;
  dislikes: number;
  vote?: 'like' | 'dislike';
  onChange: (result: ILikeBlockResult) => void;
}

export interface ILikeBlockResult {
  likes: 1 | 0 | -1;
  dislikes: 1 | 0 | -1;
  vote?: 'like' | 'dislike';
}

export const LikeBlock: React.FC<LikeBlockProps> = ({ mode, likes, dislikes, vote, onChange }) => {
  const onThumbUpClick = () => {
    if (vote === 'like') {
      onChange({ likes: -1, dislikes: 0 });
    } else if (vote === 'dislike') {
      onChange({ likes: 1, dislikes: -1, vote: 'like' });
    } else {
      onChange({ likes: 1, dislikes: 0, vote: 'like' });
    }
  };
  const onThumbDownClick = () => {
    if (vote === 'like') {
      onChange({ likes: -1, dislikes: 1, vote: 'dislike' });
    } else if (vote === 'dislike') {
      onChange({ likes: 0, dislikes: -1 });
    } else {
      onChange({ likes: 0, dislikes: 1, vote: 'dislike' });
    }
  };

  const {
    likeVoted,
    dislikeVoted,
    noVotes,
    likeBlock,
    likeBlockFull,
    likeBlockMini,
    upBlock,
    downBlock,
    rotate,
  } = styles;
  const thumbUpClassName = vote === 'like' ? likeVoted : noVotes;
  const thumbDownClassName = vote === 'dislike' ? dislikeVoted : noVotes;

  return (
    <div className={likeBlock}>
      <div className={mode === 'full' ? likeBlockFull : likeBlockMini}>
        <div className={clsx(upBlock, thumbUpClassName)} onClick={onThumbUpClick}>
          <ThumbUpIcon className={thumbUpClassName} />
          <span>{likes}</span>
        </div>
        <div className={clsx(downBlock, thumbDownClassName)} onClick={onThumbDownClick}>
          <ThumbUpIcon className={clsx(thumbDownClassName, rotate)} />
          <span>{dislikes}</span>
        </div>
      </div>
    </div>
  );
};
