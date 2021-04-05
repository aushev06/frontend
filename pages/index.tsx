import React from 'react';
import { MainLayout } from '../layouts/MainLayout';
import Button from '../components/Button';
import PofilePopup from '../components/PofilePopup';

export default function Home() {
  return (
    <main>
      <MainLayout>
        <h1>Главная страница</h1>
        <Button
          className="w100 justify-content-between"
          variant="contained"
          color="primary"
          startIcon={<img src="/fire.svg" />}
          endIcon={<img src="/dots.svg" />}
        >
          <span className="mr-auto">Популярное</span>
        </Button>
        <br />
        <Button variant="contained" color="secondary">
          Регистрация
        </Button>
        <br />
        <Button variant="outlined" color="primary">
          Новое
        </Button>
        <PofilePopup user={{ name: 'Адам', login: '@balkoev', avatar: '' }} />
      </MainLayout>
    </main>
  );
}
