import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import Portfolio from "../portfolio/portfolio";
import Movies from "../movies/Movies";
import MovieDetail from "../movies/MovieDetail";
import TodoList from "../Todo App/TodoList";

const Drawer = createDrawerNavigator();
function Layout() {
  return (
    <Drawer.Navigator initialRouteName="Movies">
      <Drawer.Screen name="Portfolio" component={Portfolio} />
      <Drawer.Screen name="Movies" component={Movies} />
      <Drawer.Screen name="Details" component={MovieDetail} />
      <Drawer.Screen name="TodoApp" component={TodoList} />


    </Drawer.Navigator>
  );
}

export default Layout;
