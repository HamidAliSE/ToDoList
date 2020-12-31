import React from "react";

import CategoriesAndCollectionsScreen from "./CategoriesAndCollectionsScreen";

import {
  Categories,
  Collections,
  Daily,
  Weekly,
  Monthly,
  Yearly,
} from "../resources/constants/strings";

const RoutineScreen = ({ navigation }) => {
  const List = [
    {
      title: Categories,
      data: [
        {
          title: Daily,
          iconName: "today",
        },
        {
          title: Weekly,
          iconName: "event",
        },
        {
          title: Monthly,
          iconName: "date-range",
        },
        {
          title: Yearly,
          iconName: "event-note",
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

export default RoutineScreen;
