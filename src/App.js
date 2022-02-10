import React from 'react';
import './App.css';

//componentes


/* function Helloworld(props) {
  return(
    <div id="hello">
      <h3>{props.subtitle}</h3>
      {props.texto}
    </div>
  )
} */
class Helloworld extends React.Component {
  render(){
    return(
      <div id="hello">
      <h3>{this.props.subtitle}</h3>
      {this.props.texto}
    </div>
    )
  }
}


function App() {
  return (
    <div>
      Este es mi componente:
     <Helloworld texto="Hola Mundo" subtitle="subtitulo 1"/> 
     <Helloworld texto="Hello world" subtitle="subtitulo 2"/> 
     <Helloworld texto="tercero" subtitle="subtitulo 3"/> 
    </div>
  );
}

export default App;
