import * as React from 'react';
import { Text, View} from 'react-native';
import {Icon} from 'native-base';
import style from "../src/style";


export default class SearchTab extends React.Component {  
   static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="ios-search-outline" style={{ color : tintColor}} />
    )
  }
  render() {
    return (
       <View style={style.container}>
         <Text>Hello I'm SearchTab</Text>
       </View>
    );
  }
}