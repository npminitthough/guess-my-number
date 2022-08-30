import { Text, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

export default function InstructionText({ children, style }) {
  //mimicking cascading styles
  return <Text style={[styles.instructions, style]}>{children}</Text>; // style can overwrite styles.instructions
}

const styles = StyleSheet.create({
  instructions: {
    fontSize: 20,
    color: Colors.bravo500,
    fontFamily: "open-sans",
  },
});
