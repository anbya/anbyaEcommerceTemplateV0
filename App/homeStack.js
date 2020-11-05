import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HometestScreen from '../pages/HometestScreen';
import AccountScreen from '../pages/AccountScreen';
import {
    SignIn,
    CreateAccount,
    Search,
    Home,
    Details,
    Search2,
    Profile,
    Splash
  } from "./Screens";
const HomeStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const TabsScreen = () => (
  <Tabs.Navigator
    initialRouteName="Home"
    tabBarOptions={{
      activeTintColor: '#019cde',
    }}
  >
    <Tabs.Screen
      name="Home"
      component={HometestScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tabs.Screen
      name="Account"
      component={AccountScreen}
      options={{
        tabBarLabel: 'Account',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
    />
  </Tabs.Navigator>
);
export const HomeStackScreen = () => (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={TabsScreen}
        options={{ 
          headerShown: false
        }}
      />
      <HomeStack.Screen
        name="Details"
        component={Details}
        options={({ route }) => ({
          title: route.params.name,
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#fff"
            />
          )
        })}
      />
      <HomeStack.Screen
        name="Search2"
        component={Search2}
        options={{ 
          headerShown: false
        }}
      />
    </HomeStack.Navigator>
);