import React from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import { Divider } from 'react-native-elements'
import { useNavigation } from "@react-navigation/native";

export default function Login(){
    return(
        <ScrollView>
            <Image source={require('../../../assets/img/restaurant.jpg')} resizeMode='contain' style={styles.logo}
            />
            <View style={styles.viewContainer}>
                <Text>Login From</Text>
                <CreateAccount/>     
            </View>
            <Divider style={styles.Divider}/>
        </ScrollView>
    )
}

function CreateAccount(){
    const navigation = useNavigation()
    return(
        <Text style = {styles.textRegister}>
            ¿Aun no tienes Cuneta? {' '}
            <Text style ={styles.linkRegister}
            onPress={()=>navigation.navigate('register')}
            >
            Sign up
            </Text>
        </Text>
    )
}

const styles = StyleSheet.create({
    logo:{
        width: '100%',
        height: 150,
        marginTop: 20
    },
    viewContainer:{
        marginRight: 40,
        marginLeft: 40,
        textAlign:'center'
    },
    Divider:{
        backgroundColor:'#00a630',
        margin: 40
    },
    textRegister:{
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        textAlign:'center'
    },
    linkRegister:{
        color: '#00a600',
        fontWeight: 'bold',
        textAlign: 'justify'
    }
})