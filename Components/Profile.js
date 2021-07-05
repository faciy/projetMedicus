import React from 'react'
import { View, Text, Image , StyleSheet, TouchableOpacity } from 'react-native'
import contact2 from "../assets/contact2.png"

const Profile = (props) => {
    const retour = () =>{
        props.navigation.navigate("Accueil")
    }
    return (
        <View style={Styles.container}>
            <TouchableOpacity style={{
                marginTop:40,
                borderWidth:2,
                marginRight:200,
                marginBottom:500,
                justifyContent:"center",
                alignItems:"center",
                flexDirection:"column",
                left:90,
                borderRadius:900

            }}>
                 <Image 
                source={contact2}
                style={{
                    width:200,
                    height:200,
                }}
                /> 
            </TouchableOpacity>
            <View>
                
            </View>
            <View style={{
                marginTop:-430,
            }}>
                <View style={{
                    marginTop:20,
                    borderBottomWidth:2,
                    borderColor:'grey',
                    padding:5,
                    marginRight:250,
                    left:10,
                }}><Text>
                    Nom
                    </Text></View>

                    <View style={{
                    marginTop:20,
                    borderBottomWidth:2,
                    borderColor:'grey',
                    padding:5,
                    marginRight:180,
                    left:170,
                    top:-52
                }}><Text>
                    Prenom
                    </Text></View>

                    <View style={{
                    marginTop:20,
                    borderBottomWidth:2,
                    borderColor:'grey',
                    padding:5,
                    marginRight:250,
                    top:-24,
                    left:10

                }}><Text>
                    Age
                    </Text></View>

                    <View style={{
                    marginTop:20,
                    borderBottomWidth:2,
                    borderColor:'grey',
                    padding:5,
                    marginRight:180,
                    left:170,
                    top:-75,
                }}><Text>
                    Taille
                    </Text></View>

                    <View style={{
                    marginTop:20,
                    borderBottomWidth:2,
                    borderColor:'grey',
                    padding:5,
                    marginRight:250,
                    top:-45,
                    left:10
                }}><Text>
                    Poids
                    </Text></View>

                    <View style={{
                    marginTop:20,
                    borderBottomWidth:2,
                    borderColor:'grey',
                    padding:5,
                    marginRight:180,
                    left:170,
                    top:-95,
                }}><Text>
                    Date de naissance
                    </Text></View>


                    <View style={{
                    marginTop:20,
                    borderBottomWidth:2,
                    borderColor:'grey',
                    padding:5,
                    marginRight:250,
                    left:10,
                    top:-75,
                }}><Text>
                    Groupe Sanguin:
                    </Text></View>

                    <View style={{marginTop:20,justifyContent:'center'}}>
               <TouchableOpacity
            style={{backgroundColor:"#ffff",
                    padding:20,
                    borderRadius:30,
                    borderWidth:2,
                    borderColor:'grey',
                    marginRight:170,
                    marginHorizontal:120
             }}
             onPress={retour}
            >
                <Text style={Styles.text}>Termine</Text>
            </TouchableOpacity>
            
               </View>
                    
                
            </View>
        </View>
    )
}
const Styles = StyleSheet.create({
    container:{
        flex:1,  
                    
    },
    
}
)

export default Profile
