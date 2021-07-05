import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import Logo from '../assets/Logo.png'


const Bienvenu = props => {

    const inscri = () => {
        props.navigation.navigate("Inscription")
    };
    const connect = () => {
        props.navigation.navigate("Connexion")
    }
    return (
        <View style={Styles.container}>
         <View style ={{flex:1,justifyContent:"center", alignItems:'center',}}>
         <Image 
                source={Logo}
                style={{
                    width:500,
                    height:500,
                }}/>
            <View style={{
                bottom:100
            }}>
            <TouchableOpacity
            style={{backgroundColor:"#ffff",
                    padding:25,
                    borderRadius:30,
                    paddingStart:70,
                    paddingEnd:70
             }}
             onPress={inscri}
            >
                <Text style={Styles.text}>INSCRIPTION</Text>
            </TouchableOpacity>
            
            </View>
            <View style={{
                bottom:50
            }}>
            <TouchableOpacity
            style={{backgroundColor:"#ffff",
            padding:25,
            borderRadius:30,
            paddingStart:70,
            paddingEnd:70

            }}
            onPress={connect}>
                <Text style={Styles.text}>CONNEXION</Text>
            </TouchableOpacity>

            </View>
             </View>   

        </View>
    )
}
const Styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#9966CC",    
    },
    text:{
        color:"blue"
    }

}
)

export default Bienvenu
