import {yupResolver} from '@hookform/resolvers/yup';

import styles from './ProfilePage.module.scss';
import {FormControl, MenuItem, Select, TextField, Typography} from "@material-ui/core";
import {FormField} from "../../FormField";
import format from "date-fns/format";
import {FieldValues, useForm, Controller} from "react-hook-form";
import React from "react";
import {ProfileSchema} from "../../../utils/validationSchemas";
import { InputLabel } from '@material-ui/core';

const img = 'https://sun9-27.userapi.com/impg/MjbQlat29eVjsDctQcL0E36sm906zxUEp3i2RQ/5noF257iHOE.jpg?size=2560x1920&quality=95&sign=16d7f16668e650250c6554065f0d7aed&type=album';


export interface SettingsFormFieldsProps {
    id: string;
    name: string;
    position: string;
}

export const ProfilePageComponent = () => {

    const [loading, setLoading] = React.useState<boolean>(false);

    const {register, handleSubmit, control, formState} = useForm<SettingsFormFieldsProps>({
        mode: 'onChange',
        resolver: yupResolver(ProfileSchema),
        defaultValues: {
            name: '',
            position: ''
        },
    });

    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div style={{width: 900}}>
            <div className={styles.formBlock}>
                <Typography className={styles.label}>Основная Информация</Typography>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <FormControl className={styles.formControl}>
                            <TextField
                                {...register('name')}
                                className={styles.root}
                                InputProps={{className: styles.input}}
                                InputLabelProps={{className: styles.text}}
                                id="standard-basic"
                                label="Ваш ник"
                                variant="standard"
                                error={!!formState?.errors?.name?.message}
                                helperText={formState?.errors?.name?.message}
                            />
                        </FormControl>
                    </div>

                    <div>
                        <FormControl variant="standard" className={styles.formControl}>
                            <InputLabel id="demo-simple-select-standard-label" className={styles.text}>Ваша профессия</InputLabel>
                            <Controller render={({field: {onChange, value}}) => (<Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                label="Ваша профессия"
                                onChange={onChange}
                                value={value}
                            >
                                <MenuItem value={'UX/UI дизайнер'}>UX/UI дизайнер</MenuItem>
                            </Select>)} name={'position'} control={control} />
                        </FormControl>


                        <button>OK</button>

                    </div>
                </form>
            </div>
        </div>
    )
}
