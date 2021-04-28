import clsx from 'clsx';
import React from 'react';
import Image from 'next/image';
import styles from '../Post.module.scss';

export interface PostImageBlock {
  type: 'image';
  data: {
    file: {
      url: string;
    };
    caption: string;
    withBorder: boolean;
    stretched: boolean;
    withBackground: boolean;
  };
}

interface ImageBlockProps {
  block: PostImageBlock;
}

export const ImageBlock: React.FC<ImageBlockProps> = ({ block }) => {
  return (
    <div className={styles.image}>
      <Image
        layout="fill"
        className={clsx(styles.imagePicture)}
        src={block.data.file.url}
        objectFit="cover"
        alt={block.data.caption}
      />
    </div>
  );
};
