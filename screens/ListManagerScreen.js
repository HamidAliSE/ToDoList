import React from "react";

import CategoriesAndCollectionsScreen from "./CategoriesAndCollectionsScreen";

import {
  Categories,
  Collections,
  Routine,
  PendingTasks,
  FuturePlans,
  Rules,
  Roles,
  Helpers,
  WishList,
} from "../resources/constants/strings";

const ListManagerScreen = ({ navigation }) => {
  const List = [
    {
      title: Categories,
      data: [
        {
          title: Routine,
          iconName: "today",
        },
        {
          title: PendingTasks,
          iconName: "restore",
        },
        {
          title: FuturePlans,
          iconName: "update",
        },
        {
          title: WishList,
          iconName: "favorite-border",
        },
      ],
    },
    {
      title: Collections,
      data: [
        {
          title: Rules,
          iconName: "check-box-outline-blank",
        },
        {
          title: Roles,
          iconName: "person-outline",
        },
        {
          title: Helpers,
          iconName: "list",
        },
      ],
    },
  ];

  return <CategoriesAndCollectionsScreen list={List} navigation={navigation} />;
};

export default ListManagerScreen;
