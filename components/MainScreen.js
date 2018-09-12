import * as React from 'react';
import {createStackNavigator} from "react-navigation";
import { Icon } from "native-base";
import bottomNavigator from './AppTabNavigator';


export default MainScreen = createStackNavigator({
    Main: {
        screen: bottomNavigator,
        navigationOptions: () => ({
            headerLeft : <Icon style={{paddingLeft: 10}} name="ios-camera-outline"/>,
            title : "HACK!!",
            headerRight: <Icon style={{paddingRight: 10, fontSize: 40}} name="ios-send-outline" />
        })
    }
})
