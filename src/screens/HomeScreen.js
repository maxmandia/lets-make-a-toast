import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import theme from "../theme";
const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>hey</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.background,
    flex: 1,
  },
});
