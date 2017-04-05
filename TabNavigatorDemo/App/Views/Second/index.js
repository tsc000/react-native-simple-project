import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import NavBarComponent from '../../Components/NavBar/NavBar';

class Login extends Component {

  render() {
    return (
    	<View style={styles.container}>
    		<NavBarComponent route={this.props.route} navigator={this.props.navigator}/>    
        <Text>测试</Text>
    	</View>
    );
  }
}

var styles = StyleSheet.create({
	textStyle: {
		fontSize: 18,
		color:'orange',
	},
	container: {
    backgroundColor: '#efeff4',
    flex: 1
  }
}); 
module.exports = Login;
