import React from 'react'
import { View, Text , StyleSheet ,TouchableOpacity, ScrollView } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
const Qcm = (props) => {
    const qcm1 = () =>{
        props.navigation.navigate("QcmSuite") };
        const qcm2 = () =>{
            props.navigation.navigate("Qcmasm") };
    const Rdv =() => {
            props.navigation.navigate("Prv")
    }
    return (
        <View style={Styles.container}>
            <ScrollView>
                <Text style={{
                    fontSize:25,
                }}>*  Faite vos choix en fontion du besoin</Text>
            <TouchableOpacity
            onPress={qcm1}>
            <View style={{
                borderWidth:3,
                borderColor:"black",
                height:350,
                width:"90%",
                margin:20,
                borderRadius:30,

            }}
            >
             <View style={{
                marginLeft:100,
            
             }}>
             <Text style={{
                 fontSize:30
             }}>Paludisme</Text>
                 </View>
            <View style={{
                padding:20,
            }}>
            <Text
            style={{
                fontSize:20
            }}> * Maux de tête</Text>
                </View> 
                <View style={{
                padding:20,
            }}>
            <Text
            style={{
                fontSize:20
            }}> * douleurs musculaires</Text>
                </View> 
                <View style={{
                padding:20,
            }}>
            <Text
            style={{
                fontSize:20
            }}> * diarrhés de toux</Text>
                </View> 
                <View style={{
                padding:20,
            }}>
            <Text
            style={{
                fontSize:20
            }}> *  afflaiblissement</Text>
                </View> 
                
                  

            </View>
            </TouchableOpacity>


            <TouchableOpacity
            onPress={qcm2}>
            <View style={{
                borderWidth:3,
                borderColor:"black",
                height:350,
                width:"90%",
                margin:20,
                borderRadius:30,

            }}>
             <View style={{
                marginLeft:100,
            
             }}>
             <Text style={{
                 fontSize:30
             }}>asthmes</Text>
                 </View>
            <View style={{
                padding:20,
            }}>
            <Text
            style={{
                fontSize:20
            }}> *  les crises d'etouffements aiguë</Text>
                </View> 
                <View style={{
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
            }}> *  un etouffement à l'effort ou une toux qui ne passe pas</Text>
                </View> 
                
                  

            </View>
            </TouchableOpacity>
            <TouchableOpacity
            style={{backgroundColor:"#ffff",
                    padding:20,
                    marginLeft:20,
                    marginRight:95,
                    borderRadius:30,
                    borderWidth:2,
                    borderColor:'grey',
                    bottom:10,
                    margin:3,
             }}
             onPress={Rdv}
            >
                <Text style={{fontStyle:"italic"}}>Click si votre mal n'est pas repertorier</Text>
            </TouchableOpacity>
            

            
            </ScrollView>
        </View>
    )
}
const Styles = StyleSheet.create({
    container:{
        flex:1,  
        backgroundColor:"#9966CC",
              
    },   
}
)

export default Qcm
