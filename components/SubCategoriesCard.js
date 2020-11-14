import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { Card, Title } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";

import { Black, Grey } from "../resources/constants/colors";
import { Rules, Roles, Helpers } from "../resources/constants/strings";

const SubCategoriesCard = (props) => {
  const onPressCard = () => {
    switch (props.title) {
      case "Rules":
        props.navigation.push(Rules);
        break;
      case "Roles":
        props.navigation.push(Roles);
        break;
      case "Helpers":
        props.navigation.push(Helpers);
    }
  };

  return (
    <Card onPress={onPressCard}>
      <Card.Content style={styles.card}>
        <Icon name={props.iconName} color={Black} size={24} />
        <Title style={styles.title}>{props.title}</Title>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Grey,
    alignItems: "center",
    width: Math.round(Dimensions.get("screen").width / 2) - 24,
  },
  title: {
    fontSize: 16,
    fontFamily: "sans-serif-medium",
  },
});

export default SubCategoriesCard;
