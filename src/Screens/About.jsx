import { View, Text, Image, Button, Linking, StyleSheet } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View style={styles.mainContainer}>

      <Text style={styles.mainHeader}> Source of Courses </Text>


      <Image source={require('../../assets/udemy.png')} resizeMode="contain" style={styles.img} />

      <View style={styles.paraConatiner}>

        <Text style={styles.para}>We help organizations of all types and sizes prepare for the path ahead — wherever it leads. Our curated collection of business and technical courses help companies, governments, and nonprofits go further by placing learning at the center of their strategies.</Text>
       

      </View>
      <Button title='Learn More' onPress={() => { Linking.openURL('https://business.udemy.com/') }} />

    </View>
  )
}

const styles = StyleSheet.create({

  mainContainer: {
    height: "100%",
    display: "flex",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    textAlign: "center",
  },
  mainHeader: {
    fontSize: 22,
    color: "#344055",
    fontWeight: 500,
    textAlign: 'center',
  },

  img: {
    height: undefined,
    width: "100%",
    aspectRatio: 1,
    display: 'flex',
    paddingHorizontal:30,
    borderRadius: 20
  },
  paraConatiner: {
    paddingHorizontal: 30,
    textAlign: 'left',
    marginBottom:30
    },
  para: {
    color: '7d7d7d',
    fontSize:15
  }



});



export default About