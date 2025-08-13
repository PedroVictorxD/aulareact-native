import Home from "./src/screens/Home";
import LoginScreen from "./src/screens/Home/telaLogins";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
    {/* barra home da aplicaçao */}
      <StatusBar 
        
  
  backgroundColor="transparent" 
  //subir barra em icunes do topo, apaga icones de wife e hora do celular
  translucent={false} 
  style="dark"
/>

      <Home />
      {/* Se quiser renderizar o LoginScreen ao invés de Home, basta trocar: */}
      {/* <LoginScreen /> */}
    </>
  );
}
