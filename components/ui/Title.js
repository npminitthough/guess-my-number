import { Text, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: Colors.bravo500,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.bravo500,
    padding: 12,
    fontFamily: "open-sans-bold",
  },
});
