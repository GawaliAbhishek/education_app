import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Contact = ({navigation}) => {

    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [number,setNumber]=useState();
    const [message,setMessage]=useState();
  const submit=()=>{
    if(!name && !email && !number && !message  )
    alert('please fill the data')
    else{
    alert(`Thank you ${name} 🥳`)
    navigation.navigate('Home');
    }
  }
  return (
    <View style={styles.mainContainer}>

      <Text style={styles.mainHeader}> Level up your knowledge</Text>

      <Text style={styles.desc}> lrem ahhd aikjneioj ajhh akieojn ndaonx idna ijdn aj ijnbdo</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}> Enter your name</Text>
        <TextInput style={styles.inputStyles} placeholder="Your Name" value={name} onChangeText={(item)=> setName(item)} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}> Enter your email</Text>
        <TextInput style={styles.inputStyles} placeholder="Your email" value={email } onChangeText={(item)=> setEmail(item) } />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}> Enter your mobile number</Text>
        <TextInput style={styles.inputStyles} placeholder="Your number" value={ number} onChangeText={(item)=> setNumber(item) } />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Message</Text>
        <TextInput style={[styles.inputStyles, styles.multiLines]} numberOfLines={5} multiline={true} placeholder="your message" value={message } onChangeText={ (item)=> setMessage(item)} />
      </View>

     <TouchableOpacity  style={[styles.buttonStyle,
     {  backgroundColor:'#4630EB' }
    ]}
    onPress={submit}
    
    > 
      <Text style={styles.buttonText}> Submit </Text>
     </TouchableOpacity>

    </View>
  )
}
const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    paddingHorizontal: 30,
    backgroundColor: '#fff',
  },
  mainHeader: {
    fontSize: 20,
    color: '#344055',
    fontWeight: '500',
    paddingTop: 20,
    paddingBottom: 15,

  },
  desc: {
    fontSize: 20,
    color: '#7d7d7d',
    paddingBottom: 20,
    lineHeight: 25
  },
  inputContainer: {
    marginTop: 20
  },
  inputStyles: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 2,
  },
  labels:{
    fontWeight:'bold',
    color:'#7d7d7d',
    paddingBottom:5,
    lineHeight:25
  },
  buttonStyle:{
    borderRadius:5,
    paddingVertical:10,
    paddingHorizontal:18,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginVertical:30
  },
  buttonText:{
    color:'#eee'
  }




});

export default Contact