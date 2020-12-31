import React from "react";

import CategoriesAndCollectionsScreen from "./CategoriesAndCollectionsScreen";

import {
  Categories,
  Collections,
  Visit,
  Contact,
  Food,
  Shopping,
  OutingORTrip,
} from "../resources/constants/strings";

const PlansHelperScreen = ({ navigation }) => {
  const List = [
    {
      title: Categories,
      data: [
        {
          title: Visit,
          iconName: "home",
        },
        {
          title: Contact,
          iconName: "contacts",
        },
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

export default PlansHelperScreen;
