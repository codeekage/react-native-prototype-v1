import * as React from 'react';
import CardComponent from '../Home/CardComponent';
import {Container, Content, Icon} from 'native-base';



export default class HomeTab extends React.Component {  
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
