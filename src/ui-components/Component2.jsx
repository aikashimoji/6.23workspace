/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function Component2(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="240px"
      height="38px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Component2")}
      {...rest}
    >
      <Icon
        width="240px"
        height="38px"
        viewBox={{ minX: 0, minY: 0, width: 240, height: 38 }}
        paths={[
          {
            d: "M0 15C0 6.71573 6.71573 0 15 0L225 0C233.284 0 240 6.71573 240 15L240 23C240 31.2843 233.284 38 225 38L15 38C6.71573 38 0 31.2843 0 23L0 15Z",
            fill: "rgba(255,255,255,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "\u30E6\u30FC\u30B6\u30FC")}
      ></Icon>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="400"
        color="rgba(155,155,155,1)"
        lineHeight="24.204544067382812px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="109px"
        height="22px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="21.05%"
        bottom="21.05%"
        left="4.58%"
        right="50%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="ユーザーID"
        {...getOverrideProps(overrides, "\u30E6\u30FC\u30B6\u30FCID")}
      ></Text>
    </View>
  );
}
