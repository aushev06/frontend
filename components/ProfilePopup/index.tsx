import React from 'react';
import { Popover, Avatar, Divider } from '@material-ui/core';
import styles from './ProfilePopup.module.scss';
import clsx from 'clsx';

export interface PofilePopupProps {
  onClick?: () => void;
  user: any;
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

  return (
    <>
      <Avatar className="cursor-pointer" alt="Cindy Baker" src="/static/images/avatar/3.jpg" onClick={handleClick} />
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
          <Avatar alt="Adam" src="/static/images/avatar/3.jpg" className={styles.avatar} />
          <div>
            <a className={styles.name}>{user.name}</a>
            <div className={styles.login}>{user.login}</div>
          </div>
        </div>
        <Divider classes={{ root: styles.divider }} />
        <div className={clsx(styles.section2, 'd-flex flex-column')}>
          <a className="mb-3">Статьи</a>
          <a className="mb-3">Черновики</a>
          <a>Настройки</a>
        </div>
        <Divider classes={{ root: styles.divider }} />
        <a className={clsx(styles.section2, 'd-flex flex-column')}>Выйти</a>
      </Popover>
    </>
  );
};

export default ProfilePopup;
