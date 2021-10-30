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

export const PostContext = React.createContext({});

export default function Post({post, comments}) {
    const [selectedThemes, setSelectedThemes] = useState<Theme[]>([]);
    const themes = useSelector(selectThemesState);
    const categories = useSelector(selectCategoriesState);
    const handleSelectTheme = async (t: Theme) => {
        setSelectedThemes(() => [...selectedThemes, t]);
    }

    const onAddComment = async (text: string, toUserId?: number, parentId?: number) => {
        await CommentApi.create(post.id, text, toUserId, parentId);
    }

    const handleCommentSetLike = async (id: number, like?: 'like' | 'dislike') => {
        await setLike(id, 'comment', like)
    }

    const handleSetLike = async (postId: number, like?: 'like' | 'dislike') => {
        await setLike(postId, 'post', like)
    }

    return (
        <main>
            <MainLayout>
                <div className="wrapper-center">

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

                    <div className="content">
                        <FullPost post={post} onSetLike={handleSetLike}/>

                        {post.status === 'active' && (
                            <div className={'comments'}>
                                <AddCommentBlock onAddComment={onAddComment}/>

                                <div style={{marginTop: 15}}>
                                    <CommentList
                                        onSetLike={handleCommentSetLike}
                                        comments={comments} onReplyComment={onAddComment}/>
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
            comments: responseComments
        },
    }
}

