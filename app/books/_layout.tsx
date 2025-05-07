import { Redirect, Stack, Slot } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";

export default function AuthRoutesLayout() {
  return (
    <Stack>
      <Stack.Screen name="books" options={{ headerShown: false }} />
    </Stack>
  );
}
