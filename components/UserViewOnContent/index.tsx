import React from 'react';
import styles from './UserViewOnContent.module.scss';
import clsx from 'clsx';
import { PastTimeLabel } from '../PastTimeLabel';
import Link from 'next/link';

export interface UserViewOnContentProps {
  user: {
    id: number;
    name: string;
    avatarUrl: string;
  };
  time?: number;
}

export const UserViewOnContent: React.FC<UserViewOnContentProps> = ({ user, time }) => {
  return (
    <Link href={`user/${user.id}`}>
      <div className={styles.user}>
        <img
          className={clsx(styles.user_avatar, time ? styles.user_avatar_with_time : '')}
          src={user.avatarUrl}
          alt="Аватар пользвоателя"
        />
        <div className={clsx(styles.user_info, time ? styles.user_info_with_time : '')}>
          <span className={styles.user_name}>{user.name}</span>
          {time ? <PastTimeLabel time={time} /> : null}
        </div>
      </div>
    </Link>
  );
};
