import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ToastAndroid,
  StatusBar as statusBar,
} from "react-native";

import { Button, TextInput } from "react-native-paper";
import AsyncStorage from "@react-native-community/async-storage";

import { Add, Task, Tasks } from "../resources/constants/strings";
import { White, Secondary, SecondaryDark } from "../resources/constants/colors";

import StatusBar from "../components/StatusBar";
import VerticalMargin from "../components/VerticalMargin";

const AddTaskScreen = ({ route, navigation }) => {
  const [isReady, setIsReady] = useState(false);
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState("");
  const [task, setTask] = useState();

  const onPressAddButton = () => {
    if (text) {
      if (route.params?.taskText) {
        navigation.navigate(Tasks, {
          taskText: text,
        });
      } else {
        setCounter(counter + 1);
        setTask({});
      }
    } else {
      ToastAndroid.show("No Task Entered.", ToastAndroid.SHORT);
    }
  };

  useEffect(() => {
    if (route.params?.taskText) {
      setText(route.params.taskText);
    }
  }, [route.params?.taskText]);

  useEffect(() => {
    const readCounter = async () => {
      const stringifiedCounter = await AsyncStorage.getItem("counter");
      if (stringifiedCounter !== null) {
        setCounter(parseInt(stringifiedCounter));
      }
    };

    if (!isReady) {
      statusBar.setBackgroundColor(SecondaryDark);

      readCounter();
      setIsReady(true);
    }
  }, [isReady]);

  useEffect(() => {
    const updateCounter = async () => {
      await AsyncStorage.setItem("counter", counter.toString());
    };

    if (counter !== 0) {
      updateCounter();
    }
  }, [counter]);

  useEffect(() => {
    const getID = () => {
      return route.params.ScreenName + counter.toString();
    };

    if (task !== undefined) {
      navigation.navigate(Tasks, {
        task: { id: getID(), taskText: text, taskActiveState: false },
      });
    }
  }, [task]);

  if (!isReady) {
    return null;
  }

  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor={SecondaryDark} />
      <View style={styles.inputContainer}>
        <VerticalMargin />
        <TextInput
          mode="outlined"
          label={Task}
          selectionColor={Secondary}
          autoFocus={true}
          error={text ? false : true}
          value={text}
          onChangeText={(value) => setText(value)}
        />

        <VerticalMargin />
        <Button
          mode="contained"
          children={Add}
          style={styles.button}
          onPress={onPressAddButton}
        ></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: White,
  },
  inputContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  button: {
    alignSelf: "center",
  },
});

export default AddTaskScreen;
