import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";
export default function home() {

  //funcao apra ver logs em console
  function handleParticipantAdd() {
    console.log("Você clicou no botão de adicionar");
  }

  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "#FFFDFCFE",
          fontWeight: "bold",
          fontSize: 32,
          marginTop: 48,
        }}
      >
        React Native
      </Text>

      <Text style={styles.eventName}>
        4 de novembro de 10
      </Text>

      {/* Entrada de dados */}
      <View style={styles.form}>

          <TextInput
        style={styles.inputEstilo}
                placeholder="Nome do participante"
        placeholderTextColor="#6b6b6b"
        keyboardType="email-address"

      />

      {/* Botão */}
      <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>

      </View>

      <Participant/>
      <Participant/>
      <Participant/>
    
     </View>

     
  );
}
