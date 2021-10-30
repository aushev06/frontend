import React, {useState} from "react";
import styles from './CommentBlock.module.scss';
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import {Comment, User} from "../../interfaces";

type Props = {
    onAddComment: (data: string, userId?: number, parentCommentId?: number) => void;
    toUser?: User;
    parentComment?: Comment;
}
export const AddCommentBlock: React.FC<Props> = ({ onAddComment, toUser, parentComment }) => {
    const [isClicked, setIsClicked] = useState(false)
    const [text, setText] = useState(toUser ? `@${toUser.name},` : '');

    const handleAddComment = () => {
        onAddComment(text, toUser?.id, parentComment?.parent_id || parentComment?.id)
        setText('')
    }

    return (
        <div className={styles.comment}>
            <Input
                onFocus={() => setIsClicked(true)}
                classes={{root: styles.fieldRoot}} multiline placeholder={'Написать комментарий...'}
                fullWidth
                minRows={!isClicked ? 1 : 5}
                onChange={e => setText(e.target.value)}
                value={text}
            />

            {isClicked && <Button onClick={handleAddComment} color={'secondary'} className={styles.addButton}>Отправить</Button>}
        </div>
    )
}
