import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import {Container, Content, Icon} from 'native-base';
import { createBottomTabNavigator } from "react-navigation";
import CardComponent from '../Home/CardComponent'

class HomeTab extends React.Component {  
   static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="ios-home" style={{ color : tintColor}} />
    )
  }
  render() {
    return (
      <Container>
          <Content>
              <CardComponent images={require('../../assets/img/1.jpg')}/>
              <CardComponent images={require('../../assets/img/2.jpg')}/>
              <CardComponent images={require('../../assets/img/3.jpg')}/>
          </Content>
        </Container>
    );
  }
}

class SearchTab extends React.Component {  
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
class ProfileTab extends React.Component { 
  
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
class LikeTab extends React.Component { 
  
   static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="ios-heart" style={{ color : tintColor}} />
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


class AddMediaTab extends React.Component {

 static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="ios-add-circle-outline" style={{ color : tintColor}} />
    )
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

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default bottomNavigator = createBottomTabNavigator({
  HomeTab : HomeTab,
  SearchTab : SearchTab, 
  AddMediaTab: AddMediaTab,
  LikeTab: LikeTab, 
  ProfileTab : ProfileTab, 
}, 
{
  tabBarOptions: {
    activeTintColor: "#000",
    inactiveTintColor: "gray",
    showLabel: false,
    showIcon: true
  }
})