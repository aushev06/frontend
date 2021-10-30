import React from 'react';
import styles from './UserViewOnContent.module.scss';
import clsx from 'clsx';
import { PastTimeLabel } from '../PastTimeLabel';
import Link from 'next/link';
import { Popover, Avatar, Divider } from '@material-ui/core';

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
    <Link href={`/profile/${user.id}`}>
      <div className={styles.user}>
        {user.avatarUrl?.length && <img
            className={clsx(styles.user_avatar, time ? styles.user_avatar_with_time : '')}
            src={user.avatarUrl}
            alt="Аватар пользвоателя"
        />}

        {!user.avatarUrl?.length && <Avatar style={{width: 22, height: 22, marginRight: 6}} />}

        <div className={clsx(styles.user_info, time ? styles.user_info_with_time : '')}>
          <span className={styles.user_name}>{user.name}</span>
          {time ? <PastTimeLabel time={time} /> : null}
        </div>
      </div>
    </Link>
  );
};
