import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Header, CryptoContainer } from "./src/components";
import { Provider } from "react-redux";

import Store from "./src/store";

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <View style={styles.container}>
          <Header />
          <CryptoContainer />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
