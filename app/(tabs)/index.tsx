import { Link, useRouter } from "expo-router";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  Image,
  Switch,
} from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

import SearchBar from "../componets/SearchBar";

import { Fetchmovies } from "@/Service/apicall";
import { useBookFetcher } from "@/Service/trialapi";
import { useContext, useEffect, useState } from "react";
import { all_images } from "@/assets/images/image";
import ICONS from "react-native-vector-icons/Ionicons";
import TouchableLable from "../componets/Elements";
import { ThemeContext } from "@/them/theme";
import AlertComponent from "../componets/AlretComponet";

export default function Index() {
  const router = useRouter();
  const [alert, setalert] = useState(false);
  const { dark, setdark } = useContext(ThemeContext);
  const color = dark ? "white" : "black";
  const [search, setSearch] = useState([]);
  const { value, error, load, fetchBook, setError } = useBookFetcher();
  const SkeletonItem = () => {
    return (
      <View
        className={` m-3 w-[95%]  h-[100px] gap-3 justify-center rounded-[20px] ${
          color === "white" ? "bg-white" : "bg-third"
        }`}
      >
        <View
          style={{
            height: 20,
            backgroundColor: dark ? "#98cae1" : "#98cae1",
            marginBottom: 10,
            borderRadius: 5,
          }}
          className={`ml-3 mt-10 h-20 mb-10 mr-3 text-xl`}
        />
        <View
          style={{
            height: 15,
            width: "80%",
            backgroundColor: dark ? "#98cae1" : "#98cae1",
            borderRadius: 5,
          }}
          className={`ml-3 mb-10 mr-3 text-xl`}
        />
      </View>
    );
  };

  useEffect(() => {
    setSearch([]);
  }, []);
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((prev) => {
      const newValue = !prev;
      setdark(newValue);
      return newValue;
    });
  };

  useEffect(() => {
    if (error) {
      setalert(true);
    }
  }, [error]);
  return (
    <View className={`flex-1 ${color === "white" ? "bg-primary" : "bg-four"}`}>
      <AlertComponent
        errordetail={error}
        visible={alert}
        onCancel={() => setalert(false)}
        onRetry={() => {
          setError("");
          fetchBook();
          setalert(false);
        }}
      />
      <SafeAreaView>
        <View className={"justify-center items-center "}>
          {/* <Image className="size-12 object-contain" source={all_images.logo} /> */}
          <ICONS name="book" color="white" size={65} />
          <Text
            className={`${color === "white" ? "text-white" : "text-black"}`}
          >
            Book Collection
          </Text>
          <Switch
            className="left-40 -top-20"
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View className={" w-full items-center "}>
          <SearchBar
            focus={false}
            onPress={() => {
              router.push("/(tabs)/search");
            }}
            placeholder={"Search Book..."}
          />
        </View>
        {load ? (
          <>
            {/* <ActivityIndicator
              className="mt-60 items-center justify-center"
              color="white"
              size={50}
            /> */}
            <FlatList
              showsVerticalScrollIndicator={false}
              className={"m-5"}
              data={[1, 2, 3, 4, 5]}
              keyExtractor={(item, index) => index.toString()}
              renderItem={() => <SkeletonItem />}
            />
          </>
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            className={"m-5"}
            contentContainerStyle={{ paddingBottom: 130 }}
            data={value}
            keyExtractor={(itemss) => itemss.id}
            ListHeaderComponent={
              <Text
                className={` m-5 font-extrabold text-white text-xl ${
                  color === "white" ? "text-white" : "text-white"
                }`}
              >
                Popular Books This Week
              </Text>
            }
            ListFooterComponent={
              <Text
                className={` mt-10 ${
                  color === "white" ? "text-white" : "text-black"
                }`}
              ></Text>
            }
            numColumns={1}
            renderItem={({ item }) => (
              <TouchableLable
                color={color}
                title={item.authors[0]?.name ?? "Unknown Author"}
                detail={item.title}
                linesTitle={1}
                linesDetail={2}
                textUrl={
                  item.formats["text/plain; charset=us-ascii"] ||
                  item.formats["text/plain; charset=utf-8"]
                }
              />
            )}
          />
        )}
      </SafeAreaView>
    </View>
  );
}
