import {MainLayout} from "../layouts/MainLayout";
import {ProfilePageComponent} from "../components/pages/ProfilePage";
import {useSelector} from "react-redux";
import {selectUserState} from "../redux/user/user.selector";
import React from "react";

export default function ProfilePage() {


    return (
        <MainLayout>
            <div className="wrapper-center">
                <div className={'content'}>
                    <ProfilePageComponent />
                </div>
            </div>
        </MainLayout>
    );
}
