import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }} >
      <Stack.Screen name="authentication/Login" />
      <Stack.Screen name="authentication/Registration" />
      <Stack.Screen name="(tabs)" />
     </Stack>
  );
}
