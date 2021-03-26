import Head from 'next/head';
import React from 'react';
import { Header } from '../components/Header';

interface MainLayoutProps {
  title?: string;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children, title = 'Ingternet' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      {children}
    </>
  );
};
