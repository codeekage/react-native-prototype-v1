import React from 'react';
import { createSwitchNavigator } from "react-navigation";
import MainScreen from './components/MainScreen';

export default class App extends React.Component {

  render() {
    return (
      <AppStack/>
    );
  }
}

const AppStack = createSwitchNavigator({
  Main: MainScreen
})


