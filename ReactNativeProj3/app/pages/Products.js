import React, { Component } from 'react';

import {View,Text,Button} from 'react-native';
import { Card ,Icon} from 'react-native-elements'
import TopNav from '../components/TopNav';
export  default class Products extends Component{
static navigationOptions=({navigation})=>{
    navigation.title='Products'
return{
     header:<TopNav navigation={navigation} />
 };
};

render(){
return(

<View>

     <Text>Iam Products</Text> 
    <Card title="Hello world" image={require("../images/node.png")}>
    <Text style={{marginBottom:10}}>
    Get started with react native
    </Text>
    <Button
    backgroundColor='#03A9F4'
    buttonStyle={{borderradius : 0, marginLeft:0,marginRight:0,marginBottom:0}}
    title='view now'
    />
<Button  title='Go back to home' onPress={()=>this.props.navigation.navigate('Home')}/>
</Card>

      </View>) 
  
}
}