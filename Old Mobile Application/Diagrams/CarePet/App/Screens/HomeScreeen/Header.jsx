import { View, Text, Image, StyleSheet,TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo';
import Colors from '../../Utils/Colors';
import { FontAwesome } from '@expo/vector-icons';

export default function Header() {
    const{user,isLoading}=useUser();
  return user&&(
    <View style={styles.container}>

    {/* Profile Section */}
    <View style={styles.profileMainContainer}>
        
        <View style={styles.profileContainer}>
            <Image source={require("./../../../assets/Images/pet.png")}
             style={styles.userImage}/>

             <View>
             <Text style={{ color: Colors.White, fontSize: 35, fontWeight: 'bold', fontFamily: 'outfit' }}>CarePet</Text>
            <Text style={{ color: Colors.White, fontSize: 18, fontFamily: 'outfit-bold' }}>Pet Love Meets Freedom of Mind</Text>
             </View>
         </View>
          
         </View>

         {/* Search Bar Section */}
         <View style={styles.searchBarContainer}>
            <TextInput placeholder='Search' 
            style={styles.textInput}/>
            <FontAwesome name="search" 
            style={styles.searchbtn}
            size={24} color={Colors.Gray} />
         </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        padding:20,
        paddingTop:40,
        backgroundColor:Colors.Blue,
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30
    },

    profileMainContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:"center",
        justifyContent:'space-between'
    },

    profileContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:20
    },

    textInput:{
        padding:7,
        paddingHorizontal:18,
        backgroundColor:Colors.White,
        borderRadius:15,
        width:'85%',
        fontSize:16,
        fontFamily:'outfit'
    },

    searchBarContainer:{
        marginTop:15,
        display:'flex',
        flexDirection:'row',
        gap:10,
        marginBottom:10
    },

    searchbtn:{
        backgroundColor:Colors.White,
        padding:10,
        borderRadius:15
    },

    userImage: {
        width: 70,
        height: 70,
        borderRadius: 35 
    }
})