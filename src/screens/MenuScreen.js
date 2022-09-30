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
import ToastIMG from "../../assets/toast.svg";
const MenuScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header} />
        <View style={styles.restContainer}>
          <ToastIMG width={110} height={110} />
          <Text style={styles.restName}>Let's Make a Toast!</Text>
          <Text style={styles.restDesc}>
            Serving up all things toast since 1998. You’d toast to that, right?
          </Text>
        </View>
        <View style={styles.flContainer}>
          <FlatList
            contentContainerStyle={{
              paddingBottom: "40%",
            }}
            data={menuItems}
            renderItem={({ item, index }) => {
              return (
                <View style={styles.itemContainer} key={index}>
                  <Text style={styles.name}>{item.name}</Text>
                  <View style={styles.itemDesc}>
                    <Text style={styles.price}>{item.price}</Text>
                    <View style={styles.dot} />
                    <Text style={styles.creator}>
                      created by {item.creator}
                    </Text>
                  </View>
                  <Text style={styles.descText}>{item.desc}</Text>
                </View>
              );
            }}
          />
        </View>
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
  restContainer: {
    position: "absolute",
    alignItems: "center",
    top: "8%",
    alignSelf: "center",
  },
  restName: {
    marginTop: "2%",
    fontFamily: "SF-Bold",
    color: "#5F4848",
    fontSize: 32,
  },
  restDesc: {
    marginTop: "1%",
    fontFamily: "SF-Med",
    color: "#5F4848",
    fontSize: 18,
    width: "60%",
    textAlign: "center",
  },

  //flatlist
  flContainer: {
    marginTop: "45%",
    marginLeft: "8%",
  },
  itemContainer: {
    marginBottom: "8%",
  },
  name: {
    color: "#5F4848",
    fontFamily: "SF-Bold",
    fontSize: 18,
  },
  itemDesc: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "3%",
    textAlign: "left",
  },
  price: {
    color: "#5F4848",
    fontFamily: "SF-Med",
  },
  dot: {
    height: 5,
    width: 5,
    borderRadius: 5,
    backgroundColor: "#5F4848",
    marginLeft: "2%",
  },
  creator: {
    color: "#5F4848",
    textAlign: "left",
    marginLeft: "2%",
    fontStyle: "italic",
    // fontFamily: "SF-Med",
  },
  descText: {
    color: "#5F4848",
    marginTop: "3%",
    width: "91%",
  },
});
