import { useAuth, useClerk, useSignIn } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import CustomizableInput from "../componets/input";
import AlertComponent from "../componets/AlretComponet";
import { Camera, Book, BookOpenText } from "lucide-react-native";
export default function Page() {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();
  const { isSignedIn } = useAuth();
  const { signOut } = useClerk();
  const [loading, setloading] = useState(false);

  // Handle the submission of the sign-in formc

  //include

  const handle = async (data: any) => {
    if (isSignedIn) {
      console.log("Already signed in. Signing out first...");
      await signOut(); //
    }
    if (!isLoaded) {
      console.log("SignIn object is not ready yet");
      return;
    }

    setloading(true);
    try {
      const result = await signIn?.create({
        identifier: data.email,
        password: data.password,
      });
      setloading(false);
      if (result.status === "complete") {
        setActive({ session: result.createdSessionId });
        router.replace("/(tabs)");
      }
    } catch (err) {
      setloading(false);
      console.log("error is here :", err);
    }
  };

  const { control, handleSubmit } = useForm({});

  return (
    <SafeAreaView className="flex-1">
      <AlertComponent visible={loading} onCancel={null} onRetry={null} />
      <View className=""></View>
      <View className="flex-1 ">
        <View className=" mt-[100px] items-center p-5 mb-[20px]">
          <BookOpenText color="#60a5fa" size={70} />
          <Text className="text-blue-400 text-xl font-bold">
            Book Collections for you
          </Text>
        </View>
        <View className="justify-center items-center">
          <Text className="text-four font-extrabold text-2xl mb-5">Login</Text>
          <CustomizableInput
            name="email"
            control={control}
            placeholderTextColor={"#98cae9"}
            placeholder="Email"
          />
          <CustomizableInput
            placeholderTextColor={"#98cae9"}
            name="password"
            control={control}
            placeholder="Password"
            secureTextEntry
          />

          <TouchableOpacity
            className="p-3 mb-3 w-[320px] justify-center items-center bg-blue-400 rounded-[8px]"
            onPress={handleSubmit(handle)}
          >
            <Text className="text-white">Login</Text>
          </TouchableOpacity>
          <View style={{ display: "flex", flexDirection: "row", gap: 3 }}>
            <Text>Don't have an account?</Text>
            <Link href="/sign-up">
              <Text>Sign up</Text>
            </Link>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
