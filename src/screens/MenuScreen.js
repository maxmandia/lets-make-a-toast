import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import theme from "../theme";
const MenuScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>MenuScreen</Text>
    </SafeAreaView>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },
});
