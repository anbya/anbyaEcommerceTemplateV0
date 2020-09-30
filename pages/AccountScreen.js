import React from 'react'
import { connect } from  'react-redux'
import { Text , View , AsyncStorage } from 'react-native'
import {
  Button
} from "native-base";
import { material } from 'react-native-typography'

//import all the basic component we have used
class AccountScreen extends React.Component {
  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
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