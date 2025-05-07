import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
import React, { useEffect } from "react";
import { Redirect, Tabs } from "expo-router";
import { all_images } from "@/assets/images/image";
import ICONS from "react-native-vector-icons/Ionicons";
import { useAuth } from "@clerk/clerk-expo";
const TabIcon = ({ foucs, title, img }: any) => {
  return (
    <>
      {foucs ? (
        <ImageBackground
          style={{
            width: 60,
            height: 40,
            backgroundColor: "98cae1",
            backgroundAttachment: "transparent",
            display: "flex",
            marginTop: 4,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
          }}
        >
          <ICONS name={img} size={35} color={"#212513"} />
          {/* <Text style={{ color: "white", fontSize: 8 }}>{title}</Text> */}
        </ImageBackground>
      ) : (
        <ImageBackground
          style={{
            width: 60,
            height: 40,
            display: "flex",
            marginTop: 4,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
          }}
        >
          <ICONS name={img} size={35} color={"#21516b"} />
        </ImageBackground>
      )}
    </>
  );
};

const _Layout = () => {
  const { isSignedIn, isLoaded } = useAuth();

  // if (!isLoaded) return <ActivityIndicator color={"black"} size={"large"} />; // Wait for auth state to load
  // if (!isLoaded || !isSignedIn) {
  //   return (
  //     <SafeAreaView className="flex-1 justify-center items-center">
  //       <Text>Loading authentication... Please wait.</Text>
  //       <ActivityIndicator className="mt-5" color={"black"} size={"large"} />
  //     </SafeAreaView>
  //   );
  // }

  // if (isSignedIn) {
  //   return <Redirect href="/sign-in" />;
  // }
  const style = StyleSheet.create({});
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "transparent",
          width: "100%",
          position: "absolute",
          borderTopWidth: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon foucs={focused} title={"Home"} img={"home"} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon foucs={focused} title={"Profile"} img={"person"} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon foucs={focused} title={"search1"} img={"search"} />
          ),
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon foucs={focused} title={"settings"} img={"settings"} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _Layout;
