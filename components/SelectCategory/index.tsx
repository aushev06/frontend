import styles from "./SelectCategory.module.scss";
import {Button} from "../Button";
import {Category} from "../../interfaces";
import {MenuList} from "../MenuList";
import React, {useState} from "react";
import {Typography} from "@material-ui/core";
import clsx from "clsx";
import {Divider} from "@mui/material";

type Props = {
    categories: Category[],
    onSelect: (category: Category) => void,
    selectedCategory?: Category
}


function ActiveSvg(props: { leak: boolean }) {
    return <svg style={{ transform: `${props.leak ? 'rotate(0deg)' : 'rotate(180deg)'}` }} width="9" height="6" viewBox="0 0 9 6" fill="none"
                xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L4.5 4.5L8 1" stroke="#D0D0DD" strokeWidth="1.3"/>
    </svg>;
}

export const SelectCategory = ({categories, onSelect, selectedCategory}: Props) => {
    const [category, setCategory] = useState(selectedCategory?.id ? selectedCategory : { name: 'Мой блог', slug: 'home', id: 0 })
    const [visiable, setVisiable] = React.useState(false);
    const [leak, setLeak] = React.useState(false);

    const toggleVisible = () => {
        setVisiable(!visiable);
    }
    const toggleLeak = () => {
        setLeak(!leak);
    }

    const handleSelectCategory = (c: Category) => {
        onSelect(c);
        setCategory(c?.id ? c : { name: 'Мой блог', slug: 'home', id: 0 });
    }

    return (
        <div onClick={() => toggleLeak()} className={styles.root}>
            <div className={clsx(styles.selectCategory)}>
                <img src={`/${category?.slug}.png`}/>

                <Typography className={styles.selectCategoryText}>
                    {category?.name}
                </Typography>

            </div>
            <ActiveSvg leak={leak} />
            {
                leak && <div className={styles.newPop}>
                    <ul>
                        <li onClick={() => handleSelectCategory(null)}>
                            <img src={`/home.png`}/>
                            Мой блог
                        </li>

                        <Divider />
                        <br/>
                        {categories.map((c, idx) => {
                            return (
                                <li key={idx} onClick={() => handleSelectCategory(c)}>
                                    <img src={`/${c.slug}.png`}/>
                                    {c.name}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            }
        </div>
    )
}
