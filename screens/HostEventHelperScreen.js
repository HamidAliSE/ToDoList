import React from "react";

import CategoriesAndCollectionsScreen from "./CategoriesAndCollectionsScreen";

import {
  Categories,
  Collections,
  GuestList,
} from "../resources/constants/strings";

const HostEventHelperScreen = ({ navigation }) => {
  const List = [
    {
      title: Categories,
      data: [
        {
          title: GuestList,
          iconName: "assignment",
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

export default HostEventHelperScreen;
