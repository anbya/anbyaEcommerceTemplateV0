import React, { Component } from 'react';
import axios from "axios";
import { connect } from "react-redux";
import moment from 'moment'
import { StyleSheet,View,ScrollView,FlatList, TouchableOpacity, Dimensions, Image} from 'react-native'
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
  Input,
  Item,
  Radio
} from "native-base";
import { material } from "react-native-typography";
import { Col, Row, Grid } from "react-native-easy-grid";
import dataDummy from "./dummyData";
import Constants from 'expo-constants'
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";


class searchList extends Component {
  constructor(props) {
      super(props);
      this.state = {
      dataDummy: dataDummy,
      dataShow: false,
      optionalState: "",
      searchText: ""
      };
  }
  dataShowHandle = () => {
    this.setState({
      ...this.state,
      dataShow:!this.state.dataShow
    });
  };
  optionalStateHandle = (data) => {
    data == this.state.optionalState ?
    this.setState({
      ...this.state,
      optionalState:""
    })
    :
    this.setState({
      ...this.state,
      optionalState:data
    })
  };
  handleEnter = (event) => {
    if (event.key === 'Enter') {
      alert("it's work")
    }
  };
  render() {
    const lebar = Dimensions.get("window").width / 2 - 20
    const testLebar = 50
    return (
      <Container style={{paddingTop: Constants.statusBarHeight}}>
        <Grid>
          <Row size={1}>
            <Col>
              <View style={{ flex: 1, justifyContent: "center",alignItems:"center",backgroundColor:"#f5f5f5" }}>
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
                  <Col size={7}>
                    <View style={{ flex: 1, justifyContent: "center",alignItems:"center"}}>
                      <Item style={{backgroundColor:"#ffffff",paddingLeft:10,paddingRight:10}}>
                        <Icon name="ios-search" />
                        <Input
                          placeholder="Search"
                          placeholderTextColor={"#019cde"}
                          style={{color:"#019cde"}}
                          onChangeText={(text) => this.setState({ searchText:text,optionalState:""})}
                          onSubmitEditing={() => this.state.searchText !="" &&this.setState({ dataShow:true,searchText:""})}
                        />
                      </Item>
                    </View>
                  </Col>
                  <Col size={1}>
                    <View style={{ flex: 1, justifyContent: "center",alignItems:"center"}}>
                      <View>
                        <Button transparent onPress={() => this.optionalStateHandle("sort")}>
                          <MaterialIcons name={"sort"} size={25} color={"#019cde"} />
                        </Button>
                      </View>
                    </View>
                  </Col>
                  <Col size={1}>
                    <View style={{ flex: 1, justifyContent: "center",alignItems:"center"}}>
                      <View>
                        <Button transparent onPress={() => this.optionalStateHandle("filter")}>
                          <MaterialCommunityIcons name={"filter-outline"} size={25} color={"#019cde"} />
                        </Button>
                      </View>
                    </View>
                  </Col>
                </Row>
              </View>
            </Col>
          </Row>
          <Row size={9}>
            <Col>
              {this.state.optionalState == "sort" &&
                <View style={{display:"flex", justifyContent: "center",alignItems:"center",backgroundColor:"#f5f5f5",padding:10 }}>
                  <Text style={{color:"#019cde",fontSize:15,fontWeight:"bold"}}>{this.state.optionalState}</Text>
                </View>
              }
              {this.state.optionalState == "filter" &&
                <View style={{display:"flex", justifyContent: "center",alignItems:"center",backgroundColor:"#f5f5f5",padding:10 }}>
                  <Text style={{color:"#019cde",fontSize:15,fontWeight:"bold"}}>{this.state.optionalState}</Text>
                </View>
              }
              {this.state.searchText != "" &&
                <View style={{display:"flex", justifyContent: "center",alignItems:"center",backgroundColor:"#f5f5f5",padding:10 }}>
                  <Text style={{color:"#019cde",fontSize:15,fontWeight:"bold"}}>you search {this.state.searchText}</Text>
                </View>
              }
              {/* {this.state.dataShow == true &&
                <View>
                  <FlatList
                    data={dataDummy}
                    renderItem={({item}) =>
                      <View style={{margin:6}}>
                      <TouchableOpacity onPress={() => this.props.navigation.push("detailCard", { name: "detailCard " })}>
                          <Card style={{width:lebar}}>
                          <CardItem cardBody>
                              <Image source={{uri: `http://anbyafile.jaygeegroupapp.com/assets/img/detailbg.jpg`}} style={{height: lebar, width: null, flex: 1}}/>
                              <View style={{position:"absolute",top:2,left:2,flex:1,flexDirection:"row",alignItems:"center"}}>
                                  <View style={{ flex: 1,flexDirection:"row",alignItems:"center"}}>
                                      <FontAwesome name={"star"} size={15} color={"#019cde"} />
                                      <Text style={{color:"#000000",fontSize:15,fontWeight:"bold",marginLeft:5}}>x</Text>
                                  </View>
                              </View>
                          </CardItem>
                          <CardItem cardBody style={{backgroundColor:"#f5f5f5"}}>
                              <View style={{flex: 1,justifyContent: "center",alignItems:"flex-start",padding:2}}>
                                  <Text numberOfLines={2} style={{color:"#000000",fontSize:15,fontWeight:"bold"}}>{item.title}</Text>
                                  <Text style={{color:"#019cde",fontSize:15,fontWeight:"bold"}}>Rp. xxxx.xxx.xxx</Text>
                                  <Text style={{color:"#000000",fontSize:13}}>xxx Terjual</Text>
                              </View>
                          </CardItem>
                          </Card>
                      </TouchableOpacity>
                      </View>
                    }
                    numColumns={2}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={{
                      padding:4,
                      flexDirection: 'column'
                    }}
                  />
                </View>
              } */}
              {this.state.dataShow == true &&
                <ScrollView style={{backgroundColor:"#FFFFFF"}}>
                  <View style={{width:lebar,flexDirection:"row"}}>
                    {this.state.dataDummy.length > 0 && this.state.dataDummy.map((dataDummy,index) =>
                      <View style={{margin:6}} key={index}>
                        <TouchableOpacity onPress={() => this.props.navigation.push("detailCard", { name: "detailCard " })}>
                          <Card style={{width:lebar}}>
                          <CardItem cardBody>
                              <Image source={{uri: `http://anbyafile.jaygeegroupapp.com/assets/img/detailbg.jpg`}} style={{height: lebar, width: null, flex: 1}}/>
                              <View style={{position:"absolute",top:2,left:2,flex:1,flexDirection:"row",alignItems:"center"}}>
                                  <View style={{ flex: 1,flexDirection:"row",alignItems:"center"}}>
                                      <FontAwesome name={"star"} size={15} color={"#019cde"} />
                                      <Text style={{color:"#000000",fontSize:15,fontWeight:"bold",marginLeft:5}}>x</Text>
                                  </View>
                              </View>
                          </CardItem>
                          <CardItem cardBody style={{backgroundColor:"#f5f5f5"}}>
                              <View style={{flex: 1,justifyContent: "center",alignItems:"flex-start",padding:2}}>
                                  <Text numberOfLines={2} style={{color:"#000000",fontSize:15,fontWeight:"bold"}}>{dataDummy.title}</Text>
                                  <Text style={{color:"#019cde",fontSize:15,fontWeight:"bold"}}>Rp. xxxx.xxx.xxx</Text>
                                  <Text style={{color:"#000000",fontSize:13}}>xxx Terjual</Text>
                              </View>
                          </CardItem>
                          </Card>
                        </TouchableOpacity>
                      </View>
                    )}
                  </View>
                </ScrollView>
              }
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

export default searchList;