import React from 'react';
import Link from 'next/link';
import { formatDistanceToNow } from 'date-fns';
import { ru } from 'date-fns/locale';
import { CommentIcon } from '../icons/CommentIcon';
import { EyeIcon } from '../icons/EyeIcon';
import { LikeBlockResult, LikeBlock } from '../LikeBlock';
import styles from './MiniPost.module.scss';

export interface MiniPostData {
  id: number;
  title: string;
  user: {
    id: number;
    name: string;
    avatarUrl: string;
  };
  slug: string;
  tags: string[];
  time: Date;
  description: string;
  imageUrl: string;
  commentsCount: number;
  viewsCount: number;
  likesCount: number;
  dislikesCount: number;
}

interface MiniPostProps {
  postData: MiniPostData;
}

export const MiniPost: React.FC<MiniPostProps> = ({ postData }) => {
  const {
    user,
    title,
    time,
    tags,
    imageUrl,
    description,
    commentsCount,
    viewsCount,
    likesCount,
    dislikesCount,
    slug,
  } = postData;
  const [likesAndDislikes, setLikesAndDislikes] = React.useState<LikeBlockResult>({
    likes: likesCount,
    dislikes: dislikesCount,
    vote: undefined,
  });

  return (
    <div className={styles.post}>
      <div className={styles.info}>
        <Link href={`user/${user.id}`}>
          <div className={styles.user}>
            <img className={styles.user_avatar} src={user.avatarUrl} alt="Аватар" />
            <span className={styles.user_name}>{user.name}</span>
          </div>
        </Link>
        <span className={styles.time}>{formatDistanceToNow(time, { locale: ru, addSuffix: true })}</span>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <span className={styles.tag}>#{tag}</span>
          ))}
        </div>
      </div>
      <img className={styles.image} src={imageUrl} alt="Здесь должна была быть картинка, но её нет..." />
      <h2 className={styles.title}>
        <Link href={`/post/${slug}`}>{title}</Link>
      </h2>
      <p className={styles.description}>{description}</p>
      <div className={styles.popularity}>
        <div className={styles.popularity_left}>
          <div className={styles.comments}>
            <CommentIcon />
            <span className={styles.comments_count}>{commentsCount}</span>
          </div>
          <div className={styles.views}>
            <EyeIcon />
            <span className={styles.views_count}>{viewsCount}</span>
          </div>
        </div>
        <div className={styles.popularity_right}>
          <LikeBlock
            vote={likesAndDislikes.vote}
            likes={likesAndDislikes.likes}
            dislikes={likesAndDislikes.dislikes}
            mode="full"
            onChange={setLikesAndDislikes}
          />
        </div>
      </div>
    </div>
  );
};
