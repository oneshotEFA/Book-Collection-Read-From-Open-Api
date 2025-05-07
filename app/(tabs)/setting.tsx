import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import SignOutButton from "../componets/signoutButton";
import { all_images } from "@/assets/images/image";
import {
  Palette,
  GlobeLock,
  HeartPlus,
  LogOut,
  User,
  CircleHelp,
  ExternalLink,
} from "lucide-react-native";

const Setting = () => {
  const Underline = ({ percent }: any) => {
    return (
      <View
        className={`border-black border-b opacity-30 mt-3  w-[${percent}%] `}
      />
    );
  };
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView>
        <View className="justify-center items-center p-3 fixed">
          <Text className=" font-extrabold text-xl mb-3">Settings</Text>
          {/* <View className="border-black border-b opacity-30  w-[90%] " /> */}
        </View>

        <View className="justify-center   items-center h-[200px]  rounded-2xl bg-gray-200 m-8 mt-0 mb-0">
          <View className=" p-8 rounded-lg">
            {/* <Image source={all_images.logo} /> */}
            <User className="" color={"black"} size={90} />
            <Underline />
            <Text className=" mt-3 font-bold">Ephrem Mesfin </Text>
          </View>
        </View>
        <View className="">
          <View className=" rounded-2xl bg-gray-200 m-8 mb-0">
            <TouchableOpacity className="ml-10 p-5 ">
              <View className="flex-row">
                <User color={"blue"} />
                <Text className="font-bold ml-2">My Profile</Text>
              </View>
              <Underline percent={"90"} />
            </TouchableOpacity>
            <TouchableOpacity className="ml-10 p-5 ">
              <View className="flex-row">
                <Palette color="blue" />
                <Text className="font-bold ml-2">Themes</Text>
              </View>
              <Underline percent={"90"} />
            </TouchableOpacity>
            <TouchableOpacity className="ml-10 p-5 ">
              <View className="flex-row">
                <GlobeLock color={"blue"} />
                <Text className="font-bold ml-3">Privacy and Security</Text>
              </View>

              <Underline percent={"90"} />
            </TouchableOpacity>
          </View>
          <View className=" rounded-2xl bg-gray-200 m-8 mb-0">
            <TouchableOpacity className="ml-10 p-5 ">
              <View className="flex-row">
                <CircleHelp color={"blue"} />
                <Text className="font-bold ml-2">About</Text>
              </View>

              <Underline percent={"90"} />
            </TouchableOpacity>

            <TouchableOpacity className="ml-10 p-5 ">
              <View className="flex-row">
                <HeartPlus color={"brown"} />
                <Text className="font-bold ml-2">Support Us</Text>
              </View>

              <Underline percent={"90"} />
            </TouchableOpacity>
          </View>
          <View className=" rounded-2xl bg-gray-200 m-8 mb-0">
            <TouchableOpacity className="ml-10 p-5 ">
              <View className="flex-row">
                <LogOut color={"red"} />
                <View className="ml-2">
                  <SignOutButton />
                </View>
              </View>
              <Underline percent={"90"} />
            </TouchableOpacity>
            <TouchableOpacity className="ml-10 p-5 ">
              <View className="flex-row">
                <ExternalLink color={"blue"} />
                <Text className="font-bold ml-2">Share to friends</Text>
              </View>

              <Underline percent={"90"} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Setting;
