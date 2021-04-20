import clsx from 'clsx';
import React from 'react';
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
  const [imageIsLoaded, setImageIsLoaded] = React.useState(false);
  const imageRef = React.useRef(null);

  React.useEffect(() => {
    if (imageRef.current.complete) {
      setImageIsLoaded(true);
    }
  }, []);

  return (
    <div className={styles.image}>
      <img
        ref={imageRef}
        className={clsx(styles.image_picture, imageIsLoaded ? styles.image_picture_visible : '')}
        src={block.data.file.url}
        alt="Картинка"
      />
      <div className={clsx(styles.image_preloader, !imageIsLoaded ? styles.image_preloader_visible : '')}></div>
    </div>
  );
};
