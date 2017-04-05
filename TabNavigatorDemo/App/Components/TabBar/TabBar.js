import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import Home from '../../Views/Home/Home';
import Manager from '../../Views/Manager/Manager';

class TabBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedTab: '首页'
		};
	}
  _onPress(title) {
    
    this.setState({selectedTab: title});

  }
  // style={styles.tabIcon}
  render() {
    return (
      	<TabNavigator hidesTabTouch={true} tabBarStyle={styles.tab}>
      		<TabNavigator.Item
      			selected={this.state.selectedTab === '首页'}
      			title = '首页'
            renderIcon={() => <Image source={{uri:'TabBarHome'}} style={styles.tabIcon}/>}
            renderSelectedIcon={() => <Image source={{uri:'TabBarHomeSel'}} style={styles.tabIcon}/>}
      			onPress={this._onPress.bind(this,'首页')}
      		>
      			<Home route={this.props.route} navigator={this.props.navigator}/>
      		</TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === '设置'}
            title = '设置'
            renderIcon={() => <Image source={{uri:'TabBarCart'}} style={styles.tabIcon}/>}
            renderSelectedIcon={() => <Image source={{uri:'TabBarCartSel'}} style={styles.tabIcon}/>}
            onPress={this._onPress.bind(this,'设置')}
          >
            <Manager route={this.props.route} navigator={this.props.navigator}/>
          </TabNavigator.Item>
      	</TabNavigator>
    );
  }
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor:'#F5FCFF'
	},
	tabIcon: {
		width: 20,
		height: 20,
		resizeMode: 'stretch',
		marginTop: 10,
	}
});

module.exports = TabBar;
