import React,{useState} from 'react'
import { View, Text , TextInput,StyleSheet,TouchableOpacity } from 'react-native'

const Inscription = props => {
    const inscri2 = () => {
        props.navigation.navigate("Suite")
    };

    return (
        <View style={Styles.container}>
           <View style={{
               paddingHorizontal:30,
               
               
           }}>
               <View style={{padding:10}}>
           <TextInput 
           placeholder="nom"
           style={{
            borderBottomWidth:2,
            paddingTop:5,
            // top:40

           }}
           />
               </View>
               {/* one */}
               <View style={{padding:10}}>
           <TextInput 
           placeholder="Prenom"
           style={{
            borderBottomWidth:2,
            paddingTop:5,
            // top:40

           }}
           />
               </View>
               {/* two */}
               <View style={{padding:10}}>
           <TextInput 
           placeholder="E-mail"
           style={{
            borderBottomWidth:2,
            paddingTop:5,
            // top:40

           }}
           />
               </View>
               {/* thre */}
               <View style={{padding:10}}>
           <TextInput 
           placeholder="Mot de passe"
           style={{
            borderBottomWidth:2,
            paddingTop:5,
            // top:40

           }}
           />
               </View>
               {/* four */}
               <View style={{padding:10}}>
           <TextInput 
           placeholder="Confirmation du mot de passe"
           style={{
            borderBottomWidth:2,
            paddingTop:5,
            // top:40

           }}
           />
               </View>
               {/* five */}
               <View style={{padding:10}}>
           <TextInput 
           placeholder="Adresse"
           style={{
            borderBottomWidth:2,
            paddingTop:5,
            // top:40

           }}
           />
               </View>
               {/* six */}
               <View style={{padding:10}}>
           <TextInput 
           placeholder="Personne à contacter"
           style={{
            borderBottomWidth:2,
            paddingTop:5,
            // top:40

           }}
           />
               </View>
               {/* seven */}
               <View style={{padding:10}}>
           <TextInput 
           placeholder="Numéro"
           style={{
            borderBottomWidth:2,
            paddingTop:5,
            // top:40

           }}
           />
               </View>
               {/* button */}
               <View style={{marginTop:50,justifyContent:'center'}}>
               <TouchableOpacity
            style={{backgroundColor:"#ffff",
                    padding:20,
                    borderRadius:30,
                    borderWidth:2,
                    borderColor:'grey'
             }}
             onPress={inscri2}
            >
                <Text style={Styles.text}>S'inscrire</Text>
            </TouchableOpacity>
            
               </View>
           
               </View>
        </View>
    )
}
const Styles = StyleSheet.create({
    container:{
        flex:1,  
    
        marginTop:10        
    },
    text:{
        textAlign:'center',
        fontSize:15
    }
}
)
export default Inscription
