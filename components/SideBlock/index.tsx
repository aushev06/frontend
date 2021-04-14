import React from 'react';
import styles from './SideBlock.module.scss';

type SideBlockProps = { name?: string };

export const SideBlock: React.FC<SideBlockProps> = ({ name, children }) => {
  return (
    <div className={styles.block}>
      {name && <h4>{name}</h4>}
      {children}
    </div>
  );
};
