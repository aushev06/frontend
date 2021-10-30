import React from 'react';
import { Button } from '../Button';

import styles from './LoadMore.module.scss';

type LoadMoreProps = {
    onClick?: () => void
}

export const LoadMore: React.FC<LoadMoreProps> = ({ onClick }) => {
  return (
    <div className={styles.loadMore}>
      <Button onClick={onClick} className={styles.button} variant="text">
        Показать еще
      </Button>
    </div>
  );
};
