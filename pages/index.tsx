import React from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { SideMenu } from '../components/SideMenu';
import { SideComments } from '../components/SideComments';
import MiniPost, { MiniPostData } from '../components/MiniPost';

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
  time: 1618128849922,
  description:
    'Никто не ожидал, что на GDG Magas 2019 придет столько людей. Зал ГБУ Инг НИИ был переполнен слушателями, среди которых было много гостей из Чечни и Дагестана.',
  imageUrl: 'https://clck.ru/U7rDJ',
  commentsCount: 21,
  viewsCount: 234,
  likesCount: 52,
  dislikesCount: 12,
};

export default function Home() {
  return (
    <main>
      <MainLayout>
        <div className="wrapper">
          <div className="left-side">
            <SideMenu newCount={24} />
          </div>
          <div className="content">{[...Array(10)].fill(<MiniPost postData={miniPostTemplate} />)}</div>
          <div className="right-side">
            <SideComments
              comments={[
                {
                  id: '1',
                  user: { fullname: 'Ваха Костоправ', avatarUrl: 'https://source.unsplash.com/random/100x100?1' },
                  text: 'Когда у меня спрашивают, хочу ли я съесть эти свежие пончики, я отвеч...',
                  post: { id: '3', title: 'Тестовая запись' },
                  rating: 5,
                },
                {
                  id: '2',
                  user: { fullname: 'Генадий Горин', avatarUrl: 'https://source.unsplash.com/random/100x100?2' },
                  text: 'Я сижу, делаю дизайн Ердуне без света. Зарядка почти на исходе, Кег...',
                  post: { id: '3', title: 'Тестовая запись' },
                },
                {
                  id: '3',
                  user: { fullname: 'Алайг Чандиев', avatarUrl: 'https://source.unsplash.com/random/100x100?3' },
                  text: 'Когда у меня спрашивают, хочу ли я съесть эти свежие пончики, я отвеч...',
                  post: { id: '3', title: 'Тестовая запись' },
                },
                {
                  id: '4',
                  user: { fullname: 'Муртаз Буртубиев', avatarUrl: 'https://source.unsplash.com/random/100x100?4' },
                  text: 'Когда у меня спрашивают, хочу ли я съесть эти свежие пончики, я отвеч...',
                  post: { id: '3', title: 'Тестовая запись' },
                },
                {
                  id: '5',
                  user: { fullname: 'Генарг Хьажкиев', avatarUrl: 'https://source.unsplash.com/random/100x100?5' },
                  text: 'Когда у меня спрашивают, хочу ли я съесть эти свежие пончики, я отвеч...',
                  post: { id: '3', title: 'Тестовая запись' },
                },
                {
                  id: '6',
                  user: { fullname: 'Дулх Халтамиев', avatarUrl: 'https://source.unsplash.com/random/100x100?6' },
                  text: 'Когда у меня спрашивают, хочу ли я съесть эти свежие пончики, я отвеч...',
                  post: { id: '3', title: 'Тестовая запись' },
                },
              ]}
            />
          </div>
        </div>
      </MainLayout>
    </main>
  );
}
