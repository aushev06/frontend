import React from 'react'

import styles from './UserCard.module.scss';

interface UserCardProps {
    nickname: string;
    profession: string;
    status: string;
    sinceDate: string;
    commentsCount: number;
    readyForWork: boolean;
    articleType: 'articles' | 'drafts' | string;
    onChangeType: (type: string) => void;
    recognized?: boolean;
    isAuthUser?: boolean;
    avatar: string;
}

export function ActiveSvg(props: { leak: boolean }) {
    return <svg className={props.leak ? styles.rotated : ""} width="9" height="6" viewBox="0 0 9 6" fill="none"
                xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L4.5 4.5L8 1" stroke="#04C800" strokeWidth="1.3"/>
    </svg>;
}

export function PointSvg() {
    return <svg width="13" height="9" viewBox="0 0 13 9" fill="none"
                xmlns="http://www.w3.org/2000/svg">
        <path d="M1 4L5 8L11.5 1.5" stroke="#40D269" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"/>
    </svg>;
}

const UserCard: React.FC<UserCardProps> = (
    {
        nickname,
        profession,
        status,
        recognized,
        sinceDate,
        commentsCount,
        onChangeType,
        readyForWork,
        articleType,
        isAuthUser,
        avatar
    }
) => {

    const [visiable, setVisiable] = React.useState(false);
    const [leak, setLeak] = React.useState(false);
    const [isOwner, setIsOwner] = React.useState(false);
    const [type, setType] = React.useState(articleType);

    const toggleVisible = () => {
        setVisiable(!visiable);
    }
    const toggleLeak = () => {
        setLeak(!leak);
    }

    const handleChangeType = (t: string) => {
        onChangeType(t)
        setType(t);
    }

    return (
        <div className={styles.userCard}>
            <div className={styles.userCard_profile}>
                <div className={styles.userCard_user}>
                    <div className={styles.userCard_avatar}>
                        <img src={avatar} alt="Users"/>
                    </div>
                    <div className={styles.userCard_description}>
                        <div className={styles.userCard_nickname}>
                            <h1>{nickname}</h1>
                            {recognized && <img src="/star.svg" alt="."/>}
                        </div>
                        <div className={styles.userCard_info}>
                            <span className={styles.userCard_registered}>На Ingternet с {sinceDate}</span>
                            <span className={styles.userCard_profession}>{profession}</span>
                        </div>
                        <div className={styles.userCard_status}>
                            <span>{status}</span>
                        </div>
                        <div className={styles.userCard_communication}>
                            <div className={styles.userCard_socNetworks}>
                                <img src="/facebook.svg" alt="facebook"/>
                                <img src="/vk.svg" alt="vk"/>
                                <img src="/twitter.svg" alt="twitter"/>
                            </div>
                            <div className={styles.userCard_workStatus}>
                                <div className={styles.userCard_sts}></div>
                                <span>Доступен для работы</span>
                            </div>
                        </div>
                    </div>
                    {
                        isOwner === false ?
                            (<div className={styles.userCard_dropDawn}>
                                <div onClick={() => toggleVisible()} className={styles.userCard_dots}>
                                    <div className={styles.userCard_dot}></div>
                                    <div className={styles.userCard_dot}></div>
                                    <div className={styles.userCard_dot}></div>
                                </div>
                                {visiable &&
                                <div className={styles.userCard_dawn}>
                                    <ul>
                                        <li>Пожаловаться</li>
                                        <li>Заблокировать</li>
                                    </ul>
                                </div>
                                }
                            </div>) :
                            <div className={styles.userCard_editing}>
                                <img src="/edit.svg" alt=""/>
                            </div>
                    }
                </div>
                <div className={styles.userCard_section}>
                    <div onClick={() => toggleLeak()} className={styles.userCard_articles}>
                        <span>{type === 'articles' ? 'Статьи' : 'Черновики'} <b>24</b></span>
                        <ActiveSvg leak={leak}/>
                        {
                            leak && <div className={styles.userCard_newPop}>
                                <ul>
                                    <li onClick={() => handleChangeType('articles')}>
                                        {type === 'articles' && <PointSvg/>}
                                        Статьи
                                    </li>
                                    {isAuthUser && <li onClick={() => handleChangeType('drafts')}>{type === 'drafts' && <PointSvg />} Черновики</li>}
                                </ul>
                            </div>
                        }
                    </div>
                    <div className={styles.userCard_comments}><span>Комментарии {commentsCount}</span></div>
                </div>
            </div>
        </div>
    )
};

export default UserCard;
