import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Card, CardItem, Left, Thumbnail, Body, Button,Icon, Title, Subtitle, Right, Textarea} from "native-base";
import style from '../src/style';

export default class NavigationCard extends Component {
  render() {
    return (
        <Card transparent>
           <CardItem>
                <Left>
                    <Thumbnail large source={require('../../assets/img/profile.jpeg')}/>
                      
                   
                <Body style={style.navContainer}>
                    <Text style={style.navContainerText}>
                        <Text>{`1\n`}</Text>
                        <Subtitle>follower</Subtitle>
                    </Text>
                    <Text style={style.navContainerText}>
                        <Text>{`1\n`}</Text>
                        <Subtitle>follower</Subtitle>
                    </Text>
                    <Text style={style.navContainerText}>
                        <Text>{`1\n`}</Text>
                        <Subtitle>follower</Subtitle>
                    </Text>
                </Body>
                </Left>
            </CardItem>
            <Right>
            <CardItem style={[style.navContainerButton, {padding : 0,width: "80%", marginRight: "-24%", marginTop: "-16%" }]}>
                    <Button style={{padding: 10, margin: 3, height: 29, width: "80%", alignContent: "center", justifyContent: "center", backgroundColor: "white", borderColor: "gray", borderWidth: 1 }}><Text style={{color: "black", textAlign: "center"}}>Edit Profile</Text></Button>
                    <Button style={{height: 29, width: 30, margin: 3, justifyContent: "center", alignContent: "center", backgroundColor: "white", borderColor: "gray", borderWidth: 1 }}>
                    <Text>
                        <Icon name="ios-cog" style={{color: "black", fontSize: 20}}/>
                    </Text>    
                    </Button>
            </CardItem>
            </Right>
            <CardItem>
                <Text>
                    If you want to position a child relative {`\n`} 
                    to something that is not its parent, just don't {`\n`} 
                    use styles for that. Use the component tree.
                </Text>
            </CardItem>
        </Card>
    )
  }
}