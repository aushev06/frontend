import {Avatar} from "@material-ui/core";
import styles from "./NotificationDropdown.module.scss";
import React from "react";
import {Comment, Likeable, Notification, PostData} from "../../interfaces";
import Link from 'next/link';

type Props = {
    item: Notification<Likeable | PostData | Comment>,
}

const AddCommentItem = ({notification}: { notification: Notification<Comment> }) => {
    return (
        <div className={styles.item}>
            <Avatar alt={'User'} src={notification.data?.user?.avatar} className={styles.avatar}/>
            <div className={styles.listContent}>
                <b>{notification.data.user.name}</b> написал комментарий к записи&nbsp;
                <Link href={'#'}>
                    <a>
                        “{notification.data.post.title}”
                    </a>
                </Link>
            </div>
        </div>
    )
}

const ReplyToCommentItem = ({notification}: { notification: Notification<Comment> }) => {
    return (
        <div className={styles.item}>
            <Avatar alt={'User'} src={notification.data?.user?.avatar} className={styles.avatar}/>
            <div className={styles.listContent}>
                <b>{notification.data.user.name}</b> ответил на Ваш комментарий к записи&nbsp;
                <Link href={'#'}>
                    <a>
                        “{notification.data.post.title}”
                    </a>
                </Link>
            </div>
        </div>
    )
}

const SetLikeOrDislikeItem = ({notification}: { notification: Notification<Likeable> }) => {
    const isLike = notification.data.type === 'like'

    if (notification.data.likeable_type.includes('Comment')) {
        return <div className={styles.item}>
            <div className={styles.likeBlock}>
                <Avatar alt={'User'} src={notification.data?.user?.avatar} className={styles.avatar}/>
                <img src={isLike ? '/like.svg' : '/dislike.svg'} />
            </div>
            <div className={styles.listContent}>
                <b>{notification.data.user.name}</b> поставил {isLike ? 'лайк' : 'дизлайк'} на коментарий&nbsp;
                <Link href={'#'}>
                    <a>
                        “{notification.data.comment.text}”
                    </a>
                </Link>
            </div>
        </div>
    }

    return (
        <div className={styles.item}>
            <Avatar alt={'User'} src={notification.data?.user?.avatar} className={styles.avatar}/>
            <div className={styles.listContent}>
                <b>{notification.data.user.name}</b> поставил {isLike ? 'лайк' : 'дизлайк'} на запись&nbsp;
                <Link href={'#'}>
                    <a>
                        “{notification.data.post.title}”
                    </a>
                </Link>
            </div>
        </div>

    )
}

export default function Item({item}: Props) {

    if (item.type.includes('AddCommentNotification')) {
        return <AddCommentItem notification={item as Notification<Comment>}/>
    }

    if (item.type.includes('ReplyToCommentNotification')) {
        return <ReplyToCommentItem notification={item as Notification<Comment>}/>
    }

    if (item.type.includes('SetLikeOrDislikeNotification')) {
        return <SetLikeOrDislikeItem notification={item as Notification<Likeable>}/>
    }

    return null;

}
