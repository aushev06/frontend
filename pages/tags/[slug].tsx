import React, { useEffect, useState } from 'react';
import {useAllMQ} from "../../utils/useAllMQ";
import {setLike} from "../../services/api/LikeApi";
import {MainLayout} from "../../layouts/MainLayout";
import {MiniPost} from "../../components/MiniPost";
import {PostData} from "../../interfaces";
import {getPosts, showPost} from "../../services/api/PostApi";
import {getCategories} from "../../services/api/CategoryApi";


export default function Home(props) {
    const [posts, setPosts] = useState<PostData[]>(props.posts);
    const [isLoading, setIsLoading] = useState(false);
    const mq = useAllMQ()

    const handleSetLike = async (postId: number, like?: 'like' | 'dislike') => {
        await setLike(postId, 'post', like)
    }

    return (
        <main>
            <MainLayout>
                <div className="wrapper">

                    {!mq.isXS && (
                        <div className="left-side">

                        </div>
                    )}


                    <div className="content">

                        {isLoading && 'Загрука...'}

                        {!isLoading && posts.map((post, key) => {
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

                    </div>
                    {!mq.isXS && (
                        <div className="right-side">

                        </div>
                    )}
                </div>
            </MainLayout>
        </main>
    );
}

export async function getServerSideProps(ctx) {
    const posts =  await getPosts({categories: ctx.query?.slug}, ctx.req.cookies?.auth_token);

    return {
        props: {
            posts
        },
    }
}
