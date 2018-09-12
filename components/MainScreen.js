import {createStackNavigator} from "react-navigation";
import bottomNavigator from './AppTabNavigator';


export default MainScreen = createStackNavigator({
    Main: {
        screen: bottomNavigator,
    }
})
