/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NoteCreateFormInputValues = {
    name?: string;
    description?: string;
    agegroup?: string;
    gender?: string;
    location?: string;
    date?: string;
    time?: string;
    isdeleted?: string;
    realdate?: string;
    realtime?: string;
    contact?: string;
    pitch?: string;
};
export declare type NoteCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    agegroup?: ValidationFunction<string>;
    gender?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
    time?: ValidationFunction<string>;
    isdeleted?: ValidationFunction<string>;
    realdate?: ValidationFunction<string>;
    realtime?: ValidationFunction<string>;
    contact?: ValidationFunction<string>;
    pitch?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NoteCreateFormOverridesProps = {
    NoteCreateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    description?: FormProps<TextFieldProps>;
    agegroup?: FormProps<TextFieldProps>;
    gender?: FormProps<TextFieldProps>;
    location?: FormProps<TextFieldProps>;
    date?: FormProps<TextFieldProps>;
    time?: FormProps<TextFieldProps>;
    isdeleted?: FormProps<TextFieldProps>;
    realdate?: FormProps<TextFieldProps>;
    realtime?: FormProps<TextFieldProps>;
    contact?: FormProps<TextFieldProps>;
    pitch?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NoteCreateFormProps = React.PropsWithChildren<{
    overrides?: NoteCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NoteCreateFormInputValues) => NoteCreateFormInputValues;
    onSuccess?: (fields: NoteCreateFormInputValues) => void;
    onError?: (fields: NoteCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: NoteCreateFormInputValues) => NoteCreateFormInputValues;
    onValidate?: NoteCreateFormValidationValues;
}>;
export default function NoteCreateForm(props: NoteCreateFormProps): React.ReactElement;
