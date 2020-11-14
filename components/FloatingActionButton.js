import React from "react";
import { FAB } from "react-native-paper";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import { AddTask } from "../resources/constants/strings";

const FloatingActionButton = (props) => {
  return (
    <FAB
      onPress={props.onPress}
      style={styles.floatingActionButton}
      icon={() => <Icon name="add" size={24} />}
      label={AddTask}
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
