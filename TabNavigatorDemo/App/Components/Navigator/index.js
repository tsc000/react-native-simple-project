import React, { Component } from 'react';
import {
  View,
  Navigator,
  StyleSheet
} from 'react-native';

import Entrance from '../../Views/Index/';
import Second from '../../Views/Second/';
import Home from '../../Views/Home/Home';
import Manager from '../../Views/Manager/Manager';

class Navigation extends Component {

  render() {
    return (
			<View style={styles.container}>
        <Navigator
          initialRoute={{name:'Entrance', index:0, id:'Entrance'}}
          configureScene={this._configureScene}
          renderScene={this._renderScene}
        />
      </View>
    );
  }

  //配置场景
	_configureScene(route, routeStack) {
		console.log(routeStack);
		switch(route.id) {
			case 'Entrance':
				return Navigator.SceneConfigs.FloatFromBottom;
			case 'Manager':
				return Navigator.SceneConfigs.FloatFromBottom;
			default:
				return Navigator.SceneConfigs.FloatFromRight;
		}
	}

  //渲染场景
	_renderScene(route, navigator) {
		console.log('渲染场景--------------------');
		console.log('场景标识:' + route.id);

		switch(route.id) {
			case 'Entrance':
				return (
						<Entrance navigator={navigator} route={route}/>
					);
			case 'Second':
				return (
						<Second navigator={navigator} route={route}/>
					);
			case 'Manager':
				return (
						<Manager navigator={navigator} route={route}/>
					);
			case 'Home':
				return (
						<Home navigator={navigator} route={route}/>
					);
			default:
				break;
		}
	}

}

var styles = StyleSheet.create({
	container: {
		flex: 1,
	}
})
module.exports = Navigation;
