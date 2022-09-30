import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useCallback, useEffect } from "react";
import theme from "../theme";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

const HomeScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    "SF-Bold": require("../fonts/SF-Pro-Rounded-Bold.otf"),
    "SF-Med": require("../fonts/SF-Pro-Rounded-Medium.otf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView onLayout={onLayoutRootView} style={styles.container}>
      <Text style={styles.textTop}>Let’s Make a</Text>
      <Text style={styles.textMiddle}>
        Toast <Text style={styles.emoji}> 🍞 🥂</Text>
      </Text>
      <Text style={styles.desc}>A culinary conception by Ryan Schwary.</Text>
      <TouchableOpacity
        style={styles.btnContainer}
        onPress={() => navigation.navigate("MenuScreen")}
      >
        <Text style={styles.btnText}>View menu</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnContainer2}>
        <Text style={styles.btnText2}>Request a toast</Text>
      </TouchableOpacity>
      <Text style={styles.copyright}>© Let's Make A Toast 2022</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.background,
    flex: 1,
    alignItems: "center",
  },
  textTop: {
    marginTop: "30%",
    fontSize: 44,
    fontFamily: "SF-Bold",
    color: "#5F4848",
  },
  textMiddle: {
    marginTop: 10,
    fontSize: 59,
    fontFamily: "SF-Bold",
    color: "#5F4848",
  },
  emoji: {
    fontSize: 40,
    marginBottom: "1%",
  },
  desc: {
    color: "#5F4848",
    fontSize: 19,
    marginTop: 20,
    fontFamily: "SF-Med",
  },
  btnContainer: {
    marginTop: "20%",
    backgroundColor: theme.button,
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 50,
  },
  btnText: {
    color: "white",
    fontSize: 22,
    fontFamily: "SF-Bold",
  },
  btnContainer2: {
    marginTop: "10%",
    backgroundColor: theme.button,
    paddingHorizontal: 28,
    paddingVertical: 10,
    borderRadius: 50,
  },
  btnText2: {
    color: "white",
    fontSize: 22,
    fontFamily: "SF-Bold",
  },
  copyright: {
    position: "absolute",
    bottom: "4%",
    color: "#5F4848",
  },
});
