import { Switch } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import clsx from 'clsx';

import styles from './Checkbox.module.scss';

const CustomSwitch = withStyles((theme) => ({
  root: {
    width: 39,
    height: 20,
    padding: 0,
    display: 'flex',
  },
  switchBase: {
    padding: 3,
    color: '#FFFFFF',
    '&$checked': {
      transform: 'translateX(19px)',
      color: '#FFFFFF',
      '& + $track': {
        opacity: 1,
        backgroundColor: '#04C800',
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 14,
    height: 14,
    boxShadow: 'none',
  },
  track: {
    borderRadius: 9,
    opacity: 1,
    backgroundColor: '#5A5A68',
  },
  checked: {},
}))(Switch);

interface CheckboxProps {
  checkedTitle?: string;
  uncheckedTitle?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ checkedTitle, uncheckedTitle }) => {
  const [checked, setChecked] = useState(true);

  const onChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  console.log(styles);

  return (
    <div className={clsx(styles.checkbox, 'd-flex justify-content-center')}>
      <span
        className={clsx(styles.uncheckedTitle, !checked ? styles.checked : styles.unchecked)}
        onClick={() => setChecked(false)}
      >
        {uncheckedTitle}
      </span>
      <Switch
        className={styles.root}
        classes={{
          root: styles.root,
          switchBase: styles.switchBase,
          thumb: styles.thumb,
          track: styles.track,
          checked: styles.checked,
        }}
        checked={checked}
        onChange={onChangeCheckbox}
      />
      <span
        className={clsx(styles.checkedTitle, checked ? styles.checked : styles.unchecked)}
        onClick={() => setChecked(true)}
      >
        {checkedTitle}
      </span>
    </div>
  );
};
