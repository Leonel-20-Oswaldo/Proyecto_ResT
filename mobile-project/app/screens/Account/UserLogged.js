import {StyleSheet, View, Text} from 'react-native'
import firebase from "firebase";
import Toast from "react-native-toast-message";
import InfoUser from "../../components/Account/InfoUser";
import React, {useState, useRef, useEffect} from "react";
import {Button } from 'react-native'
import AccountOptions from '../../components/Account/AccounOptions';



export default function UserLogged(){
    const[userInfo, setUserInfo] = useState(null)
    const [reloadUserInfo, setReloadUserInfo] = useState(false)
    const toastRef = useRef()
    
    useEffect(()=>{
        (async()=>{
        const user = await firebase.auth().currentUser
        setUserInfo(user)

        })()
    setReloadUserInfo(false)
    },[reloadUserInfo])
   
    return(
        <View style={styles.viewUserInfo}>
            {userInfo&& (<InfoUser userInfo={userInfo} toastRef={toastRef}/>)}
            <AccountOptions userInfo ={userInfo} toastRef={toastRef} setReloadUserInfo={setReloadUserInfo}/>
            <Button 
                title="Cerrar sesion" 
                buttonStyle={styles.btnCloseSession}
                titleStyle={styles.btnCloseSessionText}
                onPress={()=>firebase.auth().signOut()}
            />
            <Toast ref={toastRef}/>

        </View>
    )
}

const styles = StyleSheet.create({
    viewUserInfo:{
        minHeight:'100%',
        backgroundcolor: '#f2f2f2'
    },
    btnCloseSession:{
        marginTop: 10,
        borderRadius: 10, 
        backgroundColor: 'red',
        borderTopWidth: 10,
        borderTopColor: 'red',
        borderBottomWidth: 1,
        borderBottomColor: 'red',
        paddingTop: 10,
        paddingBottom: 10,
        width: '100%',
        height: 150,
    


    },
    btnCloseSessionText:{
        color:'red',
        width: '100%',
        height: 150,
        marginTop: 20,
        borderRadius: 24
    },
    button:{
        width: '100%',
        height: 150,
        marginTop: 20,
        color: 'red'

    },

    title:{
        width: '100%',
        height: 150,
        marginTop: 20
    }
})

