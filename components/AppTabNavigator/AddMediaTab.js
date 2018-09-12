import * as React from 'react';
import { Text, View} from 'react-native';
import {Icon} from 'native-base';
import style from '../src/style'
import { createStackNavigator }  from 'react-navigation'

class AddMediaTab extends React.Component {

  static navigationOptions = {
    title: "Add Media"
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

export default AddMediaTab = createStackNavigator({
    AddMediaTab: AddMediaTab
})
