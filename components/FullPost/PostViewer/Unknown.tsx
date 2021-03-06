import React from 'react';
import styles from '../Post.module.scss';

interface UnknownBlockProps {
  type: string;
}

export const Unknown: React.FC<UnknownBlockProps> = ({ type }) => {
  return (
    <div className={styles.unknown}>
      <h2 className={styles.unknownTitle}>Блок "{type[0].toUpperCase() + type.slice(1)}" не найден</h2>
      <div className={styles.unknownDescription}>
        Реализуйте новый блок в папке PostViewer и добавьте его в switch-case в этой же папке
      </div>
    </div>
  );
};
