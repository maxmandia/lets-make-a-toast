import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
} from "react-native";
import React from "react";
import theme from "../theme";
import { menuItems } from "../menuItems";
import ToastIMG from "../../assets/toast.jpg";
const MenuScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header} />
        <Image style={styles.img} source={ToastIMG} />
        <FlatList
          data={menuItems}
          renderItem={({ item, index }) => {
            return <View key={index}>{<Text>{item.name}</Text>}</View>;
          }}
        />
      </View>
    </>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },
  header: {
    backgroundColor: theme.button,
    width: "100%",
    height: "15%",
  },
  img: {
    position: "absolute",
    textAlign: "center",
    top: "11%",
    alignSelf: "center",
    height: 110,
    width: 110,
  },
});
