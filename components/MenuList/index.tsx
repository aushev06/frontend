import clsx from 'clsx';
import React from 'react';
import Link from 'next/link';
import {Button} from '../Button';

import styles from './MenuList.module.scss';

type MenuItem = { name: string; url: string; icon: string; newCount?: number; hasMore?: boolean; isActive?: boolean, onClick?: () => void };

type MenuListProps = {
    items: MenuItem[];
};

export const MenuList: React.FC<MenuListProps> = ({items}) => {
    const handleClick = (item: MenuItem) => {
        if (item.onClick) {
            item.onClick()
        }
    }

    return (
        <ul className="mb-40">
            {items.map((item) => (
                <li key={item.url + item.name} className={styles.item}>
                    <Link href={item.onClick ? '#' : item.url}>
                        <a>
                            <Button
                                className={clsx('w100 justify-content-between', styles.button)}
                                variant={item.isActive ? 'contained' : 'text'}
                                color="primary"
                                startIcon={item.icon && <img className={styles.icon} src={item.icon}/>}
                                endIcon={item.hasMore && <img src="/dots.svg"/>}
                                onClick={() => handleClick(item)}
                            >
                <span className="mr-auto">
                  {item.name}
                    {item.newCount ? <span className={styles.newCount}>+{item.newCount}</span> : ''}
                </span>
                            </Button>
                        </a>
                    </Link>
                </li>
            ))}
        </ul>
    );
};
