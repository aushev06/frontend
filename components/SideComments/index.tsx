import { Avatar } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import Link from 'next/link';

import styles from './SideComments.module.scss';

interface SideCommentsProps {
  comments: CommentItem[];
}

export type CommentItem = { id: string; user: any; rating?: number; text: string; post: { id: string; title: string } };

const CommentItem: React.FC<CommentItem> = ({ id, user, text, post, rating }) => {
  return (
    <div className={clsx(styles.comment, 'pl-25 pt-25 pr-25 pb-25')}>
      <div className={clsx(styles.commentTop, 'd-flex justify-content-between')}>
        <div className="d-flex">
          <Avatar src={user.avatarUrl} />
          <div className="d-flex flex-column ml-10">
            <Link href="/profile/1">
              <a>
                <b>{user.fullname}</b>
              </a>
            </Link>
            <span className={styles.commentTime}>3 часа назад</span>
          </div>
        </div>
        {rating && (
          <div className={styles.commentRating}>
            <b>{rating}</b>
          </div>
        )}
      </div>
      <Link href={`/post/${id}#comments-${id}`}>
        <a>
          <p className={styles.commentText}>{text}</p>
        </a>
      </Link>
      <Link href={`/post/${post.id}`}>
        <a className={styles.commentPostLink}>{post.title}</a>
      </Link>
    </div>
  );
};

export const SideComments: React.FC<SideCommentsProps> = ({ comments }) => {
  return (
    <div className={styles.comments}>
      <h5>Активность</h5>
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          id={comment.id}
          user={comment.user}
          text={comment.text}
          post={comment.post}
          rating={comment.rating}
        />
      ))}
    </div>
  );
};
