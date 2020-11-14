import React from "react";

import CategoriesAndCollectionsScreen from "./CategoriesAndCollectionsScreen";

import { Categories, Collections } from "../resources/constants/strings";

const RolesScreen = ({ navigation }) => {
  const List = [
    {
      title: Categories,
      data: [],
    },
    {
      title: Collections,
      data: [],
    },
  ];

  return <CategoriesAndCollectionsScreen list={List} navigation={navigation} />;
};

export default RolesScreen;
