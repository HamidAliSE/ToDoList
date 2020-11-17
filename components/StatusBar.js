import React from "react";
import { StatusBar as Status_Bar } from "react-native";

const StatusBar = (props) => {
  return (
    <Status_Bar
      hidden={false}
      translucent={false}
      barStyle="light-content"
      backgroundColor={props.backgroundColor}
    />
  );
};

export default StatusBar;
