import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Logo from '../assets/Logo.png'

const Home = () => {
    return (
        <View style = {Styles.container}>
            <View style={Styles.home}>
            <View style={Styles.image}>
                <Image 
                source={Logo}
                style={{
                    width:600,
                    height:600
                }}
                />
            </View>
            <Text style={Styles.text}>Bienvenue!</Text>
            </View>
        </View>
    )
}
const Styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#9966CC",
        
    },
    home:{
        justifyContent:"center",
        alignItems:'center'
    },
    image:{
        left:-10,
        top:40
    },
    text:{
        fontSize:40,
        color:"#ffff",
        bottom:90,
    }
})

export default Home
