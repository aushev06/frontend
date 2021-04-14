import React from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { SideMenu } from '../components/SideMenu';
import { SideComments } from '../components/SideComments';
import { MiniPost, MiniPostData } from '../components/MiniPost';
import { SideBlock } from '../components/SideBlock';
import { Tags } from '../components/Tags';
import { MenuList } from '../components/MenuList';

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
            <SideBlock>
              <MenuList
                items={[
                  { name: 'Популярное', url: '/popular', icon: '/fire.svg', isActive: true, hasMore: true },
                  { name: 'Новое', url: '/new', icon: '/news.svg' },
                ]}
              />
            </SideBlock>
            <SideBlock name="Подкасты">
              <MenuList
                items={[
                  { name: 'Dev Battle', url: '/tags/dev-battle', icon: '/podcast_1.png' },
                  { name: 'Design Battle', url: '/tags/dev-battle', icon: '/podcast_2.png' },
                  { name: 'Design Review', url: '/tags/dev-battle', icon: '/podcast_3.png' },
                  { name: 'Dev Review', url: '/tags/dev-battle', icon: '/podcast_4.png' },
                  { name: 'Дизайн за чаем', url: '/tags/dev-battle', icon: '/podcast_5.png' },
                ]}
              />
            </SideBlock>
            <SideBlock name="Темы">
              <Tags
                items={[
                  { name: 'разработка', url: '/tags/develop' },
                  { name: 'советы', url: '/tags/tips' },
                  { name: 'дизайн', url: '/tags/design' },
                  { name: 'инструкции', url: '/tags/instructions' },
                  { name: 'mvp', url: '/tags/mvp' },
                  { name: 'проектирование', url: '/tags/test' },
                  { name: 'инструментарий', url: '/tags/test' },
                  { name: 'болтология', url: '/tags/test' },
                  { name: 'работа', url: '/tags/test' },
                ]}
              />
            </SideBlock>
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
