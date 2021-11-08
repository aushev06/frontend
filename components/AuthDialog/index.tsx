import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';
import Link from 'next/link';

import styles from './AuthDialog.module.scss';
import {DialogContentText, Typography} from "@material-ui/core";
import {API_URL} from "../../core/axios";

interface ModalProps {
    open?: boolean;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
    onClose: () => void;
    className?: string;
}

export const AuthDialog: React.FC<ModalProps> = (
    {
        children,
        open = false,
        size = 'xs',
        onClose,
        className,
    }
): React.ReactElement => {
    return (
        <Dialog
            maxWidth={'xs'}
            open={open}
            onClose={onClose}
            fullWidth
            PaperProps={{
                className: styles.modal
            }}
        >

            <Button onClick={onClose}>
                <CloseIcon style={{fontSize: 28}}/>
            </Button>

            <DialogContent>
                <DialogContentText>
                    <div className={styles.content}>

                        <Typography className={styles.title}> Добро пожаловать </Typography>
                        <Typography className={styles.subTitle}> Рады видеть вас снова! </Typography>

                        <Link href={`${API_URL}/social/vk`}>
                            <a>
                                <Button fullWidth={true} variant={'outlined'}>
                                    <img src="/vk.png" alt=""/>
                                    Войти через VK
                                </Button>
                            </a>
                        </Link>
                        <Link href={`${API_URL}/social/google`}>
                            <a>
                                <Button fullWidth={true} variant={'outlined'}>
                                    <img src="/google.png" alt=""/>
                                    Войти через Google
                                </Button>
                            </a>
                        </Link>
                    </div>
                </DialogContentText>
            </DialogContent>
        </Dialog>
    );
};
