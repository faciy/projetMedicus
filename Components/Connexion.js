import React , {useState, useEffect }from 'react'
import { View, Text , TextInput,StyleSheet,TouchableOpacity } from 'react-native'
import { color } from 'react-native-reanimated';
import TouchID from 'react-native-touch-id';
const Connexion = props => {

    const termi2 = () => {
        props.navigation.navigate("Accueil")
    };
    
    // Debut Touch id

    const[supported,setSupported]=useState(null);
    const [none, setNome] = useState('Animo');

  
    useEffect(() => {
        TouchID.isSupported()
        .then(sucesso => {
            setSupported(true);
        })
        .catch((error)=>{
            console.log("ERROR TOUCH"+error);
            alert('Touche ID nao suportado/habilitado')
        })
    } , []);

    const face = () => {
        const configs ={
            title: "Autenticacao Touch ID",
            color:"red",
            sensorErrorDescription: "Touch ID invalide"
        }
        TouchID.authenticate("Bienvenu",configs)
        .then(success => {
            console.log("ok")
            setNome('sndkjdbnd');
        })
        .catch((error)=>{
          console.log('FALCHA NA AUTENTICACAO'+error);       
        });

    //    fin Touch id
    };
    return (
        <View style={Styles.container}>
           <View style={{
               paddingHorizontal:30,
               marginTop:200
               
           }}>
               <View style={{padding:10}}>
           <TextInput 
           placeholder="ID Santé"
           style={{
            borderBottomWidth:2,
            paddingTop:5,
            // top:40

           }}
           />
               </View>
               
               <View style={{padding:10}}>
           <TextInput 
           placeholder="Mot de passe"
           style={{
            borderBottomWidth:2,
            paddingTop:5,
            // top:40

           }}
           />
           {/* button */}
           <View style={{marginTop:50,justifyContent:'center'}}>
               <TouchableOpacity
               onPress={face}
            >
                <Text style={Styles.text}>Touch ID</Text>
            </TouchableOpacity>
            
               </View>
           

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
             onPress={termi2}
            >
                <Text style={Styles.text}>Connexion</Text>
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
        textAlign:'center',
        fontSize:15,
        color:"blue"
    }
}
)
export default Connexion
