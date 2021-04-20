import clsx from 'clsx';
import React from 'react';

interface TwitterIconProps {
  className?: string;
  hoverClassName?: string;
}

export const TwitterIcon: React.FC<TwitterIconProps> = ({ className, hoverClassName }) => {
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
      height="16"
      viewBox="0 0 20 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20 1.89415C19.2563 2.21538 18.4637 2.42831 17.6375 2.53169C18.4875 2.032 19.1363 1.24677 19.4412 0.300308C18.6488 0.765538 17.7738 1.09415 16.8412 1.27754C16.0887 0.488616 15.0162 0 13.8462 0C11.5763 0 9.74875 1.81415 9.74875 4.03815C9.74875 4.35815 9.77625 4.66585 9.84375 4.95877C6.435 4.79508 3.41875 3.18646 1.3925 0.736C1.03875 1.34031 0.83125 2.032 0.83125 2.77662C0.83125 4.17477 1.5625 5.41415 2.6525 6.13169C1.99375 6.11938 1.3475 5.93108 0.8 5.63446C0.8 5.64677 0.8 5.66277 0.8 5.67877C0.8 7.64062 2.22125 9.27015 4.085 9.64554C3.75125 9.73538 3.3875 9.77846 3.01 9.77846C2.7475 9.77846 2.4825 9.76369 2.23375 9.70954C2.765 11.3083 4.2725 12.4837 6.065 12.5218C4.67 13.5963 2.89875 14.2437 0.98125 14.2437C0.645 14.2437 0.3225 14.2289 0 14.1883C1.81625 15.3415 3.96875 16 6.29 16C13.835 16 17.96 9.84615 17.96 4.512C17.96 4.33354 17.9538 4.16123 17.945 3.99015C18.7588 3.42154 19.4425 2.71138 20 1.89415Z" />
    </svg>
  );
};
