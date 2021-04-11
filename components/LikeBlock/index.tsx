import clsx from 'clsx';
import styles from './LikeBlock.module.scss';
import { ThumbUpIcon } from '../icons/ThumbUpIcon';

export type LikeBlockVote = 'like' | 'dislike' | undefined;

interface LikeBlockProps {
  mode: 'mini' | 'full';
  likes: number;
  dislikes: number;
  vote?: LikeBlockVote;
  onChange: (result: LikeBlockResult) => void;
}

export interface LikeBlockResult {
  likes: number;
  dislikes: number;
  vote: LikeBlockVote;
}

export const LikeBlock: React.FC<LikeBlockProps> = ({ mode, likes, dislikes, vote, onChange }) => {
  const onThumbUpClick = () => {
    if (vote === 'like') {
      onChange({ likes: likes - 1, dislikes, vote: undefined });
    } else if (vote === 'dislike') {
      onChange({ likes: likes + 1, dislikes: dislikes - 1, vote: 'like' });
    } else {
      onChange({ likes: likes + 1, dislikes, vote: 'like' });
    }
  };
  const onThumbDownClick = () => {
    if (vote === 'like') {
      onChange({ likes: likes - 1, dislikes: dislikes + 1, vote: 'dislike' });
    } else if (vote === 'dislike') {
      onChange({ likes, dislikes: dislikes - 1, vote: undefined });
    } else {
      onChange({ likes, dislikes: dislikes + 1, vote: 'dislike' });
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
