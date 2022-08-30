import { View, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

export default function Card({ children }) {
  return <View style={styles.inputContainer}>{children}</View>;
}

const styles = StyleSheet.create({
  inputContainer: {
    // justifyContent: 'center',
    alignItems: "center",
    marginHorizontal: 24,
    padding: 16,
    marginTop: 36,
    backgroundColor: Colors.charlie500,
    borderRadius: 8,
    elevation: 4, // adroid only
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
