import { router } from "expo-router";
import React from "react";
import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
type labelfield = {
  title: any;
  detail: any;
  textUrl: string;
  color: string;
  linesTitle: number;
  linesDetail: number;
} & TouchableOpacityProps;
export default function TouchableLable({
  title,
  detail,
  textUrl,
  color,
  linesTitle,
  linesDetail,
  ...props
}: labelfield) {
  const handleclick = () => {
    router.push({
      pathname: "/books/books",
      params: { url: encodeURIComponent(textUrl), name: title, info: detail },
    });
  };

  return (
    <>
      <TouchableOpacity
        onPress={handleclick}
        {...props}
        className={` m-3 w-[95%]  h-[100px] gap-3 justify-center rounded-[10px] ${
          color === "white" ? "bg-white" : "bg-third"
        }`}
      >
        <Text
          numberOfLines={linesTitle}
          className={`ml-3 text-xl font-extrabold ${
            color === "white" ? "text-black" : "text-white"
          }`}
        >
          {title}
        </Text>
        <Text
          numberOfLines={linesDetail}
          className={`ml-3 text-xl ${
            color === "white" ? "text-black" : "text-white"
          }`}
        >
          {detail}
        </Text>
      </TouchableOpacity>
    </>
  );
}
