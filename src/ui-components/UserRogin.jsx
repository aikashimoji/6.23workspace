/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import Component1 from "./Component1";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Collection } from "@aws-amplify/ui-react";
export default function UserRogin(props) {
  const { items, overrideItems, overrides, ...rest } = props;
  return (
    <Collection
      type="list"
      isSearchable={true}
      isPaginated={true}
      searchPlaceholder="Search..."
      direction="column-reverse"
      justifyContent="stretch"
      items={items || []}
      {...getOverrideProps(overrides, "UserRogin")}
      {...rest}
    >
      {(item, index) => (
        <Component1
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></Component1>
      )}
    </Collection>
  );
}
