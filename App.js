import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Buscador from './src/components/Buscador';
import NavigationBar from './src/components/NavigationTab';
//import HomeActivity from './src/components/image';
//import image from './src/components/image';
export default function App() {
  return (
    <>
    
    <StatusBar barStyle="auto"/>
    <SafeAreaView style={styles.Header}>
      <Text style={styles.HeadApp}>Arcade</Text>    
    </SafeAreaView>
  

    <Buscador/>
    <NavigationBar /> 
    
  
    </>
  );
}

const styles = StyleSheet.create({
  Header:{
    backgroundColor: '#04306e',
    height:100,
    
    alignItems:'center'
  },
  HeadApp:{
    fontSize: 50,
    fontWeight:'bold',
    color:"white",
    marginTop: 20,
  },
  Scroll:{
    backgroundColor:'red'
  }
});
