import React from 'react';
import { LeftCategoriesSide } from '../../components/LeftCategoriesSide';
import { MainLayout } from '../../layouts/MainLayout';

export default function Post() {
  return (
    <main>
      <MainLayout>
        <div className="wrapper">
          <LeftCategoriesSide />
        </div>
      </MainLayout>
    </main>
  );
}
