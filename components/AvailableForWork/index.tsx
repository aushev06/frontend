import React from 'react';
import clsx from 'clsx';

import styles from './AvailableForWork.module.scss';
import { Checkbox } from '../Checkbox';

interface AvailableForWorkProps {
  checked?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setChecked: (value: boolean) => void;
}

export const AvailableForWork: React.FC<AvailableForWorkProps> = ({ checked, onChange, setChecked }) => {
  return (
    <div className={clsx('d-flex justify-content-center')}>
      <span
        className={clsx(styles.uncheckedTitle, checked ? styles.unchecked : styles.checked)}
        onClick={() => setChecked(false)}
      >
        Недоступен
      </span>
      <Checkbox checked={checked} onChange={onChange} />
      <span
        className={clsx(styles.checkedTitle, checked ? styles.checked : styles.unchecked)}
        onClick={() => setChecked(true)}
      >
        Доступен для работы
      </span>
    </div>
  );
};
