import "react-native-gesture-handler";
import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";

import StatusBar from "./components/StatusBar";
import Routes from "./components/Routes";

const App = () => {
  return (
    <PaperProvider settings={{ icon: (props) => <Icon {...props} /> }}>
      <StatusBar />
      <Routes />
    </PaperProvider>
  );
};

export default App;
