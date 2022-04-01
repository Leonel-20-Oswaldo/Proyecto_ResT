import React from "react";
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native'
import { Button } from "react-native-elements";

export default function UserGuest(){
    return(
        <ScrollView style={StyleSheet.container}>
            <Image
                style={styles.stretch}
                source={require('../../../assets/img/user-guest.jpg')}
            />
            <Text style={styles.title}>Ingresa a tu perfil</Text>
            <Text style={styles.description}>Busca y visualiza las mejores opciones en restaurantes de tu cuidad, no olvides rankear tus favoritos</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop: 10
    },
    stretch:{
        width:'100%',
        height: 300,
        resizeMode: 'contain',
        marginBotton: 40
    },
    title:{
        fontWeight:'bold',
        fontSize: 19,
        marginBottom: 10,
        textAlign:'center'
    },
    description:{
        marginBottom: 20,
        textAlign: 'center'

    }
})