import { View, Text, Image, StyleSheet, Button, Linking } from 'react-native'
import React from 'react'

const User = () => {
  return (
    <View style={styles.aboutContainer}>

      <View>
        <Image source={require('../../assets/GawaliAbhishek.jpeg')} style={styles.imgStyle} />
      </View>
      <Text style={styles.mainHeader}> Abhishek Sanjay Gawali</Text>
      <Text style={styles.paraStyle}> Student || Third Year || CSE || SSGMCE </Text>
      <Text style={styles.paraStyle}>Akola, Maharashtra, India </Text>
      <View style={styles.aboutLayout}>
        <Text style={styles.aboutsubheader}>About me</Text>
        <Text style={styles.paraStyle}>
          Seeking a position in the field of Computer Science where I can utilize my skills to further work towards personal and professional development.
        </Text>
      </View>

      <Button title='Learn More' onPress={() => Linking.openURL('https://www.linkedin.com/in/abhishek-gawali-873a50215/?originalSubdomain=in')} />
    </View>
  )
}
const styles = StyleSheet.create({
  aboutContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  imgStyle: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginTop: 40
  },
  mainHeader: {
    fontSize: 18,
    color: "#344055",
    fontWeight: '500',
    marginTop: 20,
    marginBottom: 10,
  },
  paraStyle: {
    fontSize: 18,
    color: '#7d7d7d',
    textAlign: 'center'
  },
  aboutLayout: {
    paddingHorizontal: 30,
    marginVertical: 30,


  },
  aboutsubheader: {
    fontSize: 18,
    fontWeight: '500',
    marginVertical: 15,
    lineHeight: 30,
    alignSelf: 'center'
  }


});



export default User