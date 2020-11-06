import React, { Component } from 'react';
import { connect } from  'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeStackScreen } from "./homeStack";
import { AuthStackScreen } from "./authStack";
import {_retrieveData, _storeData,_clearData} from './localStorage'

class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userToken:""
    };
  }
    componentDidMount() {
      _retrieveData('userToken').then((user)=>{
        this.props.dispatch({ type: "USER_INFO", payload: user });
      });
    }
    componentDidUpdate() {
      _retrieveData('userToken').then((user)=>{
        this.props.dispatch({ type: "USER_INFO", payload: user });
      });
    }
    render() {
      const RootStack = createStackNavigator();
        return (
          <NavigationContainer>
              <RootStack.Navigator headerMode="none">
                {this.props.userinfo=== null || this.props.userinfo === undefined || this.props.userinfo === "" ? (
                  <RootStack.Screen
                    name="Auth"
                    component={AuthStackScreen}
                    options={{
                      animationEnabled: false
                    }}
                  />
                ) : (
                  <RootStack.Screen
                    name="App"
                    component={HomeStackScreen}
                    options={{
                      animationEnabled: false
                    }}
                  />
                )}
              </RootStack.Navigator>
          </NavigationContainer>
        );
    }
}

const mapStateToProps = state => {
  return {
    userinfo: state.reducer.userinfo
  };
};

export default connect(mapStateToProps)(home);