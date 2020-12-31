import React from "react";

import CategoriesAndCollectionsScreen from "./CategoriesAndCollectionsScreen";

import {
  Categories,
  Collections,
  Daily,
  Weekly,
  Monthly,
  Yearly,
  NeedBased,
} from "../resources/constants/strings";

const ShoppingHelperScreen = ({ navigation }) => {
  const List = [
    {
      title: Categories,
      data: [
        {
          title: Daily,
          iconName: "local-mall",
        },
        {
          title: Weekly,
          iconName: "card-travel",
        },
        {
          title: Monthly,
          iconName: "shop",
        },
        {
          title: Yearly,
          iconName: "shopping-cart",
        },
        {
          title: NeedBased,
          iconName: "shopping-basket",
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

export default ShoppingHelperScreen;
