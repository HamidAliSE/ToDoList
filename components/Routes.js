import "react-native-gesture-handler";
import React from "react";
import { IconButton } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import {
  AppName,
  Rules,
  Roles,
  Helpers,
  AddTask,
  Tasks,
} from "../resources/constants/strings";

import ListManagerScreen from "../screens/ListManagerScreen";
import TasksScreen from "../screens/TasksScreen";
import RulesScreen from "../screens/RulesScreen";
import RolesScreen from "../screens/RolesScreen";
import HelpersScreen from "../screens/HelpersScreen";
import AddTaskScreen from "../screens/AddTaskScreen";

import {
  Primary,
  Secondary,
  Black,
  White,
} from "../resources/constants/colors";

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="List Manager"
        headerMode="screen"
        screenOptions={{
          headerTintColor: White,
          headerStyle: { backgroundColor: Primary },
        }}
      >
        <Stack.Screen
          name={AppName}
          component={ListManagerScreen}
          options={{ headerTitle: AppName }}
        ></Stack.Screen>
        <Stack.Screen name={Tasks} component={TasksScreen}></Stack.Screen>
        <Stack.Screen
          name={Rules}
          component={RulesScreen}
          options={{ headerTitle: Rules }}
        ></Stack.Screen>
        <Stack.Screen
          name={Roles}
          component={RolesScreen}
          options={{ headerTitle: Roles }}
        ></Stack.Screen>
        <Stack.Screen
          name={Helpers}
          component={HelpersScreen}
          options={{ headerTitle: Helpers }}
        ></Stack.Screen>
        <Stack.Screen
          name={AddTask}
          component={AddTaskScreen}
          options={{
            headerTitle: AddTask,
            headerTintColor: Black,
            headerStyle: {
              backgroundColor: Secondary,
            },
            headerLeft: (props) => <IconButton icon="clear" {...props} />,
          }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
