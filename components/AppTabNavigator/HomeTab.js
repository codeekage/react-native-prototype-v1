import * as React from 'react';
import CardComponent from '../Home/CardComponent';
import {Container, Content, Icon} from 'native-base';
import { createStackNavigator }  from 'react-navigation'

class HomeTab extends React.Component {  
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


export default HomeTab = createStackNavigator({
    Home : HomeTab
})
