import { Pressable, Image, View, Text } from "react-native";
import React from "react";
import  Colors  from "./../../constants/Colors";
import * as WebBrowser from 'expo-web-browser'
import {useOAuth} from '@clerk/clerk-expo'
import * as Linking from 'expo-linking'

export const useWarmUpBrowser = ()=>{
    React.useEffect(()=>{
         void WebBrowser.warmUpAsync()
         return()=>{
          void WebBrowser.coolDownAsync()
         }
    },[])
}

WebBrowser.maybeCompleteAuthSession()

export default function Login() {

const {startOAuthFlow}=useOAuth({strategy:"oauth_google"})
  useWarmUpBrowser()
 
const onPress = React.useCallback(async ()=>{
  try {
    const {createdSessionId,signIn,signUp,setActive}= await startOAuthFlow({
      redirectUrl: Linking.createURL('/home',{scheme:"myapp"})
    })
    if(createdSessionId){

    }else{

    }
   
  } catch (error) {
    console.error('OAuth error',error)
  }
},[])

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
         <Pressable
          onPress={onPress}
          style={{
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
