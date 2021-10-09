import React, {useState} from 'react';
import clsx from 'clsx';

import styles from './AvailableForWork.module.scss';
import { Checkbox } from '../Checkbox';

interface AvailableForWorkProps {
  checked?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setChecked: (value: boolean) => void;
  isLoading: boolean;
}

export const AvailableForWork: React.FC<AvailableForWorkProps> = ({ checked, onChange, setChecked, isLoading }) => {
  return (
    <div className={clsx('d-flex justify-content-center')}>
      <span
        className={clsx(styles.uncheckedTitle, checked || isLoading ? styles.unchecked : styles.checked)}
        onClick={() => !isLoading && setChecked(false)}
      >
        Недоступен
      </span>
      <Checkbox checked={checked} onChange={onChange} disabled={isLoading} />
      <span
        className={clsx(styles.checkedTitle, checked && !isLoading ? styles.checked : styles.unchecked)}
        onClick={() => !isLoading && setChecked(true)}
      >
        Доступен для работы
      </span>
    </div>
  );
};
