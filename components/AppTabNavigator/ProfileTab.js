import * as React from 'react';
import { Text, View } from 'react-native';
import {Icon, Container, Content} from 'native-base';
import  style  from "../src/style";
import { createStackNavigator }  from 'react-navigation'
import HomeTab from './HomeTab';
import NavigationCard from '../Profile/Navigation';



class ProfileTab extends React.Component { 

  static navigationOptions = {
    title: "Profile"
  }

  render() {
    return (
     <Container>
       <Content>
       <NavigationCard/>
       </Content>
     </Container>
    );
  }
}

export default ProfileTab = createStackNavigator({
  Profile: ProfileTab
})