import {yupResolver} from '@hookform/resolvers/yup';

import styles from './ProfilePage.module.scss';
import {Checkbox, FormControl, FormControlLabel, MenuItem, Select, TextField, Typography} from "@material-ui/core";
import format from "date-fns/format";
import {FieldValues, useForm, Controller, useFieldArray} from "react-hook-form";
import React from "react";
import {ProfileSchema} from "../../../utils/validationSchemas";
import {InputLabel} from '@material-ui/core';
import { FormGroup } from '@material-ui/core';
import {User} from "../../../interfaces";
import {useSelector} from "react-redux";
import {selectUserState} from "../../../redux/user/user.selector";
import {Button} from "../../Button";
import {UserApi} from "../../../services/api/UserApi";

const img = 'https://sun9-27.userapi.com/impg/MjbQlat29eVjsDctQcL0E36sm906zxUEp3i2RQ/5noF257iHOE.jpg?size=2560x1920&quality=95&sign=16d7f16668e650250c6554065f0d7aed&type=album';


export interface SettingsFormFieldsProps extends FieldValues {
    id: string;
    name: string;
    email: string;
    position: string;
    is_new_comment_notification: boolean;
    is_reply_to_my_comment_notification: boolean;
    is_new_follower_notification: boolean;
    links: Array<{name: string}>
}

export const ProfilePageComponent = () => {
    const user = useSelector(selectUserState).data;

    const [loading, setLoading] = React.useState<boolean>(false);

    const {register, handleSubmit, control, formState, getValues} = useForm<SettingsFormFieldsProps>({
        mode: 'onChange',
        resolver: yupResolver(ProfileSchema),
        defaultValues: {
            name: user?.name || '',
            position: user?.position || '',
            email: user?.email || '',
            is_new_comment_notification: true,
            is_reply_to_my_comment_notification: true,
            is_new_follower_notification: true,
            links: user?.links.map(l => ({name: l})) || [{name: 'https://'}],
        },
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'links',
    });

    const onSubmit = async (data) => {
        await UserApi.updateProfile({
            ...data,
            links: data.links.map(l => l.name)
        }, user.id)
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className={styles.formBlock}>

                    <Typography className={styles.label}>Основная Информация</Typography>

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
                            <TextField
                                {...register('position')}
                                className={styles.root}
                                InputProps={{className: styles.input}}
                                InputLabelProps={{className: styles.text}}
                                id="standard-basic"
                                label="Ваша профессия"
                                variant="standard"
                                error={!!formState?.errors?.position?.message}
                                helperText={formState?.errors?.position?.message}
                            />
                        </FormControl>
                    </div>

                    <div className={styles.inputLink}>
                        <FormControl variant="standard" className={styles.formControl}>
                            {fields.map((l, index) => {
                                return (
                                    <div className={styles.linkBlock} key={index}>
                                        <input defaultValue={l.name} key={index} {...register(`links[${index}].name`)} name={`links[${index}].name`}/>
                                        <img src={'/close.svg'} width={'20'} height={'20'} onClick={() => remove(index)} />
                                    </div>
                                )
                            })}
                            <span onClick={() => append({name: 'https://'})} className={styles.addMore}>+ Добавить ещё</span>
                        </FormControl>
                    </div>


                </div>

                <div className={styles.formBlock}>
                    <Typography className={styles.label}>Настройки Email</Typography>


                    <div>
                        <FormControl className={styles.formControl}>
                            <TextField
                                {...register('email')}
                                className={styles.root}
                                InputProps={{className: styles.input}}
                                InputLabelProps={{className: styles.text}}
                                id="standard-basic"
                                label="Ваша эл. почта"
                                variant="standard"
                                error={!!formState?.errors?.email?.message}
                                helperText={formState?.errors?.email?.message}
                            />
                        </FormControl>

                        <FormControl variant="standard" className={styles.formControl}>
                            <Typography className={styles.text} style={{marginTop: 30}}>Email уведомления</Typography>
                            <FormGroup style={{marginTop: 20}}>
                                <FormControlLabel control={<Controller control={control} render={({ field }) => {
                                    return (
                                        <Checkbox onChange={field.onChange} defaultChecked={field.value} />
                                    )
                                }} name={'is_new_comment_notification'} />} label="Новые комментарии к постам" />
                            </FormGroup>

                            <FormGroup style={{marginTop: 20}}>
                                <FormControlLabel control={<Controller control={control} render={({ field }) => {
                                    return (
                                        <Checkbox onChange={field.onChange} defaultChecked={field.value} />
                                    )
                                }} name={'is_reply_to_my_comment_notification'} />} label="Ответы на мои комментарии к постам" />
                            </FormGroup>

                            <FormGroup style={{marginTop: 20}}>
                                <FormControlLabel control={<Controller control={control} render={({ field }) => {
                                    return (
                                        <Checkbox onChange={field.onChange} defaultChecked={field.value} />
                                    )
                                }} name={'is_new_follower_notification'} />} label="Новый подписчик" />
                            </FormGroup>

                        </FormControl>

                    </div>
                </div>


                <div className={styles.btns}>
                    <Button type={'submit'} className={'green-btn'}>Сохранить</Button>
                    <Button onClick={() => {}} variant={'outlined'}>Отмена</Button>
                </div>


            </form>

        </div>
    )
}
