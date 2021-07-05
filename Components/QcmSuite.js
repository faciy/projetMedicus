import React from 'react'
import { View, Text , TouchableOpacity, ScrollView,StyleSheet } from 'react-native'

const QcmSuite = (props) => {
    const qcm3 = () => {
        props.navigation.navigate("Prescrip")
    };
    return (
        <View style={Styles.container}>
            {/* <ScrollView> */}
            <TouchableOpacity 
            onPress={qcm3}>
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
             }}>Soin Paludisme</Text>
                 </View>
            <View style={{
                padding:20,
            }}>
            <Text
            style={{
                fontSize:20
            }}> * artémether+ luméfantrine
             ou artésunate
            ou chloroquine</Text>
                </View> 
                <View style={{
                padding:20,
            }}>
            </View>
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

export default QcmSuite
