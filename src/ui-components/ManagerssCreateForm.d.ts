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
export declare type ManagerssCreateFormInputValues = {
    ManagersName?: string;
    Assistant?: string;
};
export declare type ManagerssCreateFormValidationValues = {
    ManagersName?: ValidationFunction<string>;
    Assistant?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ManagerssCreateFormOverridesProps = {
    ManagerssCreateFormGrid?: FormProps<GridProps>;
    ManagersName?: FormProps<TextFieldProps>;
    Assistant?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ManagerssCreateFormProps = React.PropsWithChildren<{
    overrides?: ManagerssCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ManagerssCreateFormInputValues) => ManagerssCreateFormInputValues;
    onSuccess?: (fields: ManagerssCreateFormInputValues) => void;
    onError?: (fields: ManagerssCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ManagerssCreateFormInputValues) => ManagerssCreateFormInputValues;
    onValidate?: ManagerssCreateFormValidationValues;
}>;
export default function ManagerssCreateForm(props: ManagerssCreateFormProps): React.ReactElement;
