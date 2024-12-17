import { useEffect, useState } from 'react';
import { Tabs } from "expo-router";
import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { ActivityIndicator, View } from 'react-native';
import { TabBar } from '@/components/TabBar';
export default function TabLayout() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync(FontAwesome.font);
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    ); // Show a loading spinner while fonts are loading
  }

  return (
    <Tabs  screenOptions={{headerShown:false}} tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen
        name="(tabs)/AllRequests"
      />
      <Tabs.Screen
        name="(tabs)/NewRequest"
      />
      
    </Tabs>
  );
}