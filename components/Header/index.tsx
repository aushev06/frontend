import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import ProfilePopup from '../ProfilePopup';
import SearchPopup from '../SearchPopup';
import Backdrop from '@material-ui/core/Backdrop';

import styles from './Header.module.scss';
import {AvailableForWork} from '../AvailableForWork';
import {Button} from '../Button';
import {useRouter} from 'next/router';
import {UserApi} from "../../services/api/UserApi";
import {useSelector} from "react-redux";
import {selectUserState} from "../../redux/user/user.selector";
import {AuthDialog} from "../AuthDialog";
import {useAllMQ} from "../../utils/useAllMQ";
import MobileProfilePopup from "../MobileProfilePopup";
import Avatar from "@material-ui/core/Avatar";

type Props = {
    onClickHamburger: () => void
}

export const Header = ({ onClickHamburger } : Props) => {
    const [isLoading, setIsLoading] = useState(false);
    const mq = useAllMQ()
    const router = useRouter()

    const [checked, setChecked] = useState(false);
    const [isSearch, setIsSearch] = useState(false);
    const [isMobilePopup, setIsMobilePopup] = useState(false);


    const [isVisible, setIsVisible] = useState(false);

    const [searchInput, setSearchInput] = useState<string>('');
    const user = useSelector(selectUserState);
    useEffect(() => {
        isSearch ? document.body.classList.add(styles.noscroll) : document.body.classList.remove(styles.noscroll);
    }, [isSearch]);

    const onChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleChangeCheckbox(event.target.checked)
    };

    const onOpenSearch = () => {
        setIsSearch(true);
    };

    const onCloseSearch = () => {
        setIsSearch(false);
    };

    const handleChangeCheckbox = (flag: boolean) => {
        setChecked(flag);
        setIsLoading(true)
        UserApi
            .updateProfile({ready_for_work: flag ? true : false}, user.data?.id)
            .then((r) => {
                setChecked(flag);
            })
            .catch(err => {
                Object.values(err?.response?.data?.errors).forEach(e => {
                    alert(e)
                })
                setChecked(false);
            })
            .finally(() => setIsLoading(false))
    }

    const handleClick = () => {
        if (!user?.data?.id) {
            setIsVisible(true);
            return
        }

        router.push('/write')
    }

    if (isSearch) {
        return (
            <header className={clsx(styles.header, 'd-flex')}>
                <Link href={'/'}>
                    <a><img className={styles.logo} src="/logo.svg" alt="Logo"/></a>
                </Link>
                <div className={clsx(styles.search, 'd-flex align-items-center w100')}>
                    <img className="mr-15" src="/search.svg" alt="Поиск"/>
                    <input
                        className={styles.input}
                        placeholder="Поиск"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                    ></input>
                    <img onClick={onCloseSearch} className="ml-auto cursor-pointer" src="/close.svg" alt="Закрыть"/>
                </div>
                <Backdrop classes={{root: styles.backdrop}} open={isSearch}>
                    <SearchPopup isSearch={isSearch} searchInput={searchInput}/>
                </Backdrop>
            </header>
        );
    }

    if (isMobilePopup) {
        return (
            <header className={clsx(styles.header, 'd-flex justify-content-between')}>
                <div className="d-flex align-items-center">
                    <button type="button" className={styles.menuButton} onClick={onClickHamburger}>
                        <svg viewBox="0 0 26 11" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H16.5M1 10H24.5" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </button>
                    <Link href={'/'}>
                        <a><img className={styles.logo} src="/logo.svg" alt="Logo"/></a>
                    </Link>
                    <img className="ml-10 cursor-pointer" src="/search.svg" alt="Поиск" onClick={onOpenSearch}/>
                    <img className="ml-10 cursor-pointer" src="/notifications.svg" alt="Уведомления"/>

                    <div className={'ml-10'}>
                        <Avatar alt={user?.data?.name} src={user?.data?.avatar} onClick={() => setIsMobilePopup(false)} />
                    </div>
                    <Backdrop classes={{root: styles.backdrop}} open={isMobilePopup}>
                        <MobileProfilePopup checked={checked} onChange={onChangeCheckbox} setChecked={handleChangeCheckbox}
                                            isLoading={isLoading} />
                    </Backdrop>
                </div>

            </header>
        )
    }


    if (mq.isXS) {
        return ( <header className={clsx(styles.header, 'd-flex justify-content-between')}>
            <div className="d-flex align-items-center">
                <button type="button" className={styles.menuButton} onClick={onClickHamburger}>
                    <svg viewBox="0 0 26 11" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H16.5M1 10H24.5" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </button>

                <Link href={'/'}>
                    <a><img className={styles.logo} src="/logo.svg" alt="Logo"/></a>
                </Link>
                <img className="ml-10 cursor-pointer" src="/search.svg" alt="Поиск" onClick={onOpenSearch}/>
                <img className="ml-10 cursor-pointer" src="/notifications.svg" alt="Уведомления"/>

                <div className={'ml-10'}>
                    <ProfilePopup onClick={() => !user?.data?.id ? setIsVisible(true) : setIsMobilePopup(true)} user={user?.data}/>
                </div>

            </div>
            <AuthDialog size={'lg'}  onClose={() => { setIsVisible(false) }} open={isVisible} />
        </header>)
    }

    return (
        <header className={clsx(styles.header, 'd-flex justify-content-between')}>
            <div className="d-flex align-items-center">
                <Link href={'/'}>
                    <a><img className={styles.logo} src="/logo.svg" alt="Logo"/></a>
                </Link>
                <Link href="/specialists">
                    <a className="d-flex align-items-center ml-45">
                        <img className="mr-10" src="/users.svg" alt="Специалисты"/>
                        Специалисты
                    </a>
                </Link>
            </div>
            <div className="d-flex align-items-center">
                <AvailableForWork checked={checked} onChange={onChangeCheckbox} setChecked={handleChangeCheckbox}
                                  isLoading={isLoading}/>
                <img className="ml-45 cursor-pointer" src="/search.svg" alt="Поиск" onClick={onOpenSearch}/>
                <img className="ml-35 cursor-pointer" src="/notifications.svg" alt="Уведомления"/>
                <div className="ml-35">
                    {user.data && <ProfilePopup user={user.data}/>}
                </div>
                <Button onClick={handleClick} variant="contained" color="secondary" className="ml-30">
                    Написать
                </Button>
            </div>


            <AuthDialog  size={'xs'} onClose={() => { setIsVisible(false) }} open={isVisible} />
        </header>
    );
};
