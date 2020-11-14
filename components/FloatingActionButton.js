import React from "react";
import { FAB } from "react-native-paper";
import { StyleSheet } from "react-native";

import { AddTask } from "../resources/constants/strings";

const FloatingActionButton = (props) => {
  return (
    <FAB
      icon="add"
      label={AddTask}
      onPress={props.onPress}
      style={styles.floatingActionButton}
    ></FAB>
  );
};

const styles = StyleSheet.create({
  floatingActionButton: {
    bottom: 16,
    right: 16,
    position: "absolute",
  },
});

export default FloatingActionButton;
