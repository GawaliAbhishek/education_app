import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Menu from './Component/Menu'

const Home = () => {
    return (
        <View style={styles.mainContainer}>

            <View style={styles.homeTop}>
                <Image style={styles.headerImage} source={require("../../assets/homescreen.png")} resizeMode="contain" />

                <Text style={styles.mainHeader}> Welcome to </Text>
                <Text style={[styles.mainHeader, { fontSize: 33, color: "#4c5dab", marginTop: 0 }]}> Education App </Text>
                <Text style={styles.paraStyle}>“Intelligence plus character-that is the goal of true education.”</Text>
            </View>
            <View style={styles.menuStyle}>
                <View  style={styles.lineStyle}></View>
                    <Menu />
                    <View  style={[styles.lineStyle, {marginVertical:20}]}></View>
               
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        backgroundColor: "#fff",
        textAlign: "center",
    },
    headerImage: {
        height: undefined,
        width: "100%",
        aspectRatio: 1,
        display: 'flex',
        alignItems: 'stretch',
        marginTop: 10,
        borderRadius: 20

    },
    homeTop: {
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10
    },
    mainHeader: {
        fontSize: 30,
        color: '#344055',
        textTransform: "uppercase",
    },
    paraStyle: {
        textAlign: 'center',
        fontSize: 19,
        color: '$7d7d',
        marginTop: 30,
        paddingBottom: 20,
        lineHeight: 26,
    },
    lineStyle:{
        marginBottom:20,
        borderWidth:0.5,
        borderColor:'grey'
    }



});

export default Home;