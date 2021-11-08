import {Badge, IconButton, List, Popover, Typography} from '@material-ui/core';
import format from 'date-fns/format';
import React from 'react';

import styles from './NotificationDropdown.module.scss';
import {Notification, User} from "../../interfaces";
import {useSelector} from "react-redux";
import {selectUserNotifications} from "../../redux/user/user.selector";

export const NotificationDropdown: React.FC = (): React.ReactElement => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const open = Boolean(anchorEl);
    const notifications = useSelector(selectUserNotifications);


    const toggleOpenPopup = (event: React.MouseEvent<HTMLButtonElement>): void => {
        console.log(1230);
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const handleClose = (): void => {
        setAnchorEl(null);

        // (async (): Promise<void> => {
        //   await Axios.put(`${Endpoints.NOTIFICATIONS}/read`);
        // })();
        //
        // const newItemRead = newItem.map((item) => {
        //   if (item.readAt === null) {
        //     return { ...item, readAt: new Date() };
        //   }
        //   return item;
        // });

        // setNewItem(newItemRead);
    };

    return (
        <>
            <div className={styles.notification}>
                <IconButton onClick={toggleOpenPopup}>
                    <img className="ml-10 cursor-pointer" src="/notifications.svg" alt="Уведомления"/>
                </IconButton>

            </div>
            <Popover
                elevation={0}
                classes={{
                    paper: styles.notificationPopup,
                }}
                onClose={handleClose}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                open={open}
            >
                <div className="pl-25 pr-25 pb-25">
                    <Typography className={styles.title} variant="overline" display="block">
                        <b className="opacity-6">Уведомления</b>
                    </Typography>

                    <div className={styles.notificationList}>
                        <List>
                            {notifications.length ? (
                                notifications.map((notification) => {
                                    return (
                                        <li key={notification.id} className={'newItem'}>
                                            <div className={styles.listContent}>
                                                <h4>test</h4>
                                                <p></p>
                                                <span>test</span>
                                            </div>
                                        </li>
                                    );
                                })
                            ) : (
                                <div className="mb-40 mt-30">
                                    NOT FOUND
                                </div>
                            )}
                        </List>
                    </div>
                </div>
            </Popover>
        </>
    );
};
