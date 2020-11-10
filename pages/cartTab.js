import React, { Component } from 'react';
import axios from "axios";
import { connect } from "react-redux";
import moment from 'moment'
import { StyleSheet,View,ScrollView} from 'react-native'
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Badge,
  Segment,
  Tab,
  Tabs,
  List,
  ListItem,
  Radio
} from "native-base";
import { material } from "react-native-typography";
import { Col, Row, Grid } from "react-native-easy-grid";
import dataDummy from "./dummyData";
import Constants from 'expo-constants'


class cartTab extends Component {
  constructor(props) {
      super(props);
      this.state = {
      dataDummy: dataDummy
      };
  } 
  render() {
    return (
      <Container style={{paddingTop: Constants.statusBarHeight}}>
        <Grid>
          <Row size={1}>
            <Col>
              <View style={{backgroundColor:"#f5f5f5",flex: 1,justifyContent:'center', alignItems:'flex-start',padding:10,borderRadius:20}}>
                <Text style={{color:"#000000",fontSize:20,fontWeight:"bold"}}>My Shopping Cart</Text>
              </View>
            </Col>
          </Row>
          <Row size={9}>
            <Col>
              <ScrollView>
                {this.state.dataDummy.length > 0 && this.state.dataDummy.map((dataDummy,index) =>
                  <View style={{backgroundColor:"#FFFFFF"}} key={index}>
                    <Grid>
                      <Row style={listStyle.borderBottom}>
                        <Col size={2}>
                          <View style={{flex: 1,justifyContent:'center', alignItems:'center',padding:10,borderRadius:20}}>
                            <Thumbnail square source={{ uri: `http://anbyafile.jaygeegroupapp.com/assets/img/detailbg.jpg` }} />
                          </View>
                        </Col>
                        <Col size={8}>
                          <View style={{flex: 1,justifyContent:'center', alignItems:'flex-start',padding:10,borderRadius:20}}>
                            <Text style={material.body2}>{dataDummy.title}</Text>
                            <Text note>{dataDummy.subTitle}</Text>
                          </View>
                        </Col>
                      </Row>
                      <Row>
                        <Col size={10}>
                          <View style={{flex: 1,justifyContent:'center', alignItems:'center',padding:10,borderRadius:20}}>
                            <Text note>REDEEM FROM</Text>
                            <Text style={material.body2}>2020-11-01 until 2020-11-05</Text>
                          </View>
                        </Col>
                      </Row>
                    </Grid>
                  </View>
                )}
              </ScrollView>
            </Col>
          </Row>
        </Grid>
      </Container>
    );
  }
}
const listStyle = StyleSheet.create({
  box:{
    backgroundColor:'#ffffff'
  },
  pad5:{
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5
  },
  borderBottom:{
    borderBottomWidth:1,
    borderBottomColor:"#e6eaed"
  },
  borderAll:{
    borderWidth:1,
    borderColor:"#e6eaed"
  }
})

export default cartTab;