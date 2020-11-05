import React from "react";
import SignInScreen from './signInScreen';
import Signuppage from './signUpScreen';
import { createStackNavigator } from "@react-navigation/stack";

const AuthStack = createStackNavigator();
export const AuthStackScreen = () => (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ title: "Sign In" }}
      />
      <AuthStack.Screen
        name="CreateAccount"
        component={Signuppage}
        options={{ title: "Create Account" }}
      />
    </AuthStack.Navigator>
  );