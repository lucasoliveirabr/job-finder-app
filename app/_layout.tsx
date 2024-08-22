import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Stack } from "expo-router";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded, error] = useFonts({
    "DMBold": require("../assets/fonts/DMSans-Bold.ttf"),
    "DMMedium": require("../assets/fonts/DMSans-Medium.ttf"),
    "DMRegular": require("../assets/fonts/DMSans-Regular.ttf")
  });

  useEffect(() => {
    if (fontsLoaded || error) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

  return <Stack />
}

export default Layout;