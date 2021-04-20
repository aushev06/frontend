import React, { JSXElementConstructor } from 'react';
import styles from './RecommendationsContainer.module.scss';

export interface RecommendationsListProps {
  title?: string;
  children: React.ReactElement[] | React.ReactElement<any, string | JSXElementConstructor<any>>;
}

export const RecommendationsContainer: React.FC<RecommendationsListProps> = ({
  title = 'Ingternet рекомендует',
  children
}) => {
  if (!children) return null;

  return (
    <div className={styles.block}>
      <h4>
        {title}
      </h4>
      {children}
    </div>
  );
};
