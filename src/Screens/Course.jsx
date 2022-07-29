import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react';
import data1 from '../../API/API1.js';

const Course = () => {

  const courseCard=({item})=>{
    //console.log(item);
    return(
      <View style={styles.mainContainer}>
         <View style={styles.courseContainer}>
              
              <View>
                <Image source={item.image} style={styles.cardImage} resizeMode="contain"/>
              </View>
             <Text style={styles.mainHeader} > {item.title} </Text>
             <Text style={styles.desc} >{item.desc}</Text>

             <View style={styles.buttonContainer}>
                  <TouchableOpacity style={styles.buttonStyle}
                  >
                    <Text style={styles.buttonText}>Details</Text>
                  </TouchableOpacity>
             </View>
         </View>
      </View>
    )
  }

   
  return (
    <FlatList
    data={data1}
    renderItem={courseCard}
    
    />
  )
}


const styles=StyleSheet.create({
  cardImage:{
    width:'100%',
    height:undefined,
    aspectRatio:1,
  },
  mainContainer:{
    paddingHorizontal:30,
  },
  courseContainer:{
    padding:30,
    backgroundColor:'rgba(255,255,255,0.90)',
    textAlign:'center',
    borderRadius:5,
    shadowColor:'grey',
    shadowOffset:{width:0,height:0},
    shadowOpacity:0.5,
    shadowRadius:8,
    elevation:8,
    marginVertical:30,
    },
    mainHeader:{
      fontSize:22,
      color:"#344055",
      fontWeight:500,
      paddingBottom:15,
      textAlign:'center'
    },
    desc:{
      textAlign:'center',
      padding:15,
      lineHeight:20,
      fontSize:16,
      color:'#7d7d7d'
    },
    buttonContainer:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'center'
    },
    buttonStyle:{
      backgroundColor:'#809fff',
      borderRadius:5,
      paddingVertical:10,
      paddingHorizontal:20,
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
    },
    buttonText:{
      fontSize:15,
      color:'#eee'
    }

});

export default Course