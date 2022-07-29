import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View  style={styles.aboutContainer}>
     
      <View>
        <Image source={require('../../assets/GawaliAbhishek.jpeg')} style={styles.imgStyle}/>
      </View>
      <Text style={styles.mainHeader}> Abhishek Sanjay Gawali</Text>
      <Text  style={styles.paraStyle}> I am a Full stack Devloper</Text>
         <View  style={styles.aboutLayout}>
            <Text style={styles.aboutsubheader}>About me</Text>
            <Text style={styles.paraStyle}>
                 here is trhe lorem aso ajjsubsg jjjabdueibIni aokihenidi diuidbadh i9bub ibdiadnidb8ai i8dbibi hvdudduvduv uvdu
            </Text>
         </View>
    </View>
  )
}

const styles=StyleSheet.create({
  aboutContainer:{
    display:'flex',
    alignItems:'center',
  },
  imgStyle:{
    width:150,
    height:150,
    borderRadius:100,
    marginTop:40
  },
  mainHeader:{
    fontSize:18,
    color:"#344055",
    fontWeight:'500',
    marginTop:20,
    marginBottom:10,
  },
  paraStyle:{
    fontSize:18,
    color:'#7d7d7d',
    textAlign:'center'
  },
  aboutLayout:{
    paddingHorizontal:30,
    marginVertical:30,


  },
  aboutsubheader:{
    fontSize:18,
    fontWeight:'500',
    marginVertical:15,
    lineHeight:30,
    alignSelf:'center'
  }
 

});

export default About