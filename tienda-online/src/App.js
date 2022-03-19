import logo from './logo.svg';
import './App.css';
import Greeting from './componentes/holamundo';

function App() {
  const objeto = {
    grupo: ' Octavo a informatica',
    day: 'lunes'
  }
  const saludo= (g) => {    
    alert ('Excelente dia' +   g )
  
  }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
  
          <Greeting groupinfo= {objeto}  fuction={saludo}/>
          
         
        </header>
      </div>
    );
  }
  
  export default App
