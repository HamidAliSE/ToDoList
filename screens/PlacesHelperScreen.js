import React from "react";

import CategoriesAndCollectionsScreen from "./CategoriesAndCollectionsScreen";

import {
  Categories,
  Collections,
  Food,
  Shopping,
  OutingORTrip,
} from "../resources/constants/strings";

const PlacesHelperScreen = ({ navigation }) => {
  const List = [
    {
      title: Categories,
      data: [
        {
          title: Food,
          iconName: "restaurant-menu",
        },
        {
          title: Shopping,
          iconName: "store",
        },
        {
          title: OutingORTrip,
          iconName: "map",
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

export default PlacesHelperScreen;
