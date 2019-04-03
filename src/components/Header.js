import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

const Header = () => {
  return (
    <View style={headerContainer}>
      <Text style={header}>My App</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    marginTop: 20,
    alignItems: "center",
    backgroundColor: "#ffffff"
  },
  header: {
    fontWeight: "bold",
    fontSize: 20
  }
});

const { headerContainer, header } = styles;
