import * as React from 'react';
import { Text, View} from 'react-native';
import {Icon} from 'native-base';
import style from "../src/style";
import { createStackNavigator }  from 'react-navigation'


class SearchTab extends React.Component {  
  render() {
    return (
       <View style={style.container}>
         <Text>Hello I'm SearchTab</Text>
       </View>
    );
  }
}

export default SearchTab = createStackNavigator({
    Search: SearchTab
})