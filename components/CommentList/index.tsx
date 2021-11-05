import React from "react";
import {PostComment} from "../PostComment";
import {Comment} from "../../interfaces";

type Props = {
    comments: Comment[];
    onReplyComment: (text: string, userId: number, parentId: number) => void;
    onSetLike: (commentId: number, like: unknown) => void
}

export const CommentList = ({comments, onReplyComment, onSetLike}: Props) => {
    return (
        <div>
            {comments.map(comment => {
                return (
                    <div key={comment.id}>
                        <PostComment onReplyComment={onReplyComment} comment={comment} onSetLike={onSetLike}/>
                        {comment.comments.map(childrenComment => <PostComment
                            onSetLike={onSetLike}
                            key={childrenComment.id} isChildren
                            comment={childrenComment}
                            onReplyComment={onReplyComment}
                        />)}
                    </div>
                )
            })}
        </div>
    )
}
