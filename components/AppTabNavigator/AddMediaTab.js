import * as React from 'react';
import { Text, View} from 'react-native';
import {Icon} from 'native-base';
import style from '../src/style'

export default class AddMediaTab extends React.Component {

 static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="ios-add-circle-outline" style={{ color : tintColor}} />
    ),
    title: "Add"
  }

  render() {
    return (
      <View style={style.container}>
        <Text style={style.paragraph}>
            AddMediaTab
        </Text>
    
      </View>
    );
  }
}
