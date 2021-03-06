import React from 'react';
import styles from './PastTimeLabel.module.scss';
import { formatDistanceToNow } from 'date-fns';
import { ru } from 'date-fns/locale';
import clsx from 'clsx';

interface PastTimeLabelProps {
  time: number;
  leftSidePoint?: boolean;
}

export const PastTimeLabel: React.FC<PastTimeLabelProps> = ({ time, leftSidePoint }) => {
  return (
    <span className={clsx(styles.time, {[styles.timeWithLeftSidePoint]: leftSidePoint})}>
      {formatDistanceToNow(time, { locale: ru, addSuffix: true })}
    </span>
  );
};
