import React, { Component } from 'react';
import { View, Text,StyleSheet,Button,Dimensions } from 'react-native';
import {Icon} from 'react-native-elements';
import TopNav from '../components/TopNav';
import Camera from 'react-native-camera';
// import TopNavCart from '../components/TopNavCart';

export default class Home extends Component {
    static navigationOptions = ({navigation}) => {
        navigation.title='home'
        return {
            // headerRight: <TopNavCart navigation={navigation} />,
            // headerLeft: <TopNav navigation={navigation} />
            header:<TopNav navigation={navigation} />
         };
    };
    render() {

        return (<View style={styles.container}>
            {/* <Text style={styles.welcome}>I am home</Text>
       
       <Icon
       raised
       name='home'
       type='font-awesome'
       color='#f50'
       onPress={()=> console.log('hello')}
       /> */}
        
        <Camera
  ref={cam => {this.camera = cam}}
  style={styles.preview}
  aspect={Camera.constants.Aspect.fill}
>
  <Text style={styles.capture} onPress={this.takePicture.bind(this)}>
    [CAPTURE]
  </Text>
</Camera>
        
        
        
        
        {/* <Button
       title="Go products"
       onPress={()=> this.props.navigation.navigate('Products')}
       /> */}
       </View>
        )
    }
    takePicture() {
        this.camera
          .capture()
          .then((data) => console.log(data))
          .catch(err => console.error(err));
      }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      color:'#000000'
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      color:'#000000',
    },

    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width},
        capture: {
            flex: 0,
            backgroundColor: '#fff',
            borderRadius: 5,
            color: '#000',
            padding: 10,
            margin: 40  
          },
    
      instructions: {
      textAlign: 'center',
      color: '#000000',
      marginBottom: 5,
    },
  });
  