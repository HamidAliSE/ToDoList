import React from "react";

import CategoriesAndCollectionsScreen from "./CategoriesAndCollectionsScreen";

import {
  Categories,
  Collections,
  Do,
  Dont,
} from "../resources/constants/strings";

const RulesScreen = ({ navigation }) => {
  const List = [
    {
      title: Categories,
      data: [
        {
          title: Do,
          iconName: "check",
        },
        {
          title: Dont,
          iconName: "clear",
        },
      ],
    },
    {
      title: Collections,
      data: [],
    },
  ];

  return <CategoriesAndCollectionsScreen list={List} navigation={navigation} />;
};

export default RulesScreen;
