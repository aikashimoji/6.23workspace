/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Desktop1OverridesProps = {
    Desktop1?: PrimitiveOverrideProps<ViewProps>;
    Zone1?: PrimitiveOverrideProps<ViewProps>;
    Zone2?: PrimitiveOverrideProps<ViewProps>;
    Login_button?: PrimitiveOverrideProps<ViewProps>;
    Passward?: PrimitiveOverrideProps<ViewProps>;
    ID?: PrimitiveOverrideProps<ViewProps>;
    "\u30B9\u30BF\u30C3\u30D5No."?: PrimitiveOverrideProps<TextProps>;
    "\u30D1\u30B9\u30EF\u30FC\u30C9"?: PrimitiveOverrideProps<TextProps>;
    "\u5065\u5EB7\u8A3A\u65AD\u4E88\u7D04\u7BA1\u7406\u30C4\u30FC\u30EB"?: PrimitiveOverrideProps<TextProps>;
    "Frame 10"?: PrimitiveOverrideProps<FlexProps>;
    "Log in"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Desktop1Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Desktop1OverridesProps | undefined | null;
}>;
export default function Desktop1(props: Desktop1Props): React.ReactElement;
