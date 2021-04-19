import React from 'react';
import Link from 'next/link';
import { formatDistanceToNow } from 'date-fns';
import { ru } from 'date-fns/locale';
import { CommentIcon } from '../icons/CommentIcon';
import { EyeIcon } from '../icons/EyeIcon';
import styles from './RecommendationItem.module.scss';

export interface RecommendationItemData {
  id: number;
  title: string;
  user: {
    id: number;
    name: string;
    avatarUrl: string;
  };
  slug: string;
  time: number;
  imageUrl: string;
  commentsCount: number;
  viewsCount: number;
}

interface RecommendationData {
  data: RecommendationItemData
}

export const RecommendationItem:React.FC<RecommendationData> = ({ data }) => {
  const {
    title,
    user,
    slug,
    time,
    imageUrl,
    commentsCount,
    viewsCount,
  } = data;

  return (
    <div className={styles.post}>
      <Link href={`user/${user.id}`}>
        <div className={styles.imageBlock}>
          <img className={styles.image} src={imageUrl} alt="Здесь должна была быть картинка, но её нет..." />
        </div>
      </Link>
      <div className={styles.infoBlock}>
        <div className={styles.info}>
          <Link href={`user/${user.id}`}>
            <div className={styles.user}>
              <img className={styles.user_avatar} src={user.avatarUrl} alt="Аватар" />
              <span className={styles.user_name}>{user.name}</span>
            </div>
          </Link>
          <span className={styles.time}>{formatDistanceToNow(time, { locale: ru, addSuffix: true })}</span>
        </div>
        <h2 className={styles.title}>
          <Link href={`/post/${slug}`}>{title}</Link>
        </h2>
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
        </div>
      </div>
    </div>
  )
}
