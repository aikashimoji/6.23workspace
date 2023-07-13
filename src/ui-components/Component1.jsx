/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Component1(props) {
  const { overrides, ...rest } = props;
  const OnClick = useNavigateAction({
    type: "url",
    url: "https://sites.google.com/bd.k-cloud90.biz/kyuyo-rfl/home",
  });
  return (
    <View
      width="233px"
      height="44px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Component1")}
      {...rest}
    >
      <View
        width="233px"
        height="44px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        borderRadius="15px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(87,9,255,1)"
        onClick={() => {
          OnClick();
        }}
        {...getOverrideProps(
          overrides,
          "\u30ED\u30B0\u30A4\u30F3\u30DC\u30BF\u30F3"
        )}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="24.204544067382812px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="86px"
        height="22px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="25%"
        bottom="25%"
        left="33.48%"
        right="29.61%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="ログイン"
        {...getOverrideProps(overrides, "\u30ED\u30B0\u30A4\u30F3")}
      ></Text>
    </View>
  );
}
