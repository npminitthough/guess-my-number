import { Text, View, Image, StyleSheet } from "react-native";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

export default function GameOverScreen({ rounds, userNumber, onStartNewGame }) {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <View>
        <Text style={styles.summary}>
          Your phone needed <Text style={styles.higlight}>{rounds}</Text> rounds
          to guess the number <Text style={styles.higlight}>{userNumber}</Text>
        </Text>
      </View>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: 150,
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: Colors.charlie500,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summary: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  higlight: {
    fontFamily: "open-sans-bold",
    color: Colors.alpha500,
  },
});
