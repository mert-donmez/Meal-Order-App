import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useCallback } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import categoriesData from "../assets/Data/categoriesData";
import popularData from "../assets/Data/popularData";
import { StatusBar } from "expo-status-bar";

const HomeScreen = () => {
  const [fontsLoaded] = useFonts({
    "Montserrat-regular": require("../assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Bold": require("../assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-SemiBold": require("../assets/fonts/Montserrat-SemiBold.ttf"),
    "Montserrat-Medium": require("../assets/fonts/Montserrat-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const renderCategoriesItems = ({ item }) => {
    return (
      <View
        style={[
          styles.sectionWrapper,
          {
            marginLeft: item.id == 1 ? 20 : 0,
            backgroundColor: item.selected ? "#FF0032" : "white",
          },
        ]}
      >
        <Image source={item.image} style={styles.categoryImage} />
        <Text style={[styles.categoryTitleText,{color:item.selected &&'white'}]}>{item.title}</Text>
        <View
          style={[
            styles.categorySelectIconWrapper,
            { backgroundColor: item.selected ? "white" : "#FF0032" },
          ]}
        >
          <MaterialIcons
            name="arrow-forward-ios"
            size={15}
            color={item.selected ? "black" : "white"}
          />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <ScrollView>
        <View style={styles.titleWrapper}>
          <Image
            source={require("../assets/ui-images/profile.png")}
            style={styles.profilePicture}
          />
          <MaterialIcons name="menu" size={28} />
        </View>

        <View style={styles.titleTextWrapper}>
          <Text style={styles.foodText}>Food</Text>
          <Text style={styles.deliveryText}>Delivery</Text>
        </View>
        <View style={styles.searchWrapper}>
          <MaterialIcons name="search" size={20} />
          <View style={styles.textInputWrapper}>
            <Text style={styles.searchText}> Search..</Text>
            <View style={styles.dividerSearch} />
          </View>
        </View>
        <Text style={styles.categoriesText}>Categories</Text>
        <View>
          <FlatList
            data={categoriesData}
            renderItem={renderCategoriesItems}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <Text style={styles.popularText}>Popular</Text>

        {popularData.map((item) => (
        
          <View key={item.id} style={[styles.popularMealsWrapper,{marginTop:item.id ==1 ? 10 : 0}]}>
            <View style={styles.leftSide}>
            <View style={styles.popularMealsTopTitle}>
              <MaterialIcons name="favorite" size={15} color={'#FF0032'} />
              <Text style={styles.topOfWeekText}>Top of The Week</Text>
            </View>
            <View style={styles.popularMealsMidTitle} >
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemWeight}>Weight {item.weight}</Text>
            </View>
            <View style={styles.bottomWrapper}>
            <View style={styles.addToBasketWrapper}>
                <MaterialIcons name="add" size={20} color={'white'} />
            </View>
            <View  style={styles.ratingWrapper}>
                <MaterialIcons name="star" size={12} color={'black'} />
                <Text style={styles.ratingText}>{item.rating}</Text>
            </View>
            </View>
            </View>
            <View style={styles.rightSide}>
                <Image source={item.image} style={styles.mealImage} />
            </View>
            </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    
    ratingText:{
        fontSize:12,
        marginLeft:5,
        fontFamily:'Montserrat-SemiBold',

    },
    bottomWrapper:{
        flexDirection:'row',
        alignItems:'center',
    },
    rightSide: {
    overflow: 'hidden',
    flex: 1,
    justifyContent:'center',

  },
  mealImage: {
    resizeMode: 'contain',
    width: 220,  
    height: 220, 
    marginLeft:20,
  },
    ratingWrapper:{
        marginLeft:20,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        
    },
    addToBasketWrapper:{
        backgroundColor:'#FF0032',
        height:53,
        width:90,
        borderBottomLeftRadius:25,
        borderTopRightRadius:25,
        marginTop:10,
        justifyContent:'center',
        alignItems:'center',

    },
    itemTitle:{
        marginBottom:5,
        fontSize:14,
        fontFamily:'Montserrat-SemiBold',
        color:'#313234',
    },
    itemWeight:{
        fontSize:12,
        fontFamily:'Montserrat-Medium',
        color:'#C4C4C4'
        

    },
    popularMealsMidTitle:{
        marginLeft:20,
        marginTop:20,

    },
    topOfWeekText:{ 
        fontSize:14,
        fontFamily:'Montserrat-SemiBold',
        marginLeft:5,
    },
  popularMealsWrapper: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    height: 161,
    backgroundColor: "white",
    marginBottom: 20,
    marginHorizontal: 20,
    borderRadius: 25,
    flexDirection:'row',
  },
  popularMealsTopTitle: {
    flexDirection: "row",
    marginLeft: 20,
    marginTop: 24,
    alignItems:'center',

  },
  categorySelectIconWrapper: {
    borderRadius: 26,
    height: 26,
    width: 26,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  categoryImage: {
    marginTop: 24,
  },
  sectionWrapper: {
    height: 190,
    width: 130,
    borderRadius: 20,
    marginRight: 20,
    marginTop: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  titleWrapper: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleTextWrapper: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  foodText: {
    marginBottom: 5,
    fontSize: 16,
    fontFamily: "Montserrat-regular",
  },
  deliveryText: {
    fontSize: 36,
    fontFamily: "Montserrat-Bold",
  },
  searchWrapper: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 30,
    alignItems: "center",
  },
  dividerSearch: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "black",
    marginTop: 5,
  },
  textInputWrapper: {
    flex: 1,
  },
  searchText: {
    fontSize: 15,
    fontFamily: "Montserrat-SemiBold",
    color: "#CDCDCD",
  },
  categoriesText: {
    marginHorizontal: 20,
    marginTop: 30,
    fontSize: 16,
    fontFamily: "Montserrat-Bold",
  },
  popularText: {
    marginHorizontal: 20,
    fontSize: 16,
    fontFamily: "Montserrat-Bold",
    marginTop: 10,
  },
  categoryTitleText:{
    fontSize:14,
    color:'#313234',
    fontFamily:'Montserrat-SemiBold',

  },
});

export default HomeScreen;
