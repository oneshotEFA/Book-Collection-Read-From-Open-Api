import { Redirect, Stack ,Slot} from "expo-router";
import { useAuth } from "@clerk/clerk-expo";

export default function AuthRoutesLayout() {
  const { isSignedIn } = useAuth();

  // if (isSignedIn) {
  //   return <Redirect href={"/sign-in"} />;
  // }

  return (
    <Slot/>
  );
}
