import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";

import * as Font from "expo-font";
import Back from "../../Svgs/Back";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { SelectList } from "react-native-dropdown-select-list";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
export default function NotificationsDetail() {
  const navigation = useNavigation();
  const [loaded, setloaded] = useState(false);

  const loadfonts = async () => {
    await Font.loadAsync({
      CircularStd: require("../../../assets/CircularStd.ttf"),
      "CircularStd-Bold": require("../../../assets/CircularStd-Bold.otf"),
      Montserrat: require("../../../assets/Montserrat.ttf"),
    });
    setloaded(true);
  };
  useEffect(() => {
    loadfonts();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.nav}>
        <TouchableOpacity>
          <View></View>
        </TouchableOpacity>
        {loaded ? <Text style={styles.text1}>Notifications</Text> : ""}
      </View>
      <View style={styles.greyline}></View>
      <Text style={styles.day}>Today</Text>
      <TouchableOpacity
        style={styles.buttoncontainer}
        onPress={() => navigation.navigate("Notification")}
      >
        <View style={{ display: "flex", flexDirection: "row" }}>
          <View style={styles.iconbox}>
            <MaterialCommunityIcons
              name="timer-sand-empty"
              size={24}
              color="#246BFD"
            />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {loaded ? (
              <Text style={styles.text4}>
                Dear resident your valet will arrive in...
              </Text>
            ) : (
              ""
            )}
            {loaded ? <Text style={styles.text5}>8:03 PM</Text> : ""}
          </View>
        </View>
        <Ionicons
          name="chevron-forward"
          size={24}
          color="#94A1B2"
          style={{
            position: "absolute",
            alignSelf: "flex-end",
            right: 20,
          }}
        />
      </TouchableOpacity>
      <Text style={styles.day}>10 Jan, 2022</Text>
      <TouchableOpacity
        style={styles.buttoncontainer}
        onPress={() => navigation.navigate("Notification")}
      >
        <View style={{ display: "flex", flexDirection: "row" }}>
          <View style={styles.iconbox2}>
            <MaterialCommunityIcons
              name="bus-school"
              size={24}
              color="#FD247F"
            />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {loaded ? (
              <Text style={styles.text4}>We are leaving in 10 minutes...</Text>
            ) : (
              ""
            )}
            {loaded ? <Text style={styles.text5}>2:00 PM</Text> : ""}
          </View>
        </View>
        <Ionicons
          name="chevron-forward"
          size={24}
          color="#94A1B2"
          style={{
            position: "absolute",
            alignSelf: "flex-end",
            right: 20,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttoncontainer}
        onPress={() => navigation.navigate("Notification")}
      >
        <View style={{ display: "flex", flexDirection: "row" }}>
          <View style={styles.iconbox}>
            <MaterialCommunityIcons
              name="timer-sand-empty"
              size={24}
              color="#246BFD"
            />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {loaded ? (
              <Text style={styles.text4}>
                Dear resident your valet will arrive in...
              </Text>
            ) : (
              ""
            )}
            {loaded ? <Text style={styles.text5}>8:03 PM</Text> : ""}
          </View>
        </View>
        <Ionicons
          name="chevron-forward"
          size={24}
          color="#94A1B2"
          style={{
            position: "absolute",
            alignSelf: "flex-end",
            right: 20,
          }}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  nav: {
    display: "flex",
    marginTop: 60,
  },
  text1: {
    alignSelf: "center",
    fontFamily: "CircularStd",
    fontSize: 16,
    position: "absolute",
  },
  back: {
    alignSelf: "flex-start",

    position: "absolute",

    left: 16,
  },
  greyline: {
    width: "100%",
    height: 1,
    backgroundColor: "#D6D6D6",
    marginTop: 50,
  },
  buttoncontainer: {
    width: "95%",
    height: 80,
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 12,
    backgroundColor: "white",

    elevation: 1,
    marginTop: 10,
  },
  text4: {
    fontFamily: "CircularStd",
    fontSize: 14,
    marginLeft: 10,
    marginTop: 4,
  },
  text5: {
    fontFamily: "CircularStd",
    fontSize: 12,
    marginLeft: 10,
    marginTop: 5,
    color: "#94A1B2",
  },
  iconbox: {
    width: 50,
    height: 50,
    backgroundColor: "rgba(36, 162, 253,0.1)",
    borderRadius: 12,
    marginLeft: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  iconbox2: {
    width: 50,
    height: 50,
    backgroundColor: "'rgba(253, 36, 127,0.1)'",
    borderRadius: 12,
    marginLeft: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  day: {
    fontSize: 14,
    fontFamily: "CircularStd",
    marginTop: 20,
    marginLeft: 10,
    color: "#94A1B2",
  },
});
