//This is an example code for Bottom Navigation//
import React from 'react';
import { connect } from "react-redux";
//import react in our code.
import { Text , View , ScrollView , StyleSheet, TouchableOpacity , Image , Dimensions } from 'react-native'
import { material } from 'react-native-typography'
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import {
    Card,
    CardItem
  } from "native-base";
  import DUMMYDATACART from "./dummyDataCart";
//import all the basic component we have used
class Cardlistsatu extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      dataDummy: "",
      };
    } 
    componentDidMount = ()=> {
        let dataDummy = DUMMYDATACART
        this.setState({
          ...this.state,
          dataDummy:dataDummy
        })
    }
    toDetail = (data1)=> {
      this.props.navigation.navigate("detailCard", { name: data1.title,data:data1 })
    }
  render() {
      const lebar = Dimensions.get("window").width / 3
      const testLebar = 50
    return (
        <ScrollView style={{flex:1, flexDirection:'row'}} horizontal={true} showsHorizontalScrollIndicator={false}>
            {this.state.dataDummy.length > 0 && this.state.dataDummy.map((artikeldata,index) =>
                <View style={{padding:2}} key={index}>
                <TouchableOpacity onPress={() => this.toDetail(artikeldata)}>
                    <Card style={{width:lebar}}>
                    <CardItem cardBody>
                        <Image source={{uri: `http://anbyafile.jaygeegroupapp.com/assets/img/detailbg.jpg`}} style={{height: lebar, width: null, flex: 1}}/>
                        <View style={{position:"absolute",top:2,left:2,flex:1,flexDirection:"row",alignItems:"center"}}>
                            <MaterialCommunityIcons name={"sale"} size={25} color={"#019cde"} />
                            <Text style={{color:"#019cde",fontSize:15,fontWeight:"bold"}}>Hot Product</Text>
                        </View>
                    </CardItem>
                    <CardItem cardBody>
                        <View style={{flex: 1,justifyContent: "center",alignItems:"center",padding:2}}>
                            <Text numberOfLines={1} style={{color:"#000000",fontSize:15}}>{artikeldata.qty}={artikeldata.title}</Text>
                            <Text style={{color:"#019cde",fontSize:15,fontWeight:"bold"}}>Rp {artikeldata.price}</Text>
                        </View>
                    </CardItem>
                    <CardItem cardBody style={{padding:10}}>
                        <View style={{flex: 1,justifyContent: "center",alignItems:"flex-start",backgroundColor:"#cccccc"}}>
                            <View style={{width: testLebar+"%", height: "100%", backgroundColor: "#019cde",position:"absolute"}} />
                            <View style={{flex: 1,justifyContent: "center",alignItems:"center",width:"100%",position:"relative"}}>
                                <Text style={{color:"#ffffff",fontSize:15,fontWeight:"bold"}}>xxx Terjual</Text>
                            </View>
                        </View>
                    </CardItem>
                    </Card>
                </TouchableOpacity>
                </View>
            )}
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: '#FFFFFF',
      borderRadius: 0,
      flexDirection: 'column',
      padding:1,
      margin:0
    },
    padBottom:{
      paddingBottom:10
    }
})
  
export default Cardlistsatu;