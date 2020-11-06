import React from 'react'
import { connect } from  'react-redux'
import { Text , View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Button
} from "native-base";
import { material } from 'react-native-typography'
import {_retrieveData, _storeData,_clearData} from '../App/localStorage'

//import all the basic component we have used
class AccountScreen extends React.Component {
  _signOutAsync = () => {
    _clearData().then(()=>{
      let payloadData="";
      this.props.dispatch({ type: "USER_INFO", payload: payloadData });
    });
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center",alignItems:"center" }}>
        <Button block bordered dark onPress={() => this.props.navigation.navigate('AccountDetail')}>
          <Text style={material.subheading,{color:"#000000",fontWeight:"bold",margin:5}}>Go to account detail page</Text>
        </Button>
        <Button block bordered dark onPress={() => this._signOutAsync()}>
          <Text style={material.subheading,{color:"#000000",fontWeight:"bold",margin:5}}>Logout</Text>
        </Button>
      </View>
    );
  }
}


const mapStateToProps = state => {
  return {
    userinfo: state.reducer.userinfo
  };
};

export default connect(mapStateToProps)(AccountScreen);