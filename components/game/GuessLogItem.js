import { View, Text, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

export default function GuessLogItem({ round, guess }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.text}>#{round}</Text>
      <Text style={styles.text}>Opponent's Guess: {guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.delta500,
    borderWidth: 3,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.bravo500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4, //android
    // shadowColor: "black", // iOS
    // shadowOffset: { width: 0, height: 0 },
    // shadowOpacity: 0.25,
    // shadowRadius: 3,
  },
  text: {
    fontFamily: "open-sans-bold",
    color: Colors.delta500,
  },
});
