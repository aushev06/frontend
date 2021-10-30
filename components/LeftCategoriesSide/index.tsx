import React from 'react';
import { SideBlock } from '../SideBlock';
import { MenuList } from '../MenuList';
import { Tags } from '../Tags';
import clsx from 'clsx';

export interface LeftCategoriesSideProps {
  className?: string;
}

export const LeftCategoriesSide: React.FC<LeftCategoriesSideProps> = ({ className }) => {
  return (
    <div className={clsx('left-side', className || '')}>
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
        {/*<Tags*/}
        {/*  items={[*/}
        {/*    { name: 'разработка', url: '/tags/develop' },*/}
        {/*    { name: 'советы', url: '/tags/tips' },*/}
        {/*    { name: 'дизайн', url: '/tags/design' },*/}
        {/*    { name: 'инструкции', url: '/tags/instructions' },*/}
        {/*    { name: 'mvp', url: '/tags/mvp' },*/}
        {/*    { name: 'проектирование', url: '/tags/test' },*/}
        {/*    { name: 'инструментарий', url: '/tags/test' },*/}
        {/*    { name: 'болтология', url: '/tags/test' },*/}
        {/*    { name: 'работа', url: '/tags/test' },*/}
        {/*  ]}*/}
        {/*/>*/}
      </SideBlock>
    </div>
  );
};
