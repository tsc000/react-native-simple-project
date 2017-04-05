import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import TabBarComponent from '../../Components/TabBar/TabBar';
import NavBarComponent from '../../Components/NavBar/NavBar';
//<NavBarComponent route={this.props.route} navigator={this.props.navigator}/>

class Index extends Component {

  render() {
    return (
      <View style={styles.container}>

        <TabBarComponent route={this.props.route} navigator={this.props.navigator}/>

      </View>
    );
  }
}

var styles = StyleSheet.create({
	container: {
		flexGrow: 1,
	}
})

module.exports = Index;
