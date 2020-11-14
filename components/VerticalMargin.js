import React from "react";
import { View, StyleSheet } from "react-native";

const VerticalMargin = () => {
  return <View style={styles.margin}></View>;
};

const styles = StyleSheet.create({
  margin: {
    marginVertical: 8,
  },
});

export default VerticalMargin;
