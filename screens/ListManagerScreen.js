import React from "react";

import CategoriesAndCollectionsScreen from "./CategoriesAndCollectionsScreen";

import {
  Categories,
  Collections,
  Remember,
  PendingTasks,
  Leisure,
  FuturePlans,
  WishList,
  Routine,
  Rules,
  Roles,
  Helpers,
} from "../resources/constants/strings";

const ListManagerScreen = ({ navigation }) => {
  const List = [
    {
      title: Categories,
      data: [
        {
          title: Remember,
          iconName: "bookmark-border",
        },
        {
          title: PendingTasks,
          iconName: "restore",
        },
        {
          title: Leisure,
          iconName: "airline-seat-recline-extra",
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
          title: Routine,
          iconName: "autorenew",
        },
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
