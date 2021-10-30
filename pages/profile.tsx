import {MainLayout} from "../layouts/MainLayout";
import {ProfilePageComponent} from "../components/pages/ProfilePage";

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
