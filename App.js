import React from 'react'
import { View, Text , StyleSheet } from 'react-native'
import Accueil from './Components/Accueil'
import Bienvenu from './Components/Bienvenu'
import Connexion from './Components/Connexion'
import Home from './Components/Home'
import Inscription from './Components/Inscription'
import Suite from './Components/Suite'
import Qcm from './Components/Qcm'
import Maps from './Components/Maps'
import QcmSuite from './Components/QcmSuite'
import Qcmasm from './Components/Qcmasm'
import Prescrip from './Components/Prescrip'
import Prv from './Components/Prv'
import Ajout from './Components/Ajout'
import Profile from './Components/Profile'
import Map from './Components/Map'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const {Navigator , Screen} = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>

      <Navigator>
        <Screen name ="Bienvenue" component={Bienvenu} />
        <Screen name="Inscription" component={Inscription} />
        <Screen name="Connexion" component={Connexion} />
        <Screen name="Suite" component={Suite} />
        <Screen name="Accueil" component={Accueil} />
        <Screen name ="Qcm" component={Qcm} />
        <Screen name ="QcmSuite" component={QcmSuite} />
        <Screen name ="Qcmasm" component={Qcmasm} />
        <Screen name ="Prescrip" component={Prescrip} />
        <Screen name ="Prv" component={Prv} />
        <Screen name ="Ajout" component={Ajout} />
        <Screen name="Profile" component={Profile} />
        <Screen name="Map" component={Map} />


      </Navigator>
    </NavigationContainer>

    // <View style={Styles.container}>
    //     {/* <Qcm /> */}
    //     {/* <Maps /> */}
    //     {/* <QcmSuite /> */}
    //     {/* <Qcmasm /> */}
    //     {/* < Prescrip/> */}
    //     {/* < Prv /> */}
    //     <Profile />
    // </View>
  )
}
const Styles = StyleSheet.create({
  container:{
      height:'100%'
  }
})
export default App
