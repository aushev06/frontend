import React from 'react';
import { Popover, Avatar, Divider } from '@material-ui/core';
import styles from './ProfilePopup.module.scss';
import clsx from 'clsx';
import Link from 'next/link';
import {User} from "../../interfaces";

export interface PofilePopupProps {
  onClick?: () => void;
  user: User;
}

const ProfilePopup: React.FC<PofilePopupProps> = ({ user }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const onLogout = () => {
    if (window?.confirm('Вы действительно хотите покинуть сайт ?')) {
      document.cookie = 'auth_token' + '=; Max-Age=0';
      localStorage.removeItem('token');
      location.href = '/';
    }
  }

  return (
    <>
      <Avatar className="cursor-pointer" alt={user.name} src={user.avatar} onClick={handleClick} />
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        className={styles.popover}
        classes={{
          root: styles.root,
          paper: styles.paper,
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <div className={clsx(styles.section1, 'd-flex')}>
          <Avatar alt={user.name} src={user.avatar} className={styles.avatar} />
          <div>
            <a className={styles.name}>{user.name}</a>
            {/*<div className={styles.login}>{user.login}</div>*/}
          </div>
        </div>
        <Divider classes={{ root: styles.divider }} />
        <div className={clsx(styles.section2, 'd-flex flex-column')}>
          <Link href={`/profile/${user.id}?type=articles`}><a className="mb-3">Статьи</a></Link>
          <Link href={`/profile/${user.id}?type=drafts`}><a className="mb-3">Черновики</a></Link>
          <Link href={'/profile'}><a className="mb-3">Настройки</a></Link>
        </div>
        <Divider classes={{ root: styles.divider }} />
        <a onClick={onLogout} className={clsx(styles.section2, 'd-flex flex-column')}>Выйти</a>
      </Popover>
    </>
  );
};

export default ProfilePopup;
