import React, { Component } from 'react';
import { connect } from  'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  Button,
  Text,
  Image,
  Dimensions,
} from 'react-native';
import { Content , Form, Item, Input, Label } from 'native-base';
import {
  BarIndicator,
} from 'react-native-indicators';
import { AuthContext } from "./context";
import {_retrieveData, _storeData,_clearData} from './localStorage'


class SignInScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      EMAIL: "",
      PASS: "",
      mainView:"flex",
      loadingView:"none"
    };
  }
  hideLoading = () => {
    this.setState({
      mainView:"flex",
      loadingView:"none"
    });
  };
  handleSubmit = () => {
    _storeData('userToken',this.state.EMAIL).then(async()=>{
      console.log(this.state.EMAIL);
      this.setState({
        mainView:"none",
        loadingView:"flex"
      });
      await this.props.dispatch({ type: "HOME_STATE", payload: true });
      this.props.dispatch({ type: "USER_INFO", payload: this.state.EMAIL });
    });
  }
  render() {
    const lebar = Dimensions.get("window").width / 3
    const testLebar = 50
    return (
      <View style={{flex:1,justifyContent:"center"}}>
        <View style={{display:this.state.loadingView}}>
          <BarIndicator color='#019cde' />
        </View>
        <View>
          <Image source={{uri: `http://anbyafile.jaygeegroupapp.com/assets/img/shop.png`}} style={{height: 100, width: 100,alignSelf:"center"}}/>
        </View>
        <View style={{paddingLeft:25,paddingRight:25}}>
          <View>
            <Text style={{color:"#000000",fontSize:20,fontWeight:"bold",textAlign:"center",paddingTop:5,paddingBottom:5}}>Wellcome to TRANSLAPAK</Text>
            <Text style={{color:"#858585",fontSize:15,textAlign:"center",paddingTop:5,paddingBottom:5}}>Sign in to continue</Text>
              <Form>
                <Item floatingLabel>
                <Label>Email</Label>
                <Input
                type="text"
                name="EMAIL"
                onChangeText={(text) => this.setState({ EMAIL:text})}
                required
                />
                </Item>
                <Item floatingLabel last style={{marginBottom:20}}>
                <Label>Password</Label>
                <Input
                type="text"
                name="PASS"
                onChangeText={(text) => this.setState({ PASS:text})}
                secureTextEntry={true}
                required
                />
                </Item>
                <Button
                  color="#019cde"
                  title="Sign in"
                  onPress={() => this.handleSubmit()}
                />
                {/* <View style={{paddingTop:5,paddingBottom:5}}>
                  <Button title="Sign in" onPress={() => this.handleSubmit()}/>
                </View> */}
                <Text style={{color:"#019cde",fontSize:15,fontWeight:"bold",textAlign:"center",paddingTop:15,paddingBottom:15}}>Forgot password ?</Text>
                <View style={{paddingTop:5,paddingBottom:5}}>
                  <Text style={{textAlign:"center"}}>
                    <Text style={{color:"#858585",fontSize:15}}>Don't have an account? </Text>
                    <Text
                    style={{color:"#019cde",fontSize:15,fontWeight:"bold"}}
                    onPress={() => this.props.navigation.push("CreateAccount")}
                    >
                      Register
                    </Text>
                  </Text>
                </View>
              </Form>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    userinfo: state.reducer.userinfo
  };
};

export default connect(mapStateToProps)(SignInScreen);