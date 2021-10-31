import React, {useState} from 'react';
import {MainLayout} from "../../layouts/MainLayout";
import UserCard from "../../components/UserCard";
import {useRouter} from "next/router";
import {getPostComments, getPosts, showPost} from "../../services/api/PostApi";
import {MiniPost} from "../../components/MiniPost";
import {useSelector} from "react-redux";
import {selectUserState} from "../../redux/user/user.selector";
import {setLike} from "../../services/api/LikeApi";
import {PostData, User} from "../../interfaces";
import {UserApi} from "../../services/api/UserApi";


export default function Profile (props) {
    const [user, setUser] = useState<User>(props.user);
    const router = useRouter()
    const { id, type } = router.query
    const types = {
        drafts: 'draft',
        articles: 'active'
    }

    const [posts, setPosts] = React.useState<PostData[]>([]);


    React.useEffect(() => {
        const effect = async () => {
            setPosts(await getPosts({user_ids: id, status: types[type as string]}))
        }

        effect();

    }, [type])

    const onTypeChange = async (t: string) => {
        setPosts(await getPosts({status: types[t]}))
    }

    const handleSetLike = async (postId: number, like?: 'like' | 'dislike') => {
        await setLike(postId, 'post', like);
    }

    return(
        <MainLayout>
            <UserCard nickname={user?.name}
                      profession={user?.position}
                      status={user?.description}
                      sinceDate={user?.created_at}
                      commentsCount={user?.comments_count}
                      readyForWork={user?.ready_for_work}
                      articleType={type as string || 'articles' as string}
                      onChangeType={onTypeChange}
                      isAuthUser={!!user?.id}
                      recognized={!!user.recognized}
                      avatar={user.avatar}

            />


           <div className={'content mt-15 m-15'}>
               {posts.map(post => {
                   return  <MiniPost
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

        </MainLayout>
    )
}


export async function getServerSideProps(ctx) {

    return {
        props: {
            user: await UserApi.show(ctx.query.id)
        },
    }
}

