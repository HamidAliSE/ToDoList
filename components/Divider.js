import React from "react";
import { StyleSheet } from "react-native";
import { Divider as Separator } from "react-native-paper";

import { GreyDark } from "../resources/constants/colors";

const Divider = () => {
  return <Separator style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    backgroundColor: GreyDark,
    marginHorizontal: 16,
  },
});

export default Divider;
