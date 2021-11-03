import styles from "./SelectFilterField.module.scss";
import {Button} from "../Button";
import {Category} from "../../interfaces";
import {MenuList} from "../MenuList";
import React, {useState} from "react";
import {Typography} from "@material-ui/core";
import clsx from "clsx";

type Props = {
    fields: string[],
    onSelect: (field: string) => void,
    selectedField?: string
}


function ActiveSvg(props: { leak: boolean, isActive: boolean }) {
    return <svg style={{transform: `${props.leak ? 'rotate(180deg)' : 'rotate(0deg)'}`}} width="9" height="6"
                viewBox="0 0 9 6" fill="none"
                xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L4.5 4.5L8 1" stroke={props.isActive ? '#04C800' : '#D0D0DD'} strokeWidth="1.3"/>
    </svg>;
}

export const SelectFilterField = ({fields, onSelect, selectedField}: Props) => {
    const [field, setField] = useState(selectedField ? selectedField : '')
    const [visiable, setVisiable] = React.useState(false);
    const [leak, setLeak] = React.useState(false);

    const toggleVisible = () => {
        setVisiable(!visiable);
    }
    const toggleLeak = () => {
        setLeak(!leak);
    }

    const handleSelect = (fld: string) => {
        setField(fld === field ? '' : fld);
        onSelect(fld === field ? '' : fld)
    }

    return (
        <div onClick={() => toggleLeak()} className={styles.root}>
            <div className={clsx(styles.selectCategory)}>
                <Button className={clsx(styles.btn, field.length ? styles.active : '')} onClick={() => {
                }} variant={'outlined'}>
                    <Typography className={clsx(styles.selectCategoryText, field.length ? styles.active : '')}>
                        {field.length ? field : fields[0]}
                    </Typography>

                    <ActiveSvg isActive={field.length > 0} leak={leak}/>
                </Button>

            </div>
            {
                leak && <div className={styles.newPop}>
                    <ul>
                        {fields.map((f, idx) => {
                            return (
                                <li key={idx} onClick={() => handleSelect(f)}>
                                    {f}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            }
        </div>
    )
}
