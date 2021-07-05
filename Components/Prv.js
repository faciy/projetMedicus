import React from 'react'
import { View, Text , TextInput , TouchableOpacity } from 'react-native'
import CheckBox from '@react-native-community/checkbox'
const Prv = () => {
    return (
        <View>
            <View>
            <View style={{
                alignItems:"center",
                margin:10,
                borderBottomWidth:2,
                borderLeftWidth:2,
                borderRightWidth:2,
                padding:10,
                borderColor:"grey"
                }}>
            <Text style={{fontSize:28}}>Prise d'un Rendez vous </Text> 
           </View>
             <View style={{padding:30}}>
                <Text>Pour qui prenez vous ce rendez-vous?:</Text>
                <View style={{
                left:30
            }}>
        <CheckBox style={{
            top:8,
            left:220      }}
        />
        <Text style={{
            bottom:45,
            left:250
        }}> Moi même</Text>
           <CheckBox style={{
            top:-70,
            left:220
                   }}
        />
        <Text style={{
            top:-70,
            left:250
        }}>Un proche </Text>
      </View>
           </View>
           <View style={{bottom:115}}>
           <View style={{
               paddingHorizontal:20,  
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
                <Text>êtes vous:</Text>
                <View style={{
                left:30
            }}>
        <CheckBox style={{
            top:21        }}
        />
        <Text style={{
            bottom:3,
            left:35
        }}> Male</Text>
           <CheckBox style={{
            top:10       }}
        />
        <Text style={{
            top:-13,
            left:35
        }}> Femelle</Text>
      </View>
      
      
               </View>
               {/* button */}
               <View style={{justifyContent:'center'}}>
               <TouchableOpacity
            style={{backgroundColor:"#ffff",
                    padding:18,
                    borderRadius:30,
                    borderWidth:2,
                    borderColor:'grey',
                    marginRight:250,
                    
             }}
            >
                <Text >Terminer</Text>
            </TouchableOpacity>
            
               </View>
           
               </View>
            </View>
            </View>
        </View>
    )
}

export default Prv
