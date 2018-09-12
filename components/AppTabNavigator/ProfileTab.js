import * as React from 'react';
import { Text, View } from 'react-native';
import {Icon} from 'native-base';
import  style  from "../src/style";


export default class ProfileTab extends React.Component { 
  
   static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="person" style={{ color : tintColor}} />
    )
  }
  
  render() {
    return (
       <View style={style.container}>
         <Text>Hello I'm Profile</Text>
       </View>
    );
  }
}
