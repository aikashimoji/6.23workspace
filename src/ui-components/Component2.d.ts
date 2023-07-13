/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Component2OverridesProps = {
    Component2?: PrimitiveOverrideProps<ViewProps>;
    "\u30E6\u30FC\u30B6\u30FC"?: PrimitiveOverrideProps<IconProps>;
    "\u30E6\u30FC\u30B6\u30FCID"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Component2Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Component2OverridesProps | undefined | null;
}>;
export default function Component2(props: Component2Props): React.ReactElement;
