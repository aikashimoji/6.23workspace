/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Component1Props } from "./Component1";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Component1CollectionOverridesProps = {
    Component1Collection?: PrimitiveOverrideProps<CollectionProps>;
    Component1?: Component1Props;
} & EscapeHatchProps;
export declare type Component1CollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => Component1Props;
} & {
    overrides?: Component1CollectionOverridesProps | undefined | null;
}>;
export default function Component1Collection(props: Component1CollectionProps): React.ReactElement;
