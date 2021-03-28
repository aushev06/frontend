import { Switch } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';

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
    backgroundColor: 'red',
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

  return (
    <div className={`d-flex justify-content-center`}>
      <span className={styles.uncheckedTitle}>{uncheckedTitle}</span>
      <CustomSwitch className={styles.checkbox} checked={checked} onChange={onChangeCheckbox} />
      <span className={styles.checkedTitle}>{checkedTitle}</span>
    </div>
  );
};
