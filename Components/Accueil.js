import React from 'react'
import { View, Text , StyleSheet,TouchableOpacity,Image  } from 'react-native'
import local from "../assets/localisation.png"
import qcm from"../assets/qcm.png"
import ajout from"../assets/ajouter.png"
import special from "../assets/specialiste.png"
import contact from "../assets/contact.png"

const Accueil = (props) => {
    const qcM = () =>{
        props.navigation.navigate("Qcm") };
    const Add = () =>{
        props.navigation.navigate("Ajout")};
    const Profile = () =>{
        props.navigation.navigate("Profile")
    }
    return (
        <View style = {Styles.container}>
            <TouchableOpacity style={{
                paddingTop:15,
                paddingHorizontal:10,
                
            }}
            onPress={Profile}
            >
            <View style={{
                borderWidth:3,
                height:70,
                width:70,
                borderRadius:50,  
                backgroundColor:"#ffff",
                borderColor:"grey"
            }}>
                <Image 
                source={contact}
                style={{
                    left:5,
                    top:2     
                }}
                
                />  
            </View>
            </TouchableOpacity>
            <View
            style={{
                flex:1,
                flexDirection:"row",
                justifyContent:'center',
                

            }}>
                
            <View style={{
                padding:20,
                marginTop:40,
                
            }}>
                <TouchableOpacity
                style={{
                    borderWidth:1,
                    backgroundColor:"#ffff",
                    height:180,
                    width:150,
                    borderRadius:30,
                    borderColor:"grey",
                }}
                onPress={qcM}>
                 <View
                style={{
                    flex:1,
                    justifyContent:"flex-end",
                    alignItems:"center"
                }}>
                      <Image 
                source={qcm}
                style={{
                    width:100,
                    top:-35,
                    
                    
                }}
                
                />  
                <Text>
                    Generales
                </Text>

                </View>
               
                </TouchableOpacity>

            </View>

            <View style={{
                padding:20,
                marginTop:40,
                
            }}>
                <TouchableOpacity
                style={{
                    borderWidth:1,
                    backgroundColor:"#ffff",
                    height:180,
                    width:150,
                    borderRadius:30,
                    borderColor:"grey"
                }}>
                

                <View
                style={{
                    flex:1,
                    justifyContent:"flex-end",
                    alignItems:"center"
                }}>
                           <Image 
                source={special}
                style={{
                    width:100,
                    top:-35,
                    
                    
                }}
                
                /> 
                <Text>
                    Specialiste
                </Text>

                </View>
                </TouchableOpacity>

            </View>

            

            </View>

            <View
            style={{
                flex:1,
                flexDirection:"row",
                justifyContent:"center",
                
            }}>
            <View style={{
                padding:20,
                paddingTop:-40,
            }}>
                <TouchableOpacity
                onPress={() => props.navigation.navigate("Map")}
                style={{
                    borderWidth:1,
                    backgroundColor:"#ffff",
                    height:180,
                    width:150,
                    borderRadius:30,
                    borderColor:"grey"
                }}> 
                 <Image 
                source={local}
                style={{
                    width:120,
                    top:30,
                    left:15,
                    
                }}
                
                />  
                <View
                style={{
                    flex:1,
                    justifyContent:"flex-end",
                    alignItems:"center"
                }}> 
                
                <Text>
                    Centre de santé
                </Text>

                </View>
                </TouchableOpacity>

            </View>

            <View style={{
                padding:20,
                paddingTop:-50
            }}>
                <TouchableOpacity
                style={{
                    borderWidth:1,
                    backgroundColor:"#ffff",
                    height:180,
                    width:150,
                    borderRadius:30,
                    borderColor:"grey"
                }}
                onPress={Add}>
                <View
                style={{
                    flex:1,
                    justifyContent:"flex-end",
                    alignItems:"center"
                }}>
                           <Image 
                source={ajout}
                style={{
                    width:50,
                    top:-35,
                    
                    
                }}
                
                /> 
                <Text>
                    Ajouter tiers
                </Text>

                </View>

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
        flexDirection:"column"
        
              
    },
    
}
)

export default Accueil
