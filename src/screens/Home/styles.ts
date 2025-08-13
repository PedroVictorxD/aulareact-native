import { StyleSheet } from "react-native";

//seprar as regras de instilização dos componentes texts e views
export const styles = StyleSheet.create({

  container: {
     flex: 1,
      backgroundColor: '#131016',
      padding: 24,
  },
  eventName: {
     color: '#dc520cfe',
        fontWeight: 'bold',
        fontSize: 24,
        marginTop: 48


  },
  //entrada de dados
  inputEstilo: {
   marginRight: 12,
   flex: 1,
  height: 56,
  backgroundColor: '#1F1e25',
  borderRadius: 5,
  padding: 16,
  fontSize: 16,
  color: '#efe8e8ff',
  
  },

  buttonText: {
   color: '#faf7f7ff',
   fontSize: 24,
   
  },
  button: {
   height: 56,
   width: 56,
   borderRadius: 6 ,
   backgroundColor: '#31cf67',
   //alinhar na horizontal
   alignItems: "center",
   //alinhar na vertical
   justifyContent: "center"

  },

  form: {
   width: '100%',
   flexDirection: 'row',
   marginBottom: 42,

  }
})