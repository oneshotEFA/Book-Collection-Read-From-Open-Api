import { Stack } from "expo-router";
import "./global.css";
import { ThemeProvider } from "@/them/theme";
import { ClerkProvider } from "@clerk/clerk-expo";
// import { tokenCache } from "@clerk/clerk-expo/token-cache";
import * as SecureStore from "expo-secure-store";

export default function RootLayout() {
  const tokenCache = {
    getToken: (key: string) => SecureStore.getItemAsync(key),
    saveToken: (key: string, value: string) =>
      SecureStore.setItemAsync(key, value),
    deleteToken: (key: string) => SecureStore.deleteItemAsync(key),
  };
  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <ThemeProvider>
        <Stack>
          <Stack.Screen
            name="(tabs)"
            options={{ headerShown: false, title: "Home" }}
          />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen
            name="books"
            options={{
              headerShown: true,
              title: "Text-Books",
              headerStyle: { backgroundColor: "#98cae1" },
            }}
          />
        </Stack>
      </ThemeProvider>
    </ClerkProvider>
  );
}
