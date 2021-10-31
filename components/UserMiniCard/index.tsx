import React from 'react'
import Link from 'next/link';

import styles from './UserMiniCard.module.scss';
import Avatar from "@material-ui/core/Avatar";

interface UserCardProps {
    nickname: string;
    profession: string;
    status: string;
    readyForWork: boolean;
    links: Array<{key: string, value: string}>
    avatar?: string
}

function ActiveSvg(props: { leak: boolean }) {
    return <svg className={props.leak ? styles.rotated : ""} width="9" height="6" viewBox="0 0 9 6" fill="none"
                xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L4.5 4.5L8 1" stroke="#04C800" strokeWidth="1.3"/>
    </svg>;
}

function PointSvg() {
    return <svg width="13" height="9" viewBox="0 0 13 9" fill="none"
                xmlns="http://www.w3.org/2000/svg">
        <path d="M1 4L5 8L11.5 1.5" stroke="#40D269" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"/>
    </svg>;
}

const UserMiniCard: React.FC<UserCardProps> = (
    {
        nickname,
        profession,
        status,
        readyForWork,
        links,
        avatar
    }
) => {

    return (
        <div className={styles.userCard}>
            <div className={styles.userCard_profile}>
                <div className={styles.userCard_user}>
                    <div className={styles.userCard_avatar}>
                        {avatar && <img src={avatar} alt="Users" style={{ borderRadius: '50%' }}/>}
                        {!avatar && <Avatar  />}
                    </div>
                    <div className={styles.userCard_description}>
                       <div className={styles.userCard_description_header}>
                           <div className={styles.userCard_nickname}>
                               <h1>{nickname}</h1>
                           </div>

                           <div className={styles.userCard_workStatus}>
                               <div className={styles.userCard_sts}></div>
                               <span>Доступен для работы</span>
                           </div>
                       </div>

                        <div className={styles.userCard_info}>
                            <span className={styles.userCard_profession}>{profession}</span>
                        </div>
                        <div className={styles.userCard_status}>
                            <span>{status}</span>
                        </div>
                        <div className={styles.userCard_communication}>
                            <div className={styles.userCard_socNetworks}>
                                {links.map((link, key) => {
                                    return (
                                        <Link key={'link-' + key} href={link.value}>
                                            <a>
                                                <img src={`/${link.key}.svg`} alt={link.key} />
                                            </a>
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default UserMiniCard;
