import Head from 'next/head';
import React, {useState} from 'react';
import {Header} from '../components/Header';
import {NavigationDrawer} from "../components/NavigationDrawer";

interface MainLayoutProps {
    title?: string;
}

export const MainLayout: React.FC<MainLayoutProps> = ({children, title = 'Ingternet'}) => {

    const [menuOpened, toggleMenuOpened] = useState<boolean>(false);
    const onClickHamburger = React.useCallback(() => toggleMenuOpened(true), []);

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>


            <Header onClickHamburger={onClickHamburger}/>

            <NavigationDrawer menuOpened={menuOpened} onClose={(): void => toggleMenuOpened(false)} />

            {children}
        </>
    );
};
