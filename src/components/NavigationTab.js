import * as React from 'react';
import { View } from 'react-native';
import { BottomNavigation , Text ,StyleSheet } from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Playstationgame from './playstation';
import Xboxgame from './xbox';
import Nintendogame from './nintendo';
const playstation =()=> <Playstationgame/>
const Xbox =()=> <Xboxgame/>
const Nintendo=()=><Nintendogame/>

const NavigationBar =()=>{
    const [index , setIndex] = React.useState(0);
    const [routes] = React.useState([
        {key : 'playstation', title: 'playstation' , focusIcon: 'heart' ,unfocusedIcon: 'heart-outline'},
        {key : 'xbox', title: 'xbox' , focusIcon: 'heart' , unfocusedIcon: 'heart-outline'},
        {key : 'nintendo', title: 'nitendo' , focusIcon: 'heart-outline' , unfocusedIcon: 'heart-outline'},
    ]);

    const renderScene = BottomNavigation.SceneMap({
        playstation :playstation,
        xbox : Xbox,
        nintendo : Nintendo,
    })

     return(
        
        <SafeAreaProvider >
        <BottomNavigation   
         navigationState={{index, routes} }
         onIndexChange={setIndex}
         renderScene={renderScene}/>
         </SafeAreaProvider>
        
     )
}
export default  NavigationBar;




  
