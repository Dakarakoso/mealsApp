import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import * as firebase from "firebase";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";
import { RestaurantContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favorites/favorites.context";

const firebaseConfig = {
  apiKey: "AIzaSyAI05fjF1TZ-YAaEV8hQIyskb3zQ6boJFw",
  authDomain: "mealstogo-894a2.firebaseapp.com",
  projectId: "mealstogo-894a2",
  storageBucket: "mealstogo-894a2.appspot.com",
  messagingSenderId: "490535803517",
  appId: "1:490535803517:web:a5da36e0d68dadeb526f14",
};
firebase.initializeApp(firebaseConfig);

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantContextProvider>
              <Navigation />
            </RestaurantContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
