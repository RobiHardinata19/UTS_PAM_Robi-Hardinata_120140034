import React from "react";
import { TouchableOpacity, SafeAreaView, ScrollView, Image, View, FlatList, StyleSheet, Text } from 'react-native';
import { MaterialIcons, AntDesign, FontAwesome5 } from '@expo/vector-icons';



const Profile = ({ navigation }) => {
 
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <View style={styles.top}>
            <TouchableOpacity
              style={styles.button}
              onPress={ () => navigation.goBack()}
            >
            <AntDesign name="arrowleft" size={24} color="#373737" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <FontAwesome5 name="home" size={24} color="#373737" />
            </TouchableOpacity>
          </View>
          
      </View>
      <View style={styles.detail}>
         <Text style={styles.memutar}>Profile Mahasiswa</Text>
            <Image
                style={{width: 160, height:160, borderRadius:10, marginTop:25}}
                source={require('../assets/profile.png')}
            />
        <Text style={styles.teks}>Robi Hardinata</Text>
        <Text style={styles.teks}>120140034</Text>
        <Text style={styles.teks}>Teknik Informatika</Text>
        <Text style={styles.teks}>Institut Teknologi Sumatera</Text>
        
      </View>
      <Text style={styles.copyright}>Copyright Robi Hardinata - 120140034</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6FC',
  },
  header:{
    width:'100%',
    padding:20,
    height: 130,
    
  },
  detail:{
    margin: "auto",
    width: '100%',
    borderRadius:10,
    flexDirection:'column',
    alignItems:'center'
  },
  heading: {
    color: '#ffff',
    fontSize: 30,
    fontWeight : "bold",
    
  },
  memutar:{
    textAlign:'center',
    fontSize :18,
    fontWeight : "bold"
  },
  teks:{
    top:10,
    marginTop:15,
    textAlign:'center',
    fontSize :24,
    backgroundColor:'#fff',
    padding:10,
    width : 280,
    borderRadius:10,
    shadowColor: "#000",
    shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.1,
shadowRadius: 3.65,

elevation: 3,
  },
  pencipta:{
    textAlign:'center',
    fontSize :14,
    color : '#626262',
    marginBottom : 50
  },
  heading2: {
    color: "#373737",
    fontSize: 12,
    textAlign: 'right',
    top : 4,
    left: -10
  },
  top: {
    top : 24,
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"space-between",
    marginBottom:10,
    padding:15
  },
  Image: {
    width:10,
  },
  item: {
    backgroundColor: '#ffff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius:10,
  },
  copyright: {
    color : '#797979',
    fontWeight: 'bold',
    marginTop: 90,
    marginBottom: 20,
    padding:20,
    textAlign: 'center',
  },
});

export default Profile;