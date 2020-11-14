import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { GreyDark } from "../resources/constants/colors";

const SectionHeader = (props) => {
  return (
    <View>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: GreyDark,
    fontFamily: "sans-serif-medium",
    fontSize: 10,
    marginVertical: 16,
    textTransform: "uppercase",
  },
});

export default SectionHeader;
