import React, { ReactNode } from 'react';
import { Button as ButtonBase } from '@material-ui/core';
import styles from './Button.module.scss';

interface ButtonProps {
  children: ReactNode;
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'inherit' | 'primary' | 'secondary' | 'default';
  fullWidth?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit';
}

export const Button: React.FC<ButtonProps> = (
    {
        className,
        children,
        variant,
        color,
        startIcon,
        endIcon,
        onClick,
        fullWidth,
        disabled,
        type
    }
) => {
    return (
        <div className={styles.button}>
            <ButtonBase
                disabled={disabled}
                className={className}
                variant={variant}
                color={color}
                onClick={onClick}
                classes={{
                    root: styles.root,
                    contained: styles.contained,
                    outlined: styles.outlined,
                    containedPrimary: styles.containedPrimary,
                    containedSecondary: styles.containedSecondary,
                    outlinedPrimary: styles.outlinedPrimary,
                    outlinedSecondary: styles.outlinedSecondary,
                    textPrimary: styles.textPrimary,
                    textSecondary: styles.textSecondary,
                }}
                startIcon={startIcon}
                endIcon={endIcon}
                fullWidth={fullWidth || false}
                type={type}
            >
                {children}
            </ButtonBase>
        </div>
    );
};
