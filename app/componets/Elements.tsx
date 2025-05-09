import { router } from "expo-router";
import React from "react";
import {
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
  View,
  Pressable,
} from "react-native";
import { BookMarked, PenLine, Download } from "lucide-react-native";
type LabelField = {
  title: any;
  download_count: number;
  detail: any;
  textUrl: string;
  color: string;
  linesTitle: number;
  linesDetail: number;
  language: string;
} & TouchableOpacityProps;

export default function TouchableLabel({
  title,
  detail,
  textUrl,
  color,
  language,
  download_count,
  linesTitle,
  linesDetail,
  ...props
}: LabelField) {
  const handleClick = () => {
    router.push({
      pathname: "/books/books",
      params: {
        url: encodeURIComponent(textUrl),
        name: title,
        info: detail,
      },
    });
  };

  const isLight = color === "white";
  const bgColor = isLight ? "bg-white" : "bg-third";
  const textColor = isLight ? "text-black" : "text-white";
  const subTextColor = isLight ? "text-gray-600" : "text-gray-300";

  return (
    <Pressable
      onPress={handleClick}
      {...props}
      className={`m-3 w-[95%] rounded-2xl p-4 shadow-md ${bgColor}`}
    >
      <View className="flex-row justify-between">
        <Text
          numberOfLines={linesTitle}
          className={`text-xl font-bold mb-1 ${textColor} w-[89%]`}
        >
          {detail}
        </Text>
        <View
          onStartShouldSetResponder={() => true}
          onResponderRelease={() => {
            console.log("Bookmarked!");
          }}
          className="p-2"
        >
          <BookMarked color={"brown"} />
        </View>
      </View>
      <View className="flex-row">
        <PenLine color={"white"} size={15} />
        <Text
          numberOfLines={linesDetail}
          className={`ml-2 text-sm mb-3 ${subTextColor}`}
        >
          {title}
        </Text>
      </View>

      <View className="flex-row justify-between">
        <View className="flex-row">
          <Download color={"#86efac"} size={15} />
          <Text className={` ml-1 text-xs text-green-300 ${subTextColor}`}>
            {download_count}
          </Text>
        </View>

        <Text className={`text-xs text-green-300 ${subTextColor}`}>
          Language: {language}
        </Text>
      </View>
    </Pressable>
  );
}
