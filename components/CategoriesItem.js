import React from "react";
import { StyleSheet } from "react-native";
import { List, Title } from "react-native-paper";

import { Black } from "../resources/constants/colors";

import { Tasks } from "../resources/constants/strings";

const CategoriesItem = (props) => {
  const iconName = props.iconName;

  const onPressItem = () => {
    props.navigation.push(Tasks, { ScreenName: props.title });
  };

  return (
    <List.Item
      title={<Title style={styles.title}>{props.title}</Title>}
      onPress={onPressItem}
      left={(props) => <List.Icon {...props} icon={iconName} color={Black} />}
    />
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontFamily: "sans-serif-medium",
  },
});

export default CategoriesItem;
