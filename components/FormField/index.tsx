import {FormControl, TextField} from "@material-ui/core";
import styles from "../pages/ProfilePage/ProfilePage.module.scss";
import React from "react";
import {UseFormRegister} from "react-hook-form";

type Props = {
    error?: string;
    autocomplete?: string;
    name?: string;
    placeholder?: string;
    label?: string;
    type?: string;
    readOnly?: boolean;
    register?: UseFormRegister<any>;
    textarea?: boolean;
    className?: string;
    onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    value?: string | number;
    testId?: string;
    defaultValue?: string;
    formFieldsRef?: boolean;
    max?: number;
    min?: number;
    suffix?: React.ReactNode;
    disabled?: boolean;
    prefix?: string;
    showError?: boolean;
}

export const FormField = ({ register, error, label }: Props) => {
    return (
        <FormControl className={styles.formControl}>
            <TextField
                {...register('name')}
                className={styles.root}
                InputProps={{className: styles.input}}
                InputLabelProps={{className: styles.text}}
                label={label}
                variant="standard"
                error={!!error}
                helperText={error}
            />
        </FormControl>
    )
}
