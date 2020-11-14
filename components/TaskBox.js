import React from "react";
import { View, StyleSheet } from "react-native";
import { Title, TouchableRipple } from "react-native-paper";

import { White, Black, Grey, Error } from "../resources/constants/colors";

const TaskBox = (props) => {
  return (
    <View>
      {props.taskActiveState ? (
        <View style={[styles.taskBox, { backgroundColor: Error }]}>
          <TouchableRipple
            rippleColor={Error}
            onPress={props.onPress}
            onLongPress={props.onLongPress}
          >
            <Title style={[styles.taskText, { color: White }]}>
              {props.taskText}
            </Title>
          </TouchableRipple>
        </View>
      ) : (
        <View style={styles.taskBox}>
          <TouchableRipple
            rippleColor={Error}
            onPress={props.onPress}
            onLongPress={props.onLongPress}
          >
            <Title style={styles.taskText}>{props.taskText}</Title>
          </TouchableRipple>
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
    alignSelf: "flex-start",
  },
  taskText: {
    fontFamily: "sans-serif",
    marginHorizontal: 8,
    fontSize: 16,
    color: Black,
  },
});

export default TaskBox;
