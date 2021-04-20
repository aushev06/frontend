import React from 'react';
import { Button } from '../Button';

import styles from './LoadMore.module.scss';

type LoadMoreProps = {}

export const LoadMore: React.FC<LoadMoreProps> = () => {
  return (
    <div className={styles.loadMore}>
      <Button className={styles.button} variant="text">
        Показать еще
      </Button>
    </div>
  );
};
