import "react-native-gesture-handler";

import React from "react";

import { IconButton } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import {
  Black,
  White,
  Primary,
  Secondary,
} from "../resources/constants/colors";

import {
  Routine,
  Rules,
  Roles,
  Tasks,
  Helpers,
  AddTask,
  AppName,
  Personal,
  Professional,
  Shopping,
  Places,
  Plans,
  Events,
  Guest,
  Host,
} from "../resources/constants/strings";

import ListManagerScreen from "../screens/ListManagerScreen";
import TasksScreen from "../screens/TasksScreen";
import RoutineScreen from "../screens/RoutineScreen";
import RulesScreen from "../screens/RulesScreen";
import RolesScreen from "../screens/RolesScreen";
import HelpersScreen from "../screens/HelpersScreen";
import PersonalRolesScreen from "../screens/PersonalRolesScreen";
import ProfessionalRolesScreen from "../screens/ProfessionalRolesScreen";
import ShoppingHelperScreen from "../screens/ShoppingHelperScreen";
import PlacesHelperScreen from "../screens/PlacesHelperScreen";
import PlansHelperScreen from "../screens/PlansHelperScreen";
import EventsHelperScreen from "../screens/EventsHelperScreen";
import GuestEventHelperScreen from "../screens/GuestEventHelperScreen";
import HostEventHelperScreen from "../screens/HostEventHelperScreen";
import AddTaskScreen from "../screens/AddTaskScreen";

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="List Manager"
        headerMode="screen"
        screenOptions={{
          headerTintColor: White,
          animationEnabled: false,
          headerStyle: { backgroundColor: Primary },
        }}
      >
        <Stack.Screen
          name={AppName}
          component={ListManagerScreen}
          options={{ headerTitle: AppName }}
        ></Stack.Screen>
        <Stack.Screen
          name={Tasks}
          component={TasksScreen}
          options={({ route }) => ({ headerTitle: route.params.ScreenName })}
        ></Stack.Screen>
        <Stack.Screen
          name={Routine}
          component={RoutineScreen}
          options={{ headerTitle: Routine }}
        ></Stack.Screen>
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
          name={Personal}
          component={PersonalRolesScreen}
          options={{ headerTitle: Personal }}
        ></Stack.Screen>
        <Stack.Screen
          name={Professional}
          component={ProfessionalRolesScreen}
          options={{ headerTitle: Professional }}
        ></Stack.Screen>
        <Stack.Screen
          name={Shopping}
          component={ShoppingHelperScreen}
          options={{ headerTitle: Shopping }}
        ></Stack.Screen>
        <Stack.Screen
          name={Places}
          component={PlacesHelperScreen}
          options={{ headerTitle: Places }}
        ></Stack.Screen>
        <Stack.Screen
          name={Plans}
          component={PlansHelperScreen}
          options={{ headerTitle: Plans }}
        ></Stack.Screen>
        <Stack.Screen
          name={Events}
          component={EventsHelperScreen}
          options={{ headerTitle: Events }}
        ></Stack.Screen>
        <Stack.Screen
          name={Guest}
          component={GuestEventHelperScreen}
          options={{ headerTitle: Guest }}
        ></Stack.Screen>
        <Stack.Screen
          name={Host}
          component={HostEventHelperScreen}
          options={{ headerTitle: Host }}
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
