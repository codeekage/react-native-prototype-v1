import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import {
  Card,
  CardItem,
  Thumbnail,
  Body,
  Left,
  Right,
  Button,
  Icon,
} from 'native-base';

export default class CardComponent extends React.Component {
  render() {
    return (
      <Card>
        <CardItem>
          <Left>
            < Thumbnail source = {
                require('../../assets/img/profile.jpeg')
            }
            />
            <Body>
              <Text>Agiri Abraham</Text>
              <Text note style={{fontSize: 11, color: "gray"}}>Berlin, Germany</Text>
            </Body>
          </Left>
          <Right>
              <Text>Aug 10, 2018</Text>
          </Right>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={this.props.images}
            style={{ height: 300, width: null, flex: 1 }}
          />
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent> 
              <Icon name="ios-heart-outline" style={{color: "black", fontSize: 40}} />
            </Button>
          </Left>
        </CardItem>
      </Card>
    );
  }
}
