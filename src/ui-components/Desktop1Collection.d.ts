/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Desktop1Props } from "./Desktop1";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Desktop1CollectionOverridesProps = {
    Desktop1Collection?: PrimitiveOverrideProps<CollectionProps>;
    Desktop1?: Desktop1Props;
} & EscapeHatchProps;
export declare type Desktop1CollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => Desktop1Props;
} & {
    overrides?: Desktop1CollectionOverridesProps | undefined | null;
}>;
export default function Desktop1Collection(props: Desktop1CollectionProps): React.ReactElement;
