import React, { Component } from 'react';
import {
  View,
  Button,
  Image
} from 'react-native';
import { Container, Content, Tab, Tabs, Form, Item, Input, Label  } from 'native-base';
import { Row, Grid } from "react-native-easy-grid";
import {
  BarIndicator
} from 'react-native-indicators';

class SignupScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      USERNAME: "",
      EMAIL: "",
      PASS: "",
      TELP: "",
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
    alert(`Sign up berhasil`);
    this.hideLoading();
    this.props.navigation.navigate('SignIn')
  }
  render() {
    return (
      <Container>
        <Tabs>
          <Tab heading="Sign up" tabStyle={{backgroundColor: '#019cde'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: '#019cde'}} activeTextStyle={{color: '#fff', fontWeight: 'bold'}}>
            <Grid>
              <Row>
                <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                  <View style={{display:this.state.loadingView}}>
                    <BarIndicator color='#019cde' />
                  </View>
                  <Content style={{width:'80%',display:this.state.mainView}}>
                    <Form>
                    <Item floatingLabel>
                      <Label>Username</Label>
                      <Input
                      type="text"
                      name="USERNAME"
                      onChangeText={(text) => this.setState({ USERNAME:text})}
                      required
                      />
                    </Item>
                    <Item floatingLabel>
                      <Label>Email</Label>
                      <Input
                      type="text"
                      name="EMAIL"
                      onChangeText={(text) => this.setState({ EMAIL:text})}
                      required
                      />
                    </Item>
                    <Item floatingLabel>
                      <Label>No Telephone</Label>
                      <Input
                      type="text"
                      name="TELP"
                      onChangeText={(text) => this.setState({ TELP:text})}
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
                    <Button title="Sign up" onPress={() => this.handleSubmit()}/>
                    </Form>
                  </Content>
                </View>
              </Row>
            </Grid>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

SignupScreen.navigationOptions = {
  title: "Back",
  headerStyle: { backgroundColor: "#019cde" },
  headerTitleStyle: { color: "white" }
};
export default SignupScreen;