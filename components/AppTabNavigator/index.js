import HomeTab from './HomeTab';
import SearchTab from './SearchTab';
import AddMediaTab from './AddMediaTab';
import InterestTab from './InterestTab';
import ProfileTab from './ProfileTab'
import { createBottomTabNavigator } from "react-navigation";

export default bottomNavigator = createBottomTabNavigator({
  HomeTab: HomeTab,
  SearchTab: SearchTab,
  AddMediaTab: AddMediaTab,
  InterestTab: InterestTab,
  ProfileTab: ProfileTab,
}, {
  tabBarOptions: {
    activeTintColor: "#000",
    inactiveTintColor: "gray",
    showLabel: false,
    showIcon: true
  }
})