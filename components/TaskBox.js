import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Title } from "react-native-paper";

import { White, Black, Grey, Error } from "../resources/constants/colors";

const TaskBox = (props) => {
  return (
    <View>
      {props.taskActiveState ? (
        <View style={[styles.taskBox, { backgroundColor: Error }]}>
          <TouchableOpacity
            onPress={props.onPress}
            onLongPress={props.onLongPress}
          >
            <Title style={[styles.taskText, { color: White }]}>
              {props.taskText}
            </Title>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.taskBox}>
          <TouchableOpacity
            onPress={props.onPress}
            onLongPress={props.onLongPress}
          >
            <Title style={styles.taskText}>{props.taskText}</Title>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  taskBox: {
    backgroundColor: White,
    borderColor: Grey,
    borderRadius: 5,
    borderWidth: 1,
    paddingHorizontal: 8,
    alignSelf: "flex-start",
  },
  taskText: {
    fontFamily: "sans-serif",
    color: Black,
    fontSize: 16,
  },
});

export default TaskBox;
