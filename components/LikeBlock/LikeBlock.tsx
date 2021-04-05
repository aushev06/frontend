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

export const LikeBlock: React.FC<LikeBlockProps> = ({ mode, likes, dislikes, vote, onChange }) => {
  const onThumbUpClick = () => {
    onChange('like');
  };
  const onThumbDownClick = () => {
    onChange('dislike');
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
