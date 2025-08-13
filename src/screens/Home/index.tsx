import React from "react";
import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity,
ScrollView, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";
const participantes = ['Rodrigo', 'vini','diego', 'biro','marcos','lola','pedro','gryce','pri','joana'];

export default function Home() {
const [participantes, setParticipantes] = useState<string[]>([]);
const [participantesName, setParticipantesName] = useState('');
  //funcao apra ver logs em console
  function handleParticipantAdd() {

    if(participantes.includes(participantesName)){
    return Alert.alert("participante existe","Já existe participante na lista com esse nome")

    }
    setParticipantes(prevState => [...prevState,participantesName])
    setParticipantesName('');
  }

  //funcao para mostras os junto a botoes remover logs em console
  function handleParticipantRemove(name: String) {  
    Alert.alert("Remover Participante?",`Você removeu um participante ${name}?`,
      [{
        text:'Sim',
        onPress: () => setParticipantes(prevState => prevState.filter(participantes => participantes !== name))
      },{
        text: 'Não',
        style: 'cancel'
  }]
    )
    console.log(`Você clicou em remover o nome do participante ${name}`);
  }

 


  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "#FFFDFCFE",
          fontWeight: "bold",
          fontSize: 32,
          marginTop: 48,
        }}>

        
        Nome do Evento

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
        //onChangeText={handleState}
        onChangeText={ setParticipantesName}  
        value={participantesName}
      />

      {/* Botão */}
      <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>

      </View>

      
  {/* componente para scrolar tela estilo scrollview  */}
  {/* usar em listas grandes, pois renderiza um componente por vez*/}
    <FlatList
    data={participantes}
    keyExtractor={item => item}
    renderItem={({item})=>(
    <Participant 
        key={item}
        name= {item}
        onRemove={()=> handleParticipantRemove(item)}/>)}
    //desativar barra lateral de rolagem
    showsVerticalScrollIndicator={false}
    
    />
{/* usar em listas pequenos, pois renderiza todos os componentes por vez*/}
     {/*
        {
      //usando funcao participante com map chave valor para repetir os participantes na tela
      participantes.map(participantes => (
        <Participant 
        key={participantes}
       name= {participantes}
       onRemove={()=> handleParticipantRemove("Rodrigo")}/>
     ))
   } 
    */ }
    


     </View>

     
  );
}
