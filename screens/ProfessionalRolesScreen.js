import React from "react";

import CategoriesAndCollectionsScreen from "./CategoriesAndCollectionsScreen";

import {
  Categories,
  Collections,
  Employee,
  Freelancer,
  Boss,
  Peer,
  Competitor,
} from "../resources/constants/strings";

const ProfessionalRolesScreen = ({ navigation }) => {
  const List = [
    {
      title: Categories,
      data: [
        {
          title: Employee,
          iconName: "person",
        },
        {
          title: Freelancer,
          iconName: "accessibility",
        },
        {
          title: Boss,
          iconName: "person-outline",
        },
        {
          title: Peer,
          iconName: "people",
        },
        {
          title: Competitor,
          iconName: "people-outline",
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

export default ProfessionalRolesScreen;
