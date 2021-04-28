import React from 'react';
import { LeftCategoriesSide } from '../../components/LeftCategoriesSide';
import { MainLayout } from '../../layouts/MainLayout';
import { FullPost } from '../../components/FullPost';

export default function Post() {
  return (
    <main>
      <MainLayout>
        <div className="wrapper-center">
          <LeftCategoriesSide className="left-side-no-margin" />
          <div className="content">
            <FullPost />
          </div>
        </div>
      </MainLayout>
    </main>
  );
}
