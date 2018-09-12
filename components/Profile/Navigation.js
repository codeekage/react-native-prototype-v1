import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Card, CardItem, Left, Thumbnail, Body, Textarea, Right, Title, Subtitle, Button, Icon } from "native-base";
import style from '../src/style';

export default class NavigationCard extends Component {
  render() {
    return (
        <Card>
           <CardItem>
              <Left>
                <Thumbnail large source={require('../../assets/img/profile.jpeg')}/>
                <Body>
                <View style={style.navContainer}>
                  <Text style={style.navContainerText}>
                        {`1\n`}
                        <Subtitle>follower</Subtitle>
                  </Text>
                  <Text style={style.navContainerText}>
                    {`1\n`}
                        <Subtitle>follower</Subtitle>
                  </Text>
                  <Text style={style.navContainerText}>
                    {`1\n`}                    
                        <Subtitle>follower</Subtitle>
                  </Text>
                </View>
                  <Button>
                      <Text>Edit Profile</Text>
                  </Button>
                  <Button><Icon name="ios-cog"/></Button>
                </Body>
              </Left>
           </CardItem>
              <CardItem>
              </CardItem>
        </Card>
    )
  }
}