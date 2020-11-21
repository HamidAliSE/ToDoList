import React, { useEffect, useState, useCallback } from "react";
import { View, FlatList, BackHandler, StyleSheet } from "react-native";

import { IconButton } from "react-native-paper";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-community/async-storage";

import { AddTask } from "../resources/constants/strings";
import {
  Black,
  White,
  Primary,
  Secondary,
  PrimaryDark,
  SecondaryDark,
} from "../resources/constants/colors";

import TaskBox from "../components/TaskBox";
import StatusBar from "../components/StatusBar";
import VerticalMargin from "../components/VerticalMargin";
import FloatingActionButton from "../components/FloatingActionButton";

const TasksScreen = ({ route, navigation }) => {
  const [isReady, setIsReady] = useState(false);
  const [list, setList] = useState([]);
  const [selectedTaskIDArray, setSelectedTaskIDArray] = useState([]);
  const [selectedTaskCount, setSelectedTaskCount] = useState(0);

  const writeData = async () => {
    const jsonValue = JSON.stringify(list);
    await AsyncStorage.setItem(route.params.ScreenName, jsonValue);
  };

  const flipActiveState = (value, index, array) => {
    list.find((task) => task.id === value).taskActiveState = !list.find(
      (task) => task.id === value
    ).taskActiveState;
  };

  const onCancelSelection = () => {
    selectedTaskIDArray.forEach(flipActiveState);
    setSelectedTaskIDArray([]);
  };

  const successfulPressTaskBox = (id) => {
    const updateSelectedTaskIDArray = (id) => {
      if (selectedTaskIDArray.find((taskID) => taskID === id)) {
        selectedTaskIDArray.splice(
          selectedTaskIDArray.findIndex((taskID) => taskID === id),
          1
        );
        setSelectedTaskIDArray([...selectedTaskIDArray]);
      } else {
        setSelectedTaskIDArray([...selectedTaskIDArray, id]);
      }
    };

    [id].forEach(flipActiveState);
    updateSelectedTaskIDArray(id);
  };

  const onPressTaskBox = (id) => {
    if (selectedTaskCount) {
      successfulPressTaskBox(id);
    }
  };

  const onLongPressTaskBox = (id) => {
    successfulPressTaskBox(id);
  };

  const onPressAddFAB = () => {
    navigation.push(AddTask, { ScreenName: route.params.ScreenName });
  };

  useEffect(() => {
    if (route.params?.task) {
      list.push(route.params.task);
      selectedTaskIDArray.forEach(flipActiveState);
      writeData();
      setSelectedTaskIDArray([]);
    }
  }, [route.params?.task]);

  useEffect(() => {
    const editText = (value, index, array) => {
      list.find((task) => task.id === value).taskText = route.params.taskText;
    };

    if (route.params?.taskText) {
      selectedTaskIDArray.forEach(editText);
      selectedTaskIDArray.forEach(flipActiveState);
      writeData();
      setSelectedTaskIDArray([]);
    }
  }, [route.params?.taskText]);

  useEffect(() => {
    const readData = async () => {
      const stringifiedValue = await AsyncStorage.getItem(
        route.params.ScreenName
      );
      const array = stringifiedValue ? JSON.parse(stringifiedValue) : undefined;
      if (array !== undefined) {
        // console.log(array);
        setList(array);
      }
    };

    if (!isReady) {
      readData();
      setIsReady(true);
    }
  }, [isReady]);

  useEffect(() => {
    setSelectedTaskCount(selectedTaskIDArray.length);
  }, [selectedTaskIDArray]);

  useEffect(() => {
    const onPressDelete = () => {
      const deleteTask = (value, index, array) => {
        list.splice(
          list.findIndex((task) => task.id === value),
          1
        );
      };

      selectedTaskIDArray.forEach(deleteTask);
      writeData();
      setSelectedTaskIDArray([]);
    };

    const onNoTaskSelected = () => {
      navigation.setOptions({
        headerTintColor: White,
        headerTitle: route.params.ScreenName,
        headerStyle: {
          backgroundColor: Primary,
        },
        headerLeft: (props) => (
          <IconButton
            icon="arrow-back"
            color={White}
            onPress={() => navigation.goBack()}
            {...props}
          />
        ),
        headerRight: undefined,
      });
    };

    const onOneTaskSelected = () => {
      const onPressEdit = () => {
        const extractTaskText = () => {
          return list.find((task) => task.id === selectedTaskIDArray[0])
            .taskText;
        };

        navigation.push(AddTask, {
          ScreenName: route.params.ScreenName,
          taskText: extractTaskText(),
        });
      };

      navigation.setOptions({
        headerTintColor: Black,
        headerTitle: selectedTaskCount,
        headerStyle: {
          backgroundColor: Secondary,
        },
        headerLeft: () => (
          <IconButton icon="clear" color={Black} onPress={onCancelSelection} />
        ),
        headerRight: () => (
          <View style={styles.appBarActionContainer}>
            <IconButton icon="edit" color={Black} onPress={onPressEdit} />
            <IconButton icon="delete" color={Black} onPress={onPressDelete} />
          </View>
        ),
      });
    };

    const onMultipleTaskSelected = () => {
      navigation.setOptions({
        headerTintColor: Black,
        headerTitle: selectedTaskCount,
        headerStyle: {
          backgroundColor: Secondary,
        },
        headerLeft: () => (
          <IconButton icon="clear" color={Black} onPress={onCancelSelection} />
        ),
        headerRight: () => (
          <View style={styles.appBarActionContainer}>
            <IconButton icon="delete" color={Black} onPress={onPressDelete} />
          </View>
        ),
      });
    };

    switch (selectedTaskCount) {
      case 0:
        onNoTaskSelected();
        break;
      case 1:
        onOneTaskSelected();
        break;
      default:
        onMultipleTaskSelected();
    }
  }, [selectedTaskCount]);

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        if (selectedTaskCount) {
          onCancelSelection();
          return true;
        }
        return false;
      };

      BackHandler.addEventListener("hardwareBackPress", onBackPress);
      return () =>
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    })
  );

  if (!isReady) {
    return null;
  }

  return (
    <View style={styles.screen}>
      <StatusBar
        backgroundColor={selectedTaskCount ? SecondaryDark : PrimaryDark}
      />

      <FlatList
        data={list}
        style={styles.container}
        keyExtractor={(item, index) => item.id}
        ListHeaderComponent={VerticalMargin}
        ListFooterComponent={VerticalMargin}
        ListFooterComponentStyle={styles.footer}
        ItemSeparatorComponent={VerticalMargin}
        renderItem={(itemData) => (
          <TaskBox
            taskText={itemData.item.taskText}
            taskActiveState={itemData.item.taskActiveState}
            onPress={() => onPressTaskBox(itemData.item.id)}
            onLongPress={() => onLongPressTaskBox(itemData.item.id)}
          />
        )}
      />
      <FloatingActionButton onPress={onPressAddFAB} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: White,
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  footer: {
    marginVertical: 32,
  },
  appBarActionContainer: {
    flexDirection: "row",
  },
});

export default TasksScreen;
