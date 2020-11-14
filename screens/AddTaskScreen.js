import React, { useState, useEffect } from "react";
import { StyleSheet, View, ToastAndroid } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { IconButton, Button, TextInput } from "react-native-paper";

import { White, Secondary, Black } from "../resources/constants/colors";
import { Add, Task, Tasks } from "../resources/constants/strings";

import VerticalMargin from "../components/VerticalMargin";
import StatusBar from "../components/StatusBar";

const AddTaskScreen = ({ route, navigation }) => {
  const [isReady, setIsReady] = useState(false);
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState("");

  const onPressAddButton = () => {
    const getID = () => {
      return route.params.ScreenName + counter.toString();
    };

    if (text) {
      setCounter(counter + 1);
      if (route.params?.taskText) {
        navigation.navigate(Tasks, {
          taskText: text,
        });
      } else {
        navigation.navigate(Tasks, {
          task: { id: getID(), taskText: text, taskActiveState: false },
        });
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
    const updateHeader = () => {
      navigation.setOptions({
        headerTintColor: Black,
        headerStyle: {
          backgroundColor: Secondary,
        },
        headerLeft: (props) => (
          <IconButton
            icon="clear"
            color={Black}
            onPress={() => navigation.goBack()}
            {...props}
          />
        ),
      });
    };
    const readCounter = async () => {
      const stringifiedCounter = await AsyncStorage.getItem("counter");
      if (stringifiedCounter !== null) {
        setCounter(parseInt(stringifiedCounter));
      }
    };

    if (!isReady) {
      updateHeader();
      readCounter();
      setIsReady(true);
    }
  }, [isReady]);

  useEffect(() => {
    const updateCounter = async () => {
      await AsyncStorage.setItem("counter", counter.toString());
    };
    updateCounter();
  }, [counter]);

  if (!isReady) {
    return null;
  }

  return (
    <View style={styles.screen}>
      <StatusBar changeBackgroundColor={true} />
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
