import { StyleSheet, Text, View,SafeAreaView,Image } from 'react-native'
import React,{useCallback} from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';




const HomeScreen = () => {
    const [fontsLoaded] = useFonts({
        'Montserrat-regular': require('../assets/fonts/Montserrat-Regular.ttf'),
      });

      const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
      }, [fontsLoaded]);
    
      if (!fontsLoaded) {
        return null;
      }


  return (
    <SafeAreaView>
      <View style={styles.titleWrapper}>
        <Image source={require('../assets/ui-images/profile.png')} style={styles.profilePicture}/>
        <MaterialIcons name='menu' size={28}/>
      </View>
      <View style={styles.titleTextWrapper}>
        <Text style={styles.foodText}>Food</Text>
        <Text style={styles.deliveryText}>Delivery</Text>
      </View>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
    profilePicture:{
        width:40,
        height:40,
        borderRadius:40,
    },
    titleWrapper:{
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal:20,
        marginTop:20,
    },
    titleTextWrapper:{
        marginHorizontal:20,
        marginTop:20,
    },
    foodText:{
        marginBottom:5,
        fontSize:16,
        fontFamily:'Montserrat-regular',

       
    },
    deliveryText:{},
})

export default HomeScreen