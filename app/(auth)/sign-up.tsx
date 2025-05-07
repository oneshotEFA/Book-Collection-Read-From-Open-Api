import * as React from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSignUp } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import CustomizableInput from "../componets/input";
import { useForm } from "react-hook-form";

export default function SignUpScreen() {
  const { signUp, isLoaded } = useSignUp();
  const router = useRouter();

  //include

  const { control, handleSubmit } = useForm({});
  const handle = async (data: any) => {
    if (!isLoaded) console.log("eroor is here");
    try {
      const response = await signUp?.create({
        emailAddress: data.email,
        password: data.password,
      });

      console.log("User signed up successfully", response);
      router.replace("/(tabs)"); // Log the successful response
    } catch (error) {
      console.log("Error during sign-up:", error);
    }
  };
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 justify-center items-center">
        <Text className="text-blue-400  text-2xl font-extrabold mb-5">Sign Up</Text>
        <CustomizableInput
          placeholderTextColor={"#98cae9"}
          name="firstName"
          control={control}
          placeholder="First name"
        />
        <CustomizableInput
          placeholderTextColor={"#98cae9"}
          name="lastName"
          control={control}
          placeholder="Last name"
        />
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
          className="p-3 mb-10 w-[320px] justify-center items-center bg-four rounded-[8px]"
          onPress={handleSubmit(handle)}
        >
          <Text className="text-white">Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            signUp?.authenticateWithRedirect({
              strategy: "oauth_google",
              redirectUrl: "myapp://tabs/index",
              redirectUrlComplete: "myapp://tabs/index",
            })
          }
          className="p-3 mb-3 w-[320px] justify-center items-center bg-blue-500 rounded-[8px]"
        >
          <Text className="text-white">Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            signUp?.authenticateWithRedirect({
              strategy: "oauth_apple",
              redirectUrl: "myapp://tabs/index", // Add your redirect URL
              redirectUrlComplete: "myapp://tabs/index",
            })
          }
          className="p-3 mb-3 w-[320px] justify-center items-center bg-black rounded-[8px]"
        >
          <Text className="text-white">Continue with Apple</Text>
        </TouchableOpacity>

        <View style={{ display: "flex", flexDirection: "row", gap: 3 }}>
          <Text>Already have an account?</Text>
          <Link href="/sign-in">
            <Text>Sign in</Text>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}
