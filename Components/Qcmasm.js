import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'

const Qcmasm = (props) => {
    const qcm4= () => {
        props.navigation.navigate("Prescrip")
    };
    return (
  <View style={Styles.container}>
            {/* <ScrollView> */}

            <TouchableOpacity
            onPress={qcm4}>
            <View style={{
                borderWidth:3,
                borderColor:"black",
                height:150,
                width:"90%",
                margin:250,
                borderRadius:30,
                
                

            }}>
             <View style={{
                marginLeft:70,
            
             }}>
             <Text style={{
                 fontSize:30
             }}>Soin asthmes</Text>
                 </View>
            <View style={{
                padding:20,
            }}>
            <Text
            style={{
                fontSize:20
            }}> *  administré de la corticoîde par voie orale</Text>
                </View> 
                {/* <View style={{
                padding:20,
            }}>
            <Text
            style={{
                fontSize:20
            }}> *  sensation d'oppression au niveau de la cage thoracique</Text>
                </View> 
                <View style={{
                padding:20,
            }}>
            <Text
            style={{
                fontSize:20
            }}> * une respiration sifflante</Text>
                </View> 
                <View style={{
                padding:20,
            }}>
            <Text
            style={{
                fontSize:20
            }}> *  un etouffement à l'effort ou une toux qui ne passe pas</Text> */}
             </View> 
                
            </TouchableOpacity>
            
            
            {/* </ScrollView> */}
        </View>
    )
}
const Styles = StyleSheet.create({
    container:{
        flex:1,  
        backgroundColor:"#9966CC",
        alignItems:"center",
    
        
        
              
    },   
}
)
export default Qcmasm
