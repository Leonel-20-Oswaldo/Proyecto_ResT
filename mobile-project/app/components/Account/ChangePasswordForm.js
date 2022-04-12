import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import firebase from "firebase";
import InputText from "../inputs/InputText";
import ButtonModal from "../buttons/ButtonModal";

const ChangePasswordForm = ({
  displayPassword,
  setReloadUserInfo,
  setShowModal
}) => {
  const [newPassword, setNewPassword] = useState(null);
  const [error, setError] = useState(null);
  const [isLoadig, setIsLoading] = useState(false);

  const onSubmit = () => {
    setError(null);

    if (!newPassword) {
      setError("El email no puede ser vacío");
    }
     
    if (displayPassword === newPassword) {
      setError("El email no puede ser igual al actual");
      return;
    }

    setIsLoading(true);
    const user = firebase.auth().currentUser;
    user
    .updatePassword(newPassword)
    .then(() => {
      firebase.auth().currentUser.reload()

      setIsLoading(false);
      setReloadUserInfo(true);
      setShowModal(false);
    })
    .catch((e) => {
      if(e.code =="auth/requires-recent-login"){
        setError("password");
        setIsLoading(false);
      }
      });
  };

  return (
    <View style={styles.view}>
      <InputText
        placeholder="Contraseña actual"
        icon={{
          type: "lock",
          name: "lock",
          color: "#c2c2c2",
        }}
        value={newPassword || ""}
        onChange={(e) => setNewPassword(e.nativeEvent.text)}
        error={error}
      />
       <InputText
        placeholder="Nueva contraseña"
        icon={{
          type: "lock",
          name: "lock",
          color: "#c2c2c2",
        }}
        value={newPassword || ""}
        onChange={(e) => setNewPassword(e.nativeEvent.text)}
        error={error}
      />
    

      <ButtonModal text="Cambia la contraseña" isLoadig={isLoadig} onPress={onSubmit} />
    </View>
  );
};

export default ChangePasswordForm;

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
  },
  view: {
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
  },
  btnContainer: {
    marginTop: 20,
    width: "95%",
  },
  btn: {
    backgroundColor: "#00a680",
  },
})