import React, { Component } from 'react';
import { connect } from  'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeStackScreen } from "./homeStack";
import { AuthStackScreen } from "./authStack";
import { AuthContext } from "./context";
const RootStack = createStackNavigator();
const HomeAuth = () => {
  const [userToken, setUserToken] = React.useState(null);
  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setUserToken("asdf");
      },
      signUp: () => {
        setUserToken("asdf");
      },
      signOut: () => {
        setUserToken(null);
      }
    };
  }, []);
  return (
  <AuthContext.Provider value={authContext}>
    <NavigationContainer>
        <RootStack.Navigator headerMode="none">
          {/* {this.state.userToken=== null || this.state.userToken === undefined || this.state.userToken === "" ? ( */}
          {userToken === null ? (
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
  </AuthContext.Provider>
  )
};
export default HomeAuth