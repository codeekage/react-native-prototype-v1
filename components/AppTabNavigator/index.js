import * as React from 'react';
import HomeTab from './HomeTab';
import SearchTab from './SearchTab';
import AddMediaTab from './AddMediaTab';
import InterestTab from './InterestTab';
import ProfileTab from './ProfileTab'
import { createBottomTabNavigator } from "react-navigation";
import {Icon} from 'native-base';

export default bottomNavigator = createBottomTabNavigator({
  Home: {
    screen : HomeTab,
    navigationOptions : () => ({
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-home-outline" style={{ color : tintColor}} />
       )
    })
  },
 Search: {
        screen: SearchTab,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon name="ios-search-outline" style={{ color : tintColor}} />
            )
        })
    },
  AddMedia: {
        screen: AddMediaTab,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon name="ios-add-circle-outline" style={{ color : tintColor}} />
            )
        })
    },
  Interest: {
        screen: InterestTab,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon name="ios-heart" style={{ color : tintColor}} />
            )
        })
    },
   Profile: {
    screen: ProfileTab,
    navigationOptions: () => ({
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-contact-outline" style={{ color : tintColor}} />
      )
    })
  }
}, {
  tabBarOptions: {
    activeTintColor: "#000",
    inactiveTintColor: "gray",
    showLabel: true,
    showIcon: true
  }
})