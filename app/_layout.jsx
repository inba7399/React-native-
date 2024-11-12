import { Stack } from "expo-router";
import {useFonts} from "expo-font"

export default function RootLayout() {

  useFonts({
    'Poppins':require('./../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-medium':require('./../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-bold':require('./../assets/fonts/Poppins-Bold.ttf')
  })

  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="login/index" options={{headerShown:false}} />
    </Stack>
  );
}
