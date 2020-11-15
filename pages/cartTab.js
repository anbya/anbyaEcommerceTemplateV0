import React, { Component } from 'react';
import axios from "axios";
import { connect } from "react-redux";
import moment from 'moment'
import Constants from 'expo-constants'
import { StyleSheet,View,ScrollView, TouchableOpacity, Dimensions, Image} from 'react-native'
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
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";


class keranjang extends Component {
  constructor(props) {
    super(props);
    this.state = {
    dataDummy: dataDummy,
    selectedIndex:0,
    whislsitParameter:false
    };
  } 
  setSelectedIndex = event => {
    const viewSize = event.nativeEvent.layoutMeasurement.width;
    const contentOffset = event.nativeEvent.contentOffset.x;
    const selectedIndex = Math.floor(contentOffset / viewSize);
    this.setState({
      ...this.state,
      selectedIndex:selectedIndex
    })
  }
  render() {
    const lebar = Dimensions.get("window").width
    const tinggi = Dimensions.get("window").height
    const tinggi5 = Dimensions.get("window").height*5/100
    const tinggi10 = Dimensions.get("window").height*10/100
    const { selectedIndex } = this.state
    return (
      <Container style={{paddingTop: Constants.statusBarHeight}}>
        <Grid>
          <Row size={1}>
            <Col>
              <View style={{ flex: 1, justifyContent: "center",alignItems:"center",backgroundColor:"#ffffff" }}>
                <Row>
                  <Col size={1}>
                    <View style={{ flex: 1, justifyContent: "center",alignItems:"center"}}>
                      <View>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                          <MaterialCommunityIcons name={"arrow-left"} size={25} color={"#000000"} />
                        </Button>
                      </View>
                    </View>
                  </Col>
                  <Col size={9}>
                    <View style={{ flex: 1, justifyContent: "center",alignItems:"flex-start"}}>
                      <Text numberOfLines={1} style={{color:"#000000",fontSize:20,fontWeight:"bold"}}>Keranjang</Text>
                    </View>
                  </Col>
                </Row>
              </View>
            </Col>
          </Row>
          <Row size={8}>
            <Col>
              <ScrollView style={{paddingLeft:0,backgroundColor:"#f5f5f5"}}>
                <TouchableOpacity>
                  <View style={listStyle.content2}>
                    <Row style={{paddingTop:10,paddingBottom:10}}>
                      <Col size={1}>
                        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                          <MaterialCommunityIcons name={"checkbox-blank-outline"} size={25} color={"#019cde"} />
                        </View>
                      </Col>
                      <Col size={9}>
                        <View style={{flex:1,justifyContent:"center",alignItems:"flex-start"}}>
                          <Text style={{color:"#000000",fontSize:15,fontWeight:"bold",marginLeft:5}}>Pilih semua barang</Text>
                        </View>
                      </Col>
                    </Row>
                  </View>
                </TouchableOpacity>
                <View style={listStyle.content2}>
                  <Row style={{paddingTop:10,paddingBottom:10}}>
                    <Col>
                      <TouchableOpacity>
                        <View>
                          <Row>
                            <Col size={1}>
                              <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                                <MaterialCommunityIcons name={"checkbox-blank-outline"} size={25} color={"#019cde"} />
                              </View>
                            </Col>
                            <Col size={9}>
                              <View style={{flex:1,justifyContent:"center",alignItems:"flex-start"}}>
                                <Text style={{color:"#000000",fontSize:15,fontWeight:"bold",marginLeft:5}}>xxxxxxxxxxx</Text>
                                <Text style={{color:"#000000",fontSize:15,marginLeft:5}}>xxxxxxxxxxx</Text>
                              </View>
                            </Col>
                          </Row>
                        </View>
                      </TouchableOpacity>
                    </Col>
                  </Row>
                  <Row style={{paddingTop:10,paddingBottom:10}}>
                    <Col size={1}>
                      <TouchableOpacity>
                        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                          <MaterialCommunityIcons name={"checkbox-blank-outline"} size={25} color={"#019cde"} />
                        </View>
                      </TouchableOpacity>
                    </Col>
                    <Col size={9}>
                      <TouchableOpacity>
                        <Row>
                          <Col size={2}>
                            <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                              <Image
                                source={{
                                uri: `https://via.placeholder.com/75`
                                }}
                                style={{ height: 75, width: 75,marginLeft:5}}
                              />
                            </View>
                          </Col>
                          <Col size={8}>
                            <View style={{flex:1,justifyContent:"center",alignItems:"flex-start",padding:10}}>
                              <Text style={{color:"#000000",fontSize:15,fontWeight:"bold",marginLeft:5}}>xxxxxxxxxxx</Text>
                              <Text style={{color:"#000000",fontSize:15,marginLeft:5}}>xxxxxxxxxxx</Text>
                            </View>
                          </Col>
                        </Row>
                      </TouchableOpacity>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <View style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                        <TouchableOpacity>
                          <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <MaterialCommunityIcons name={"heart"} size={35} color={"#019cde"} />
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                          <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <MaterialCommunityIcons name={"trash-can"} size={35} color={"#019cde"} />
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                          <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <MaterialCommunityIcons name={"minus-box"} size={35} color={"#019cde"} />
                          </View>
                        </TouchableOpacity>
                        <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                          <Text style={{color:"#000000",fontSize:35}}>xxx</Text>
                        </View>
                        <TouchableOpacity>
                          <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <MaterialCommunityIcons name={"plus-box"} size={35} color={"#019cde"} />
                          </View>
                        </TouchableOpacity>
                      </View>
                    </Col>
                  </Row>
                </View>
              </ScrollView>
            </Col>
          </Row>
          <Row size={1}>
            <Col>
              <View style={{ flex: 1, justifyContent: "center",alignItems:"center",backgroundColor:"#f5f5f5"}}>
                <TouchableOpacity style={listStyle.addCart} onPress={() => alert("it's work")}>
                  <View style={{ flex: 1, justifyContent: "center",alignItems:"center",flexDirection:"row"}}>
                    <FontAwesome5 name={"cart-plus"} size={25} color={"#ffffff"} />
                    <Text numberOfLines={1} style={{color:"#ffffff",fontSize:25,fontWeight:"bold"}}> Keranjang</Text>
                  </View>
                </TouchableOpacity>
              </View>
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
  },
  pad5:{
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5
  },
  circleDiv:{
    position:"absolute",
    bottom: 15,
    height: 10,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  whiteCircle:{
    width: 6,
    height: 6,
    borderRadius: 3,
    margin: 5,
    backgroundColor: "#000000"
  },
  carouselTag1:{
    position:"absolute",
    bottom:5,
    left:5,
    padding:5,
    backgroundColor:"rgba(255, 255, 255, 0.8)"
  },
  content1:{
    backgroundColor:"#ffffff",
    flex:1,
    justifyContent:"center",
    alignItems:"flex-start",
    paddingLeft:10,
    paddingTop:5,
    paddingRight:10,
    paddingBottom:5,
    marginBottom:5
  },
  content2:{
    backgroundColor:"#ffffff",
    flex:1,
    justifyContent:"center",
    alignItems:"flex-start",
    paddingLeft:10,
    paddingTop:5,
    paddingRight:10,
    paddingBottom:5,
    marginTop:5,
    marginBottom:5
  },
  addCart:{
    backgroundColor:"#019cde",
    width:"80%",
    height:"60%",
    borderRadius:15
  }
})

export default keranjang;