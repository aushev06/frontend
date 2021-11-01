import React, {useState} from 'react';

import styles from './MobileProfilePopup.module.scss';
import Item from "../SearchPopup/Item";
import clsx from "clsx";
import {Avatar, Divider, Typography} from "@material-ui/core";
import {useSelector} from "react-redux";
import {selectUserState} from "../../redux/user/user.selector";
import {Button} from "../Button";
import {AvailableForWork} from "../AvailableForWork";
import Link from "next/link";
import {useRouter} from "next/router";

interface SearchPopupProps {
    checked?: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    setChecked: (value: boolean) => void;
    isLoading: boolean;
}

const mockup = {
    authors: [
        {
            id: 1,
            name: 'Харца Лелович',
        },
        {
            id: 2,
            name: 'Нахал Ещетотович',
        },
    ],
    articles: [
        {
            id: 3,
            name: 'Соха-подкаст на Ingternet',
        },
        {
            id: 4,
            name: 'Ха ха ха, говорю я всем, кому не смешно!',
        },
        {
            id: 5,
            name: 'Я сижу на кухне, хаваю борщь',
        },
        {
            id: 6,
            name: 'Я сижу на кухне, хаваю борщь',
        },
    ],
    tags: [
        {
            id: 7,
            name: 'Соха-подкаст на Ingternet',
        },
    ],
    comments: [
        {
            id: 8,
            name: 'Соха-подкаст на Ingternet',
        },
    ],
    podcasts: [],
};

const MobileProfilePopup: React.FC<SearchPopupProps> = ({ checked, setChecked, isLoading, onChange }) => {
    const user = useSelector(selectUserState)['data'];
    const router = useRouter();


    const handleClick = () => {
        router.push('/write');
    }

    const onLogout = () => {
        if (window?.confirm('Вы действительно хотите покинуть сайт ?')) {
            document.cookie = 'auth_token' + '=; Max-Age=0';
            localStorage.removeItem('token');
            location.href = '/';
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.body}>
                <div className={styles.header}>
                    <div className={styles.header_profile}>
                        <Avatar className={clsx('cursor-pointer', styles.root)} alt={user?.name} src={user?.avatar} />
                        <Typography className={styles.name}>{user.name}</Typography>
                    </div>

                    <Button onClick={handleClick} variant="contained" color="secondary" className="mt-10">
                        Написать
                    </Button>
                </div>

                <div className={clsx('mt-15', styles.available)}>
                    <AvailableForWork checked={checked} onChange={onChange} setChecked={setChecked} isLoading={isLoading}/>
                </div>

                <div className={clsx(styles.section2, 'd-flex flex-column')}>
                    <Link href={`/profile/${user.id}?type=articles`}><a className="mb-3">Статьи</a></Link>
                    <Link href={`/profile/${user.id}?type=drafts`}><a className="mb-3">Черновики</a></Link>
                    <Link href={'/profile'}><a className="mb-3">Настройки</a></Link>
                </div>

                <Divider className={styles.divider} />

                <a onClick={onLogout} className={clsx(styles.section2, 'd-flex flex-column')}>Выйти</a>

            </div>
        </div>
    );
};

export default MobileProfilePopup;
