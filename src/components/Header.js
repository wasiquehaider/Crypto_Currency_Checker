import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

const Header = () => {
  return (
    <View style={headerContainer}>
      <Text style={header}>Crypto Tracker</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    // flex: 1,
    height: 100,
    // padding: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000"
  },
  header: {
    fontWeight: "bold",
    fontSize: 20,
    color: "green"
  }
});

const { headerContainer, header } = styles;
