import { View, Text, Pressable, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

export default function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.pressed, styles.buttonInnerContainer]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: Colors.alpha500 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden", // clips rippler effect to within container
  },
  buttonInnerContainer: {
    backgroundColor: Colors.alpha500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: Colors.bravo500,
    textAlign: "center",
  },
  pressed: {
    // for iOS ripple effect
    opacity: 0.75,
  },
});
