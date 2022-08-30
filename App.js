import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { useState, useEffect, useCallback } from "react";
import { LinearGradient } from "expo-linear-gradient";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import Colors from "./constants/colors";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(true);
  const [appIsReady, setAppIsReady] = useState(false);
  const [numberOfGuesses, setNumberOfGuesses] = useState(0);

  useEffect(() => {
    async function prepare() {
      try {
        // keep splash screen visible while fetching resources
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts
        await Font.loadAsync({
          "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
          "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setNumberOfGuesses(0);
  }

  function pickedNumberHandler(pickedNumber) {
    console.log(pickedNumber);
    setUserNumber(pickedNumber);
    setGameOver(false);
  }

  function gameOverHandler(totalRounds) {
    setGameOver(true);
    setNumberOfGuesses(totalRounds);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        rounds={numberOfGuesses}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <LinearGradient
      colors={[Colors.alpha600, Colors.delta500]}
      style={styles.rootScreen}
      onLayout={onLayoutRootView}
    >
      <ImageBackground
        style={styles.rootScreen}
        resizeMode="cover"
        source={require("./assets/images/background.png")}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
