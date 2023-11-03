import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import { SafeAreaView, Text } from "react-native";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { COLORS, icons, images, SIZES } from "../constants";

import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";

function Home() {
  // define our router
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <View>
        {/* navigation menu */}
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: COLORS.lightWhite },
            headerShadowVisible: false,
            headerLeft: () => (
              <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
            ),
            headerRight: () => (
              <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
            ),
            headerTitle: "",
          }}
        />
      </View>

      {/* content section */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome />

          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
