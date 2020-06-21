import React from "react";
import { Provider } from "react-redux";
import store from "./src/state/store";
import { Text, View } from "react-native";
import { Home } from "./src/screens";

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
