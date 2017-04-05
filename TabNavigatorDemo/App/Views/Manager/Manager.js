import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import NavBarComponent from '../../Components/NavBar/NavBar';

class Manager extends Component {
	_login() {
		this.props.navigator.push({
			component: Manager,
      id:'Manager'
		});
	}
  render() {
    return (
    	
      <View style={styles.container}>
        <NavBarComponent title ='设置' route={this.props.route} navigator={this.props.navigator}/>
      	<Text onPress={this._login.bind(this)} style={styles.textStyle}>设置跳转</Text>
        
      </View>
    );
  }
}

var styles = StyleSheet.create({

	container: {
		flex: 1,
		// justifyContent:'center',
		// alignItems:'center',
		backgroundColor:'#F5FCFF',
	},
  textStyle: {
    fontSize: 15,
    fontWeight: 'bold'
  }
}); 

module.exports = Manager;
