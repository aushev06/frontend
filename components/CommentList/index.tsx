import React from "react";
import {PostComment} from "../PostComment";
import {Comment} from "../../interfaces";
import {useSelector} from "react-redux";
import {selectUserState} from "../../redux/user/user.selector";

type Props = {
    comments: Comment[];
    onReplyComment: (text: string, userId: number, parentId: number) => void;
    onSetLike: (commentId: number, like: unknown) => void
}

export const CommentList = ({comments, onReplyComment, onSetLike}: Props) => {
    const user = useSelector(selectUserState)['data'];
    return (
        <div>
            {comments.map(comment => {
                return (
                    <div key={comment.id}>
                        <PostComment onReplyComment={onReplyComment} comment={comment} onSetLike={onSetLike} isMyComment={comment.user.id === user?.id}/>
                        {comment.comments.map(childrenComment => <PostComment
                            onSetLike={onSetLike}
                            key={childrenComment.id} isChildren
                            comment={childrenComment}
                            onReplyComment={onReplyComment}
                            isMyComment={childrenComment.user.id === user?.id}
                        />)}
                    </div>
                )
            })}
        </div>
    )
}
