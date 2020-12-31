import React from "react";

import CategoriesAndCollectionsScreen from "./CategoriesAndCollectionsScreen";

import { Categories, Collections, Gift } from "../resources/constants/strings";

const GuestEventHelperScreen = ({ navigation }) => {
  const List = [
    {
      title: Categories,
      data: [
        {
          title: Gift,
          iconName: "card-giftcard",
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

export default GuestEventHelperScreen;
