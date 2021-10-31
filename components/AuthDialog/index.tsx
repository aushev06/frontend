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
                <CloseIcon style={{ fontSize: 28 }} />
            </Button>

            <DialogContent>
                <DialogContentText>
                    <div className={styles.content}>

                        <Typography className={styles.title}> Добро пожаловать </Typography>
                        <Typography className={styles.subTitle}> Рады видеть вас снова! </Typography>

                        <Link href={`${API_URL}/social/vk`}>
                            <a>
                                <Button fullWidth={true} variant={'outlined'}>
                                    <svg fill="none" viewBox="0 0 24 24" id="v_vkontakte">
                                        <path
                                            d="M2 11.583c0-4.517 0-6.776 1.403-8.18C4.807 2 7.066 2 11.583 2h.834c4.517 0 6.776 0 8.18 1.403C22 4.807 22 7.066 22 11.583v.834c0 4.517 0 6.776-1.404 8.18C19.194 22 16.934 22 12.416 22h-.833c-4.517 0-6.776 0-8.18-1.404C2 19.194 2 16.934 2 12.416v-.833z"
                                            fill="#2787F5"></path>
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M7.417 8.25H5.958c-.417 0-.5.196-.5.412 0 .387.495 2.302 2.303 4.836 1.205 1.73 2.903 2.669 4.449 2.669.927 0 1.042-.209 1.042-.568v-1.307c0-.417.087-.5.381-.5.216 0 .587.108 1.453.942.989.99 1.152 1.433 1.708 1.433h1.459c.416 0 .625-.209.505-.62-.132-.41-.604-1.004-1.23-1.709-.34-.401-.85-.834-1.005-1.05-.216-.279-.155-.402 0-.65 0 0 1.777-2.502 1.962-3.352.093-.309 0-.536-.44-.536h-1.46c-.37 0-.541.196-.634.412 0 0-.742 1.808-1.793 2.982-.34.34-.494.448-.68.448-.092 0-.226-.108-.226-.417V8.786c0-.37-.108-.536-.417-.536h-2.292c-.232 0-.372.172-.372.335 0 .352.526.433.58 1.422v2.147c0 .471-.085.556-.27.556-.495 0-1.698-1.815-2.411-3.893-.14-.404-.28-.567-.653-.567z"
                                              fill="#fff"></path>
                                    </svg>
                                    Войти через VK
                                </Button>
                            </a>
                        </Link>
                    </div>
                </DialogContentText>
            </DialogContent>
        </Dialog>
    );
};
