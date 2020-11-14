import React from "react";
import { StatusBar as Status_Bar } from "react-native";

import { PrimaryDark, SecondaryDark } from "../resources/constants/colors";

const StatusBar = (props) => {
  return (
    <Status_Bar
      backgroundColor={
        props.changeBackgroundColor ? SecondaryDark : PrimaryDark
      }
      hidden={false}
      barStyle="light-content"
      translucent={false}
    />
  );
};

export default StatusBar;
