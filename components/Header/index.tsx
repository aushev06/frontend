import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import ProfilePopup from '../ProfilePopup';
import SearchPopup from '../SearchPopup';
import Backdrop from '@material-ui/core/Backdrop';

import styles from './Header.module.scss';
import { AvailableForWork } from '../AvailableForWork';
import { Button } from '../Button';

export const Header: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [searchInput, setSearchInput] = useState<string>('');

  useEffect(() => {
    isSearch ? document.body.classList.add(styles.noscroll) : document.body.classList.remove(styles.noscroll);
  }, [isSearch]);

  const onChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const onOpenSearch = () => {
    setIsSearch(true);
  };

  const onCloseSearch = () => {
    setIsSearch(false);
  };

  if (isSearch) {
    return (
      <header className={clsx(styles.header, 'd-flex')}>
        <img className={styles.logo} src="/logo.svg" alt="Logo" />
        <div className={clsx(styles.search, 'd-flex align-items-center w100')}>
          <img className="mr-15" src="/search.svg" alt="Поиск" />
          <input
            className={styles.input}
            placeholder="Поиск"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          ></input>
          <img onClick={onCloseSearch} className="ml-auto cursor-pointer" src="/close.svg" alt="Закрыть" />
        </div>
        <Backdrop classes={{ root: styles.backdrop }} open={isSearch}>
          <SearchPopup isSearch={isSearch} searchInput={searchInput} />
        </Backdrop>
      </header>
    );
  }

  return (
    <header className={clsx(styles.header, 'd-flex justify-content-between')}>
      <div className="d-flex align-items-center">
        <img className={styles.logo} src="/logo.svg" alt="Logo" />
        <Link href="/specialists">
          <a className="d-flex align-items-center ml-45">
            <img className="mr-10" src="/users.svg" alt="Специалисты" />
            Специалисты
          </a>
        </Link>
      </div>
      <div className="d-flex align-items-center">
        <AvailableForWork checked={checked} onChange={onChangeCheckbox} setChecked={setChecked} />
        <img className="ml-45 cursor-pointer" src="/search.svg" alt="Поиск" onClick={onOpenSearch} />
        <img className="ml-35 cursor-pointer" src="/notifications.svg" alt="Уведомления" />
        <div className="ml-35">
          <ProfilePopup user={{ name: 'Апачи', login: '@ingush06', avatar: '' }} />
        </div>
        <Button variant="contained" color="secondary" className="ml-30">
          Написать
        </Button>
      </div>
    </header>
  );
};
