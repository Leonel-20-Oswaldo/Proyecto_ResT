import React from "react";
import { StyleSheet, View, Text, Image } from 'react-native'


export default function Register(){
    return(
        <View>
            <Image source={require('../../../assets/img/restaurant.png')} resizeMode='contain' style={styles.logo}
                />
             <View style ={Styles.viewForms}>
                 <Text>Formulario de registro</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewForms:{
        marginRight: 40,
        marginLeft: 40,
        fontWeight:'bold',
        fontSize: 19,
        marginBottom: 10
    },
    logo:{
        width: '100%',
        height: 150,
        marginTop: 20
    }
})