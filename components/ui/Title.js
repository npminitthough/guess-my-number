import { Text, StyleSheet, Platform } from "react-native";

import Colors from "../../constants/colors";

// if using Title.ios.js and Title.android.js you can just use those and
// React Native will load the appropricate file depending on the platform

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: Colors.bravo500,
    textAlign: "center",
    // borderWidth: Platform.OS === "android" ? 2 : 0,
    borderWidth: Platform.select({ ios: 0, android: 2 }), // alternative way
    borderColor: Colors.bravo500,
    padding: 12,
    fontFamily: "open-sans-bold",
    maxWidth: "80%",
    width: 300,
  },
});
