import React, {useState} from 'react';
import {MainLayout} from "../../layouts/MainLayout";
import UserCard from "../../components/UserCard";
import {useRouter} from "next/router";
import {getPostComments, getPosts, showPost} from "../../services/api/PostApi";
import {MiniPost} from "../../components/MiniPost";
import {useSelector} from "react-redux";
import {selectUserState} from "../../redux/user/user.selector";
import {setLike} from "../../services/api/LikeApi";
import {Pagination, PostData, User} from "../../interfaces";
import {UserApi} from "../../services/api/UserApi";
import {CommentApi} from "../../services/api/CommentApi";
import {LoadMore} from "../../components/LoadMore";


export default function Profile(props) {
    const [user, setUser] = useState<User>(props.user);
    const authUser = useSelector(selectUserState)['data'];
    const router = useRouter()
    const {id, type} = router.query
    const types = {
        drafts: 'draft',
        articles: 'active'
    }

    const [posts, setPosts] = React.useState<Partial<Pagination<PostData>>>(props.posts)
    const [isLoading, setIsLoading] = React.useState(false);
    const [skipUseEffect, setSkipUseEffect] = React.useState(true);

    const [page, setPage] = useState(props.posts.meta.current_page)
    const [maxPage, setMaxPage] = useState(props.posts.meta.last_page)

    React.useEffect(() => {
        setSkipUseEffect(false);

        if (!skipUseEffect) {
            setIsLoading(true)
            const effect = async () => {
                const responsePosts = await getPosts({user_ids: id, status: types[type as string], page});
                setPosts(responsePosts)
                setIsLoading(false);
            }

            effect();
        }

    }, [type, page])

    const onTypeChange = async (t: string) => {
        const posts = await getPosts({status: types[t]});
        setPosts(posts)
    }

    const handleSetLike = async (postId: number, like?: 'like' | 'dislike') => {
        await setLike(postId, 'post', like);
    }

    if (isLoading || posts === {}) {
        return null
    }

    return (
        <MainLayout>
            <UserCard nickname={user?.name}
                      profession={user?.position}
                      status={user?.description}
                      sinceDate={user?.created_at}
                      commentsCount={user?.comments_count}
                      readyForWork={user?.ready_for_work}
                      articleType={type as string || 'articles' as string}
                      onChangeType={onTypeChange}
                      isAuthUser={authUser?.id === user.id}
                      recognized={!!user.recognized}
                      avatar={user.avatar}
                      postCount={posts?.meta?.total}

            />


            <div className={'content mt-15 m-15'}>
                {posts?.data?.map(post => {
                    return <MiniPost
                        key={post.id}
                        postData={{
                            commentsCount: post.comments_count,
                            description: post.description,
                            dislikesCount: post.dislikes_count,
                            likesCount: post.likes_count,
                            title: post.title,
                            viewsCount: post.views,
                            slug: post.slug,
                            user: {
                                avatarUrl: post.user.avatar,
                                id: post.user.id,
                                name: post.user.name,
                            },
                            imageUrl: post.img,
                            id: post.id,
                            tags: [],
                            time: new Date(post.updated_at),
                            vote: post?.liked_type,
                        }}
                        onSetLike={handleSetLike}
                    />;
                })}

                {!isLoading && page !== maxPage && (
                    <LoadMore onClick={() => setPage(page + 1)}/>
                )}

            </div>

        </MainLayout>
    )
}


export async function getServerSideProps(ctx) {
    const posts = await getPosts({user_ids: ctx.query.id})
    const comments = await CommentApi.get({user_ids: ctx.query.id})
    return {
        props: {
            user: await UserApi.show(ctx.query.id),
            posts,
            comments,
        },
    }
}

