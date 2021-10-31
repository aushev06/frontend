import * as yup from 'yup';

export const ProfileSchema = yup
    .object()
    .shape({
        name: yup.string().required('Имя обязательно'),
        email: yup.string().trim().required('Email required'),
        links: yup.array().of(
            yup
                .object()
                .shape({
                    value: yup
                        .string()
                        .matches(/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/, {
                            message: 'Incorrect link',
                            excludeEmptyString: true,
                        }),
                })
                .required(),
        ),
    })

