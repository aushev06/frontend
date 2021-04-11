import React from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { SideMenu } from '../components/SideMenu';
import { SideComments } from '../components/SideComments';

export default function Home() {
  return (
    <main>
      <MainLayout>
        <div className="wrapper">
          <div className="left-side">
            <SideMenu newCount={24} />
          </div>
          <div className="content">
            {[...Array(10)].fill(
              <div style={{ border: '1px solid #333', padding: 30, width: '100%', marginBottom: 30 }}>
                <h2>Список новостей...</h2>
              </div>,
            )}
          </div>
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
