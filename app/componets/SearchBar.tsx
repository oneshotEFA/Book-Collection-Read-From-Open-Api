import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import ICONS from "react-native-vector-icons/Ionicons";

interface Props {
  placeholder: string;
  onPress: () => void;
  focus:boolean
}
const SearchBar = ({ placeholder, onPress, focus }: Props) => {
  const [value, setValue] = useState("");
 
  return (
    <View className={" w-[90%] h-10 bg-white rounded  flex-row"}>
      <ICONS
        className={"mr-1.5 ml-1 mt-2"}
        name={"search"}
        color={"black"}
        size={18}
      />
      <TextInput
        autoFocus={focus}
        placeholder={placeholder}
        onChangeText={(value) => setValue(value)}
        onPress={onPress}
        value={value}
        placeholderTextColor={"black"}
      />
    </View>
  );
};

export default SearchBar;
