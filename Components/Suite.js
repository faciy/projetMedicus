import React from 'react'
import { View, Text , StyleSheet, TextInput,TouchableOpacity} from 'react-native'

import CheckBox from '@react-native-community/checkbox';


const Suite = (props,) => {

    const termi = () => {
        props.navigation.navigate("Accueil")
    };
    return (
        <View style={Styles.container}>
            <View style={{marginTop:50}}>
            <Text style={{textAlign:"center", fontSize:20,fontWeight:"bold"}}>
                Pour finaliser votre
                 inscription veuillez remplir ces formulaires</Text>
            </View>
            <View style={Styles.cardOne}>
                <View style={Styles.smallCard}>
                <Text style={{padding:10}}> Preciser votrre groupe sanguin.         *</Text>
                </View>
                <View style={{borderBottomWidth:2,
            paddingTop:20,marginRight:20,marginLeft:20}}>
                    <TextInput/>
                </View>
            </View>
            <View style={Styles.cardOne}>
                <View style={Styles.smallCard}>
                <Text style={{padding:10}}> Avez vous une maladie recurrente? Si oui precisez.</Text>
                </View>
                <View style={{borderBottomWidth:2,
            paddingTop:20,marginRight:20,marginLeft:20}}>
                    <TextInput/>
                </View>
            </View>
            <View style={Styles.cardOne}>
                <View style={Styles.smallCard}>
                <Text style={{padding:10}}>Avez vous un handicap? Si oui precisez.</Text>
                </View>
                <View style={{borderBottomWidth:2,
            paddingTop:20,marginRight:20,marginLeft:20}}>
                    <TextInput/>
                </View>
            </View>
            <View style={{
                left:30
            }}>
        <CheckBox style={{
            top:21        }}
        />
        <Text style={{
            bottom:3,
            left:35
        }}> Accepter les conditions d'utilisation</Text>
      </View>
            <View >
            <TouchableOpacity style={{alignItems:"center",  borderWidth:2,
            backgroundColor:"#ffff",
            borderRadius:20,
            marginTop:10,
            marginLeft:230,
            padding:10}}
            onPress={termi}>
                    <Text>Terminer</Text>

            </TouchableOpacity>
            
            </View>
        </View>
    )
}
const Styles = StyleSheet.create({
    container:{
        height:'200%',
        backgroundColor:"#9966CC",
        paddingHorizontal:20,
        marginTop:-25
        
    },
    cardOne:{
        width:"100%",
        height:150,
        backgroundColor:"#ffff",
        marginTop:20,
    },
    smallCard:{
        height:50,
        borderWidth:2,
        borderColor:"grey",
        marginTop:15,
        marginLeft:20,
        marginRight:20

    }
})
export default Suite

