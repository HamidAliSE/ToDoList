import React from "react";

import CategoriesAndCollectionsScreen from "./CategoriesAndCollectionsScreen";

import {
  Categories,
  Collections,
  Child,
  Spouse,
  ParentORGuardian,
  Relative,
  Friend,
  Student,
} from "../resources/constants/strings";

const PersonalRolesScreen = ({ navigation }) => {
  const List = [
    {
      title: Categories,
      data: [
        {
          title: Child,
          iconName: "child-care",
        },
        {
          title: Spouse,
          iconName: "wc",
        },
        {
          title: ParentORGuardian,
          iconName: "child-friendly",
        },
        {
          title: Relative,
          iconName: "people",
        },
        {
          title: Friend,
          iconName: "people-outline",
        },
        {
          title: Student,
          iconName: "person",
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

export default PersonalRolesScreen;
