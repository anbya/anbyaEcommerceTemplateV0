//This is an example code for Bottom Navigation//
import React from 'react';
//import react in our code.
import { Text , View , ScrollView , StyleSheet , Image , Dimensions } from 'react-native'
import { material } from 'react-native-typography'
import {
    Card,
    CardItem
  } from "native-base";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
//import all the basic component we have used
class Cardlistdua extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      artikelData: ["Item ke 1","Item ke 2","Item ke 3","Item ke 4","Item ke 5","Item ke 6","Item ke 7","Item ke 8","Item ke 9","Item ke 10"]
      };
  }
  render() {
      const lebar = Dimensions.get("window").width / 3
      const testLebar = 50
    return (
        <ScrollView style={{flex:1, flexDirection:'row'}} horizontal={true} showsHorizontalScrollIndicator={false}>
            {this.state.artikelData.length > 0 && this.state.artikelData.map((artikeldata,index) =>
                <View style={{padding:2}} key={index}>
                    <Card style={{width:lebar}}>
                    <CardItem cardBody>
                        <Image source={{uri: `http://anbyafile.jaygeegroupapp.com/assets/img/detailbg.jpg`}} style={{height: lebar, width: null, flex: 1}}/>
                        <View style={{position:"absolute",top:2,left:2,flex:1,flexDirection:"row",alignItems:"center"}}>
                            <MaterialCommunityIcons name={"sale"} size={25} color={"#019cde"} />
                            <Text style={{color:"#019cde",fontSize:15,fontWeight:"bold"}}>Hot Product</Text>
                        </View>
                    </CardItem>
                    <CardItem cardBody style={{backgroundColor:"#f5f5f5"}}>
                        <View style={{flex: 1,justifyContent: "center",alignItems:"flex-start",padding:2}}>
                            <Text numberOfLines={1} style={{color:"#000000",fontSize:15,fontWeight:"bold"}}>{artikeldata}</Text>
                            <Text style={{color:"#000000",fontSize:13}}>xxx Terjual</Text>
                        </View>
                    </CardItem>
                    </Card>
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
export default (Cardlistdua);