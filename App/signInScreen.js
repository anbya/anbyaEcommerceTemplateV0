import React, { Component } from 'react';
import { connect } from  'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  Button,
  Text,
} from 'react-native';
import { Content , Form, Item, Input, Label } from 'native-base';
import {
  BarIndicator,
} from 'react-native-indicators';
import { AuthContext } from "./context";


const SignInScreen = () => {
  const { signIn } = React.useContext(AuthContext);
  const [EMAIL, setEMAIL] = React.useState("");
  const [PASS, setPASS] = React.useState("");
  const [mainView, setmainView] = React.useState("flex");
  const [loadingView, setloadingView] = React.useState("none");
  return (
    <View style={{flex:1}}>
      <View style={{display:loadingView}}>
        <BarIndicator color='#019cde' />
      </View>
      <Content style={{paddingLeft:25,paddingRight:25}}>
        <Form>
          <Item floatingLabel>
          <Label>Email</Label>
          <Input
          type="text"
          name="EMAIL"
          onChangeText={(text) => setEMAIL(text)}
          required
          />
          </Item>
          <Item floatingLabel last style={{marginBottom:20}}>
          <Label>Password</Label>
          <Input
          type="text"
          name="PASS"
          onChangeText={(text) => setPASS(text)}
          secureTextEntry={true}
          required
          />
          </Item>
          <Button title="Sign in" onPress={() => signIn()}/>
          <Text style={{textAlign:'center'}}>OR</Text>
          <Button title="Sign up" onPress={() => this.props.navigation.push('SignUp')}/>
        </Form>
      </Content>
    </View>
  )
};
export default SignInScreen