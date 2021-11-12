import React, {useState} from 'react';
import {LeftCategoriesSide} from '../../components/LeftCategoriesSide';
import {MainLayout} from '../../layouts/MainLayout';
import {FullPost} from '../../components/FullPost';
import {getPostComments, showPost} from "../../services/api/PostApi";
import TextField from '@mui/material/TextField';
import {AddCommentBlock} from "../../components/AddCommentBlock";
import {CommentApi} from "../../services/api/CommentApi";
import {CommentList} from "../../components/CommentList";
import {setLike} from "../../services/api/LikeApi";
import {SideBlock} from "../../components/SideBlock";
import {MenuList} from "../../components/MenuList";
import {Tags} from "../../components/Tags";
import {Theme} from "../../interfaces";
import {useSelector} from "react-redux";
import {selectCategoriesState, selectThemesState} from "../../redux/directory/directory.selector";
import {useAllMQ} from "../../utils/useAllMQ";
import {echo} from "../../utils/echo";
import {useAlert} from "../../hooks/useAlert";

export const PostContext = React.createContext({});

export default function Post({post, serverSideComments}) {
    const mq = useAllMQ();
    const [selectedThemes, setSelectedThemes] = useState<Theme[]>([]);
    const [comments, setComments] = useState(serverSideComments)
    const themes = useSelector(selectThemesState);
    const categories = useSelector(selectCategoriesState);
    const {openAlert} = useAlert();

    const handleSelectTheme = async (t: Theme) => {
        setSelectedThemes(() => [...selectedThemes, t]);
    }

    const onAddComment = async (text: string, toUserId?: number, parentId?: number, commentId?: number) => {
        await CommentApi.save(post.id, text, toUserId, parentId, commentId);
    }

    const handleCommentSetLike = async (id: number, like?: 'like' | 'dislike') => {
        await setLike(id, 'comment', like)
    }

    const handleSetLike = async (postId: number, like?: 'like' | 'dislike') => {
        await setLike(postId, 'post', like)
    }

    React.useEffect(() => {
        if (typeof window !== "undefined") {
            echo().channel('laravel_database_comments_' + post?.id).listen('.new-comment', data => {
                openAlert('Появился новый комментарий!')
                setComments(!data.comment.parent_id ? [data.comment, ...comments] : comments.map(comment => {
                    if (data.comment.parent_id === comment.id) {
                        return {
                            ...comment,
                            comments: [...comment.comments, data.comment]
                        }
                    }

                    return comment;

                }))
            })
            echo().channel('laravel_database_comments_' + post?.id).listen('.updated-comment', data => {
                openAlert(`Пользователь ${data.comment.user.name} изменил свой комментарий!`)
                setComments(comments.map(comment => {
                    if (comment.id == data.comment.id) {
                        return data.comment
                    }

                    return comment;
                }))
            })
        }

        return () => {
            echo().leave('laravel_database_comments_' + post?.id)
        }
    })

    return (
        <main>
            <MainLayout>
                <div className="wrapper-center">

                    {!mq.isXS && (
                        <div className={'left-side-no-margin'}>
                            <SideBlock>
                                <MenuList
                                    items={[
                                        {
                                            name: 'Популярное',
                                            url: '/popular',
                                            icon: '/fire.svg',
                                            isActive: true,
                                            hasMore: true
                                        },
                                        {name: 'Новое', url: '/new', icon: '/news.svg'},
                                    ]}
                                />
                            </SideBlock>
                            <SideBlock name="Категории">
                                <MenuList
                                    items={categories.map(c => ({
                                        name: c.name,
                                        url: `/tags/${c.slug}`,
                                        icon: `/${c.slug}.png`
                                    }))}
                                />
                            </SideBlock>
                            <SideBlock name="Темы">
                                <Tags
                                    items={themes}
                                    handleSelect={handleSelectTheme}
                                    selectedItems={selectedThemes}
                                />
                            </SideBlock>
                        </div>
                    )}

                    <div className="content">
                        <FullPost post={post} onSetLike={handleSetLike}/>

                        {post.status === 'active' && (
                            <div className={'comments'}>
                                <AddCommentBlock onAddComment={onAddComment}/>

                                <div style={{marginTop: 15}}>
                                    <CommentList
                                        onSetLike={handleCommentSetLike}
                                        comments={comments} onReplyComment={onAddComment}
                                    />
                                </div>

                            </div>
                        )}

                    </div>
                </div>
            </MainLayout>
        </main>
    );
}

export async function getServerSideProps(ctx) {
    const response = await showPost(ctx.query.slug, ctx.req.cookies?.auth_token);
    const responseComments = await getPostComments(response.data.id, ctx.req.cookies.auth_token);
    return {
        props: {
            post: response.data,
            serverSideComments: responseComments
        },
    }
}

