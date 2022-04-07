import React, {useState, useRef, useEffect} from "react";
import { View, Text, Button } from 'react-native'
import firebase from "firebase";
import InfoUser from "../../components/Account/InfoUser";

export default function UserLogged(){
    const [userInfo, setUserInfo] = useState(null)
    useEffect(()=>{
        (async()=>{
            const user = await firebase.auth().currentUser
            setUserInfo(user)
        })()
    },[])
    return(
        <View>
            {userInfo&&<InfoUser userInfo={userInfo}/>}
            <Button title="Cerrar sesión" onPress={()=>firebase.auth().signOut()}/>
        </View>
    )
}
