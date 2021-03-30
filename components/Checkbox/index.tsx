import React from 'react';
import clsx from 'clsx';
import { Switch } from '@material-ui/core';
import styles from './Checkbox.module.scss';

interface CheckboxProps {
  checkedTitle?: string;
  uncheckedTitle?: string;
  checked?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange }) => {
  return (
    <div className={clsx(styles.checkbox, 'd-flex justify-content-center')}>
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
        onChange={onChange}
      />
    </div>
  );
};
