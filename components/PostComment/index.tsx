import styles from "./PostCommentList.module.scss";
import {UserViewOnContent} from "../UserViewOnContent";
import {LikeBlock, LikeBlockResult} from "../LikeBlock";
import React, {useState} from "react";
import {Comment} from "../../interfaces";
import {AddCommentBlock} from "../AddCommentBlock";
import {Dropdown} from "../Dropdown";
import MuiMenuItem from '@material-ui/core/MenuItem';

type Props = {
    comment: Comment;
    onReplyComment: (text: string, userId: number, parentId: number, commentId?: number) => void;
    isChildren?: boolean;
    userCanChangeComment?: boolean;
    onSetLike: (postId: number, like: unknown) => void
}

export function PostComment({comment, onReplyComment, isChildren, onSetLike}: Props) {
    const [showReply, setShowReply] = useState(false);
    const [showChange, setShowChange] = useState(false);
    const [likesAndDislikes, setLikesAndDislikes] = React.useState<LikeBlockResult>({
        likes: comment.likes_count,
        dislikes: comment.dislikes_count,
        vote: comment?.liked_type,
    });


    const handleCommentSetLike = (like: LikeBlockResult) => {
        setLikesAndDislikes(like);
        onSetLike(comment.id, like.vote)
    }

    const onCloseInput = () => {
        setShowChange(false);
    }

    const onSaveComment = async (text: string, userId: number, parentId?: number, commentId?: number) => {
        await onReplyComment(text, userId, parentId, commentId)
        onCloseInput()
    }

    return <div className={styles.comment} style={{marginLeft: isChildren ? 10 : 0}}>
        <div className={styles.commentFlex}>
            <div className={styles.user}>
                <UserViewOnContent

                    time={new Date(comment.created_at).getTime()}
                    user={{
                        name: comment.user.name,
                        id: comment.user.id,
                        avatarUrl: comment.user.avatar
                    }}/>
            </div>

            <div className={styles.actions}>


                <div className="ml-10">
                    <Dropdown
                        overlay={
                            <a><img src={"/dots.svg"}/></a>
                        }
                    >
                        <MuiMenuItem disabled={false} onClick={() => setShowChange(true)}>
                            Изменить
                        </MuiMenuItem>

                        <MuiMenuItem disabled={false} onClick={() => {
                        }}>
                            Удалить
                        </MuiMenuItem>

                    </Dropdown>
                </div>

            </div>

        </div>

        <div className={styles.text}>
            {!showChange ? comment.text : <AddCommentBlock
                comment={comment}
                onAddComment={onSaveComment}
                toUser={comment.user}
                parentComment={comment}

            />}
        </div>


        <div className={styles.commentFlex}>
            <span className={styles.reply} onClick={() => setShowReply(!showReply)}>Ответить</span>

            <div>
                <LikeBlock
                    vote={likesAndDislikes.vote}
                    likes={likesAndDislikes.likes}
                    dislikes={likesAndDislikes.dislikes}
                    mode="full"
                    onChange={handleCommentSetLike}
                />
            </div>

        </div>

        {showReply && <AddCommentBlock onAddComment={onSaveComment} toUser={comment.user} parentComment={comment}/>}

    </div>;
}
