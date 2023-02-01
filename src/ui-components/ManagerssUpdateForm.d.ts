/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Managerss } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ManagerssUpdateFormInputValues = {
    ManagersName?: string;
    Assistant?: string;
};
export declare type ManagerssUpdateFormValidationValues = {
    ManagersName?: ValidationFunction<string>;
    Assistant?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ManagerssUpdateFormOverridesProps = {
    ManagerssUpdateFormGrid?: FormProps<GridProps>;
    ManagersName?: FormProps<TextFieldProps>;
    Assistant?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ManagerssUpdateFormProps = React.PropsWithChildren<{
    overrides?: ManagerssUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    managerss?: Managerss;
    onSubmit?: (fields: ManagerssUpdateFormInputValues) => ManagerssUpdateFormInputValues;
    onSuccess?: (fields: ManagerssUpdateFormInputValues) => void;
    onError?: (fields: ManagerssUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ManagerssUpdateFormInputValues) => ManagerssUpdateFormInputValues;
    onValidate?: ManagerssUpdateFormValidationValues;
}>;
export default function ManagerssUpdateForm(props: ManagerssUpdateFormProps): React.ReactElement;
