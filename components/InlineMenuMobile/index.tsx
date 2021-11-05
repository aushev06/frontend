import {Button} from "../Button";
import React, {useState} from "react";
import styles  from './InlineMenuMobile.module.css'

type Props = {
    menus: string[],
    activeMenu: string,
    onSelect: (menu: string) => void
}

export const InlineMenuMobile = ({ activeMenu, menus, onSelect} : Props) => {
    return (
        <div className={styles.block}>
            {
                menus.map((menu, idx) => {
                    return (
                        <Button onClick={() => onSelect(menu)} variant={activeMenu === menu ? 'outlined' : 'text'} key={idx}>{menu}</Button>
                    )
                })
            }
        </div>
    )
}
