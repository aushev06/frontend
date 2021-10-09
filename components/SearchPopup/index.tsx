import React, { useState } from 'react';

import styles from './SearchPopup.module.scss';
import Item from './Item';
interface SearchPopupProps {
  isSearch: boolean;
  searchInput: string;
}

const mockup = {
  authors: [
    {
      id: 1,
      name: 'Харца Лелович',
    },
    {
      id: 2,
      name: 'Нахал Ещетотович',
    },
  ],
  articles: [
    {
      id: 3,
      name: 'Соха-подкаст на Ingternet',
    },
    {
      id: 4,
      name: 'Ха ха ха, говорю я всем, кому не смешно!',
    },
    {
      id: 5,
      name: 'Я сижу на кухне, хаваю борщь',
    },
    {
      id: 6,
      name: 'Я сижу на кухне, хаваю борщь',
    },
  ],
  tags: [
    {
      id: 7,
      name: 'Соха-подкаст на Ingternet',
    },
  ],
  comments: [
    {
      id: 8,
      name: 'Соха-подкаст на Ingternet',
    },
  ],
  podcasts: [],
};

const SearchPopup: React.FC<SearchPopupProps> = ({ isSearch, searchInput }) => {
  const [searchData, setSearchData] = useState(mockup);

  if (isSearch && searchData.articles.length === 0) return null;

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <Item title="Авторы" data={searchData.authors} />
        <Item title="Публикации" data={searchData.articles} />
        <Item title="Тэги" data={searchData.tags} />
        <Item title="Коментарии" data={searchData.comments} />
        <Item title="Авторы" data={searchData.podcasts} />
      </div>
      <div className={styles.footer}>
        <img className="mr-10" src="/arrow-link.svg" alt="Поиск" />
        <a>Показать все результаты по запросу “{searchInput}”</a>
      </div>
    </div>
  );
};

export default SearchPopup;
