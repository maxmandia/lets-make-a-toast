import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MainRoute from "./src/routes/MainRoute";
export default function App() {
  return (
    <>
      <NavigationContainer>
        <StatusBar style="light" />
        <MainRoute />
      </NavigationContainer>
    </>
  );
}
