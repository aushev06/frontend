import React, { useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import ProfilePopup from '../ProfilePopup';

import styles from './Header.module.scss';
import { AvailableForWork } from '../AvailableForWork';
import { Button } from '../Button';
import { useRouter } from 'next/router';

export const Header: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const router = useRouter()

  const onChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <header className={clsx(styles.header, 'd-flex justify-content-between')}>
      <div className="d-flex align-items-center">
        <img className={styles.logo} src="/logo.svg" alt="Logo" />
        <Link href="/specialists">
          <a className="d-flex align-items-center ml-45">
            <img className="mr-10" src="/users.svg" alt="Users" />
            Специалисты
          </a>
        </Link>
      </div>
      <div className="d-flex align-items-center">
        <AvailableForWork checked={checked} onChange={onChangeCheckbox} setChecked={setChecked} />
        <img className="ml-45" src="/search.svg" alt="Search" />
        <img className="ml-35" src="/notifications.svg" alt="Search" />
        <div className="ml-35">
          <ProfilePopup user={{ name: 'Апачи', login: '@ingush06', avatar: '' }} />
        </div>
        <Button onClick={() => router.push('/write')} variant="contained" color="secondary" className="ml-30">
          Написать
        </Button>
      </div>
    </header>
  );
};
