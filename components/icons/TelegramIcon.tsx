import clsx from 'clsx';
import React from 'react';

interface TelegramIconProps {
  className?: string;
  hoverClassName?: string;
}

export const TelegramIcon: React.FC<TelegramIconProps> = ({ className, hoverClassName }) => {
  const [classes, setClasses] = React.useState(className);

  const onHover = () => {
    console.log('hover', hoverClassName);
    setClasses(clsx(className, hoverClassName));
  };

  const onLeave = () => {
    console.log('addfdsaf');
    setClasses(className);
  };

  return (
    <svg
      className={classes}
      onMouseOver={onHover}
      onMouseLeave={onLeave}
      width="20"
      height="17"
      viewBox="0 0 20 17"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.353259 8.15144L4.96167 9.83061L6.7454 15.4309C6.85953 15.7896 7.3088 15.9222 7.607 15.6842L10.1758 13.6397C10.4451 13.4255 10.8286 13.4149 11.11 13.6143L15.7432 16.8982C16.0622 17.1246 16.5141 16.9539 16.5941 16.5776L19.9882 0.639092C20.0756 0.22802 19.6618 -0.114909 19.2609 0.0364773L0.347859 7.15936C-0.118874 7.33509 -0.114808 7.9802 0.353259 8.15144ZM6.45793 8.93674L15.4645 3.52128C15.6263 3.42424 15.7929 3.63791 15.6539 3.76379L8.22087 10.5091C7.9596 10.7465 7.79107 11.0643 7.74334 11.4092L7.49014 13.241C7.4566 13.4856 7.10467 13.5099 7.03553 13.2732L6.06173 9.93273C5.9502 9.55173 6.11273 9.14475 6.45793 8.93674Z"
      />
    </svg>
  );
};
