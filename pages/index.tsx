import Head from 'next/head';
import React from 'react';
import { MainLayout } from '../layouts/MainLayout';

export default function Home() {
  return (
    <main>
      <MainLayout>
        <h1>Главная страница</h1>
      </MainLayout>
    </main>
  );
}
