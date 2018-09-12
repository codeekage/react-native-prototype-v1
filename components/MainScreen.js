import * as React from 'react';
import { createSwitchNavigator} from "react-navigation";
import { Icon } from "native-base";
import bottomNavigator from './AppTabNavigator';


export default MainScreen = createSwitchNavigator({
  Main : bottomNavigator
})
