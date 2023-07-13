/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Component1OverridesProps = {
    Component1?: PrimitiveOverrideProps<ViewProps>;
    "\u30ED\u30B0\u30A4\u30F3\u30DC\u30BF\u30F3"?: PrimitiveOverrideProps<ViewProps>;
    "\u30ED\u30B0\u30A4\u30F3"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Component1Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Component1OverridesProps | undefined | null;
}>;
export default function Component1(props: Component1Props): React.ReactElement;
