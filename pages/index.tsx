import React, { useEffect, useState } from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { CommentItem, SideComments } from '../components/SideComments';
import { MiniPost, MiniPostData } from '../components/MiniPost';
import { SideBlock } from '../components/SideBlock';
import { Tags } from '../components/Tags';
import { MenuList } from '../components/MenuList';
import { RecommendationsContainer, RecommendationItem, RecommendationItemData } from '../components/Recommendations';
import {getCookie, UserApi} from '../services/api/UserApi';
import {getPosts, getThemes} from '../services/api/PostApi';
import {PostData, Comment, Theme} from '../interfaces';
import { CommentApi } from '../services/api/CommentApi';
import {useDispatch, useSelector} from "react-redux";
import {setUser} from "../redux/user/slice";
import {selectUserState} from "../redux/user/user.selector";
import {setLike} from "../services/api/LikeApi";
import {AuthDialog} from "../components/AuthDialog";
import {selectCategoriesState, selectThemesState} from "../redux/directory/directory.selector";
import {useAllMQ} from "../utils/useAllMQ";

const miniPostTemplate: MiniPostData = {
  id: 0,
  title: 'В Магасе прошел Meetup по программированию и безопасности',
  user: {
    id: 0,
    name: 'Dr. Who',
    avatarUrl: 'https://clck.ru/UDyci',
  },
  slug: 'mini-post',
  tags: ['разработка'],
  time: new Date(),
  description:
    'Никто не ожидал, что на GDG Magas 2019 придет столько людей. Зал ГБУ Инг НИИ был переполнен слушателями, среди которых было много гостей из Чечни и Дагестана.',
  imageUrl: 'https://clck.ru/U7rDJ',
  commentsCount: 21,
  viewsCount: 234,
  likesCount: 52,
  dislikesCount: 12,
};

const arrRecommendations: Array<RecommendationItemData> = [
  {
    id: 0,
    title: 'В Магасе прошел Meetup по программированию и безопасности GDG Magas 2019',
    user: {
      id: 0,
      name: 'Dr. Who',
      avatarUrl: 'https://clck.ru/UDyci',
    },
    slug: 'mini-post',
    time: 1618828849922,
    imageUrl: 'https://clck.ru/U7rDJ',
    commentsCount: 21,
    viewsCount: 234,
  },
  {
    id: 1,
    title: 'Что бы поесть на ночь?',
    user: {
      id: 0,
      name: 'Dr. Who',
      avatarUrl: 'https://clck.ru/UDyci',
    },
    slug: 'mini-post',
    time: 1618528849922,
    imageUrl: 'https://clck.ru/U7rDJ',
    commentsCount: 21,
    viewsCount: 234,
  },
  {
    id: 2,
    title: 'Фэнтези в Ингушетии или в поисках потерянного архива',
    user: {
      id: 0,
      name: 'Dr. Who',
      avatarUrl: 'https://clck.ru/UDyci',
    },
    slug: 'mini-post',
    time: 1618238849922,
    imageUrl: 'https://clck.ru/U7rDJ',
    commentsCount: 21,
    viewsCount: 234,
  },
];

export default function Home() {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedThemes, setSelectedThemes] = useState<Theme[]>([]);
  const themes = useSelector(selectThemesState);
  const categories = useSelector(selectCategoriesState);
  const mq = useAllMQ()

  const runEffect = async () => {
    setIsLoading(true);
    const posts = await getPosts({ themes: [...selectedThemes].map(t =>t.name.replace('#', '')).join(',') });

    setPosts(posts.data)

    if (!comments.length) {
      setComments(await CommentApi.get());
    }

    setIsLoading(false);
  };

  useEffect(() => {
    runEffect();

  }, [selectedThemes]);

  const handleSelectTheme = async (t: Theme) => {
    setSelectedThemes(() => [...selectedThemes, t]);
  }

  const handleSetLike = async (postId: number, like?: 'like' | 'dislike') => {
    await setLike(postId, 'post', like)
  }

  return (
    <main>
      <MainLayout>
        <div className="wrapper">

          {!mq.isXS && (
              <div className="left-side">
                <SideBlock>
                  <MenuList
                      items={[
                        { name: 'Популярное', url: '/popular', icon: '/fire.svg', isActive: true, hasMore: true },
                        { name: 'Новое', url: '/new', icon: '/news.svg' },
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
                <SideComments
                    comments={
                      comments.map((item): CommentItem => {
                        return {
                          id: `${item.id}`,
                          user: { fullname: item.user.name, avatarUrl: item.user.avatar },
                          text: item.text,
                          post: { id: `${item.post.id}`, title: item.post.title },
                          rating: item.likes_count,
                        };
                      })
                    }
                />
              </div>
          )}
        </div>
      </MainLayout>
    </main>
  );
}
