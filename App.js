import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Portfolio from "./components/portfolio/portfolio";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Movies from "./components/movies/Movies";
import { NavigationContainer } from "@react-navigation/native";
import Layout from "./components/layout/Layout";
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Layout/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
