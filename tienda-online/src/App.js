import React, {useEffect, useState} from "react"
import logo from './logo.svg';
import './App.css';
//import Greeting from './componentes/holamundo';

function App() {
  const [stateClass, setStateClass] = useState(true)
  const [contar, setContar] = useState(0)
  useEffect(() => {
    console.log('Total: ' + contar)
  }, [contar])
  //const objeto = {
   // grupo: ' Octavo a informatica',
  //  day: ' lunes'
  //}
  //const saludo= (d, g) => {    
    //alert ('Excelente dia' + d + '' +  g )
  //  alert (`Excelente dia ${d} ${g}`)
  
  //}
  const iniciarTerminar = () => {
    setStateClass(!stateClass)
    setContar(contar + 1)
  }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/*<Greeting groupinfo= {objeto}  fuction={saludo}/>*/}
          <h2>La clase ha {stateClass?'Iniciado':'Terminado'}</h2>
          <h3>Clicks: {contar}</h3>
          <button onClick={iniciarTerminar}>Iniciar/Terminar</button>
        </header>
      </div>
    );
  }
  
  export default App
