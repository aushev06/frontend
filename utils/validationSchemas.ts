import * as yup from 'yup';

export const ProfileSchema = yup
    .object()
    .shape({
        name: yup.string().required('Имя обязательно')
    })

