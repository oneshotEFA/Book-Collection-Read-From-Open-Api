import { View, Text } from "react-native";
import React from "react";
import SearchBar from "../componets/SearchBar";
import { SafeAreaView } from "react-native-safe-area-context";
import ICONS from "react-native-vector-icons/Ionicons";
const Search = () => {
    
  return (
    <SafeAreaView className="bg-secondary flex-1">
      <View className="justify-center items-center">
        <ICONS name="book" color="white" size={65} />
        <Text className={`text-white m-3 `}>Book Collection</Text>
        <View className="w-full items-center">
          <SearchBar
            focus={true}
            onPress={() => {}}
            placeholder="Search Book.."
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Search;