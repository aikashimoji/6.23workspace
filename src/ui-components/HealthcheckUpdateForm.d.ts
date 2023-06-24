/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Healthcheck } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type HealthcheckUpdateFormInputValues = {
    date?: string;
    time?: string;
    place?: string;
    option?: string;
    password?: string;
};
export declare type HealthcheckUpdateFormValidationValues = {
    date?: ValidationFunction<string>;
    time?: ValidationFunction<string>;
    place?: ValidationFunction<string>;
    option?: ValidationFunction<string>;
    password?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HealthcheckUpdateFormOverridesProps = {
    HealthcheckUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    time?: PrimitiveOverrideProps<TextFieldProps>;
    place?: PrimitiveOverrideProps<TextFieldProps>;
    option?: PrimitiveOverrideProps<TextFieldProps>;
    password?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type HealthcheckUpdateFormProps = React.PropsWithChildren<{
    overrides?: HealthcheckUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    healthcheck?: Healthcheck;
    onSubmit?: (fields: HealthcheckUpdateFormInputValues) => HealthcheckUpdateFormInputValues;
    onSuccess?: (fields: HealthcheckUpdateFormInputValues) => void;
    onError?: (fields: HealthcheckUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: HealthcheckUpdateFormInputValues) => HealthcheckUpdateFormInputValues;
    onValidate?: HealthcheckUpdateFormValidationValues;
} & React.CSSProperties>;
export default function HealthcheckUpdateForm(props: HealthcheckUpdateFormProps): React.ReactElement;
