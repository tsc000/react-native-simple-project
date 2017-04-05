import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import NavBarComponent from 'react-native-navbar';

function _renderBarItem(text, handler) {
    return (
      <TouchableOpacity
          onPress={handler}
          style={[{width:50, marginLeft:10}]}>
          <Text>{text}</Text>
      </TouchableOpacity>
    )
}

class TabBar extends Component {

  _title() {
    return (
      <View style={styles.title}>
          <Text style={styles.titleText}>{this.props.route.title ? this.props.route.title : this.props.title}</Text>
      </View>
    )
  }

  //设置左侧按钮
  _leftButton() {
    console.log('渲染左侧按钮======================');

    console.log('本界面来自:' + this.props.route.id);

    switch(this.props.route.id) {
      case 'Entrance':
        return <View></View>
      case 'Second':
        return _renderBarItem('Pop', () => this.props.navigator.pop())
      default:
      break;
    }
  }

  //设置右侧按钮
  _rightButton() {
    switch(this.props.route.id) {
      case 'Entrance':
        if (this.props.title === '首页') {
            return _renderBarItem('Push', ()=>{
              this.props.navigator.push({
                title:'二级标题',
                id:'Second'
              });
          });
        }
        
      default:
      break;
    }
  }

  render() {
    
    let style = {
      paddingTop: 0,
      height:44
    };
    return (
        <NavBarComponent
          style={[styles.navbar, style]}
          tintColor={'#f7f7f8'}
          leftButton={this._leftButton()}
          rightButton={this._rightButton()}
          title={this._title()}
        />
    );
  }
}

var styles = StyleSheet.create({
	navbar: {
      alignItems: 'center',
      borderColor: '#e1e1e1',
      borderBottomWidth: 1    
  },
  title: { 
      alignItems: 'center', 
      justifyContent: 'center',
      marginBottom: 5
  },
  titleText: {
      fontSize: 18    
  },
});

module.exports = TabBar;
