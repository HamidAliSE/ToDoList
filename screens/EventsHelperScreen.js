import React from "react";

import CategoriesAndCollectionsScreen from "./CategoriesAndCollectionsScreen";

import {
  Categories,
  Collections,
  Guest,
  Host,
} from "../resources/constants/strings";

const EventsHelperScreen = ({ navigation }) => {
  const List = [
    {
      title: Categories,
      data: [],
    },
    {
      title: Collections,
      data: [
        {
          title: Guest,
          iconName: "person-outline",
        },
        {
          title: Host,
          iconName: "person",
        },
      ],
    },
  ];

  return <CategoriesAndCollectionsScreen list={List} navigation={navigation} />;
};

export default EventsHelperScreen;
