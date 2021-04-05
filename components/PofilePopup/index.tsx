import React from 'react';
import Popover from '@material-ui/core/Popover';
import Avatar from '@material-ui/core/Avatar';
import styles from './PofilePopup.module.scss';

export interface PofilePopupProps {
  onClick?: () => void;
  user: any;
}

const PofilePopup: React.FC<PofilePopupProps> = ({ user }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
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
        asd
        <div>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <div>
            <div>{user.name}</div>
            <div>{user.login}</div>
          </div>
        </div>
      </Popover>
    </div>
  );
};

export default PofilePopup;
