import clsx from 'clsx';
import {FormField} from 'components/FormField';
import React from 'react';
import {Control, useFieldArray, UseFormRegister} from 'react-hook-form';
import {FieldErrors} from 'react-hook-form/dist/types/errors';

import styles from './DynamicLinks.module.scss';

interface DynamicLinksProps<T> {
    control: Control;
    register: UseFormRegister<any>;
    errors:  FieldErrors;
    name?: string;
    text?: string;
}

export function DynamicLinks<T>(
    {
        control,
        errors,
        name = 'links',
        register,
        text = 'Social profile link',
    }: DynamicLinksProps<T extends { links: Array<{ value: string }> } ? T : never>): React.ReactElement {
    const {fields, append, remove} = useFieldArray({
        control,
        name,
    });

    return (
        <>
            {fields.filter(Boolean).map((field, index) => (
                <div key={field.id} className={clsx(styles.formField, {[styles.formFieldWithLabel]: !index})}>

                </div>
            ))}
            <p role="presentation" onClick={(): void => append({name: '', role: '', value: ''})}
               className={styles.addMore}>
                + Add more
            </p>
        </>
    );
}
