import * as React from 'react';
import { Text, View } from 'react-native';
import {Icon} from 'native-base';
import  style  from "../src/style";
import { createStackNavigator }  from 'react-navigation'
import HomeTab from './HomeTab';



class ProfileTab extends React.Component { 

  static navigationOptions = {
    title: "Profile"
  }

  render() {
    return (
       <View style={style.container}>
         <Text>Hello I'm Profile</Text>
       </View>
    );
  }
}

export default ProfileTab = createStackNavigator({
  Profile: ProfileTab
})