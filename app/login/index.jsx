import { Pressable, Image, View, Text } from "react-native";
import React from "react";
import  Colors  from "./../../constants/Colors";
export default function Login() {
  return (
    <View style={{backgroundColor:Colors.WHITE,height:"100%"}}>
      <Image
        source={require("./../../assets/images/login.png")}
        style={{
          width: "100%",
          height: 500,
        }}
      />
      <View style={{padding:20,display:"flex",alignItems:"center"}} >
        <Text
          style={{
            fontFamily: "Poppins-bold",
            fontSize: 30,
            textAlign:"center"
          }}
        >
          Addapt a pet now
        </Text>
        <Text style={{
          fontSize:18,
          fontFamily:"Poppins",
          textAlign:"center",
          color:Colors.GRAY
        }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo tempore cum, fugit quisquam velit nobis 
        </Text>
         <Pressable style={{
            padding:14,
            width:'100%',
            marginTop:50,
            backgroundColor:Colors.PRIMARY,
            borderRadius:14
          }}>
          <Text style={{
            fontFamily:"Poppins-medium",
            fontSize:20,
            textAlign:"center"
          }}>
            get started 
          </Text>
         </Pressable>  
      </View>
    </View>
  );
}
