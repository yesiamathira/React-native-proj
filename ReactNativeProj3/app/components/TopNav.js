import React, { Component } from 'react';
import {Icon,Header} from 'react-native-elements';
import {View} from 'react-native';
export  default class TopNav extends Component{


render(){

return(
<Header
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text:this.props.navigation.title, style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/>

);



  
//     return( <View>
//       <Icon
//        raised
//        name='home'
//        type='font-awesome'
//        color='#f50'
//        onPress={()=> console.log('hello')}
//        />
//   </View>)

  
}
}