import React from "react";
import {getSpecialistCategories, getSpecialists} from "../services/api/SpecialistsApi";
import {MainLayout} from "../layouts/MainLayout";
import {SpecialistPageComponent} from "../components/pages/SpecialistPage";
import {getPostComments, showPost} from "../services/api/PostApi";

export default function SpecialistsPage({categories, users}) {
  return (
      <MainLayout>
          <div>
              <div>

              </div>
              <div>
                <SpecialistPageComponent categories={categories} initialSpecialistData={users} />
              </div>
          </div>
      </MainLayout>
  );
}

export async function getServerSideProps(ctx) {
    const response = await getSpecialists({ is_specialist: true });
    return {
        props: {
            categories: await getSpecialistCategories(),
            users: response,
        },
    }
}

