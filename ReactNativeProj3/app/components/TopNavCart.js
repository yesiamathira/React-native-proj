import React, { Component } from 'react';
import {Icon} from 'react-native-elements';
import {View} from 'react-native';
export  default class TopNavCart extends Component{


render(){


  
    return( <View>
      <Icon
       raised
       name='shopping-bag'
       type='font-awesome'
       color='#f50'
       onPress={()=> console.log('hello')}
       />
  </View>)

  
}
}