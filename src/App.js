import React from 'react';
import './App.css';

//componentes


/* function Helloworld(props) {
  return(
    <div id="hello">

      //props es un objeto que recibe propiedades de los componentes asignados al momento de llamarlos
      <h3>{props.subtitle}</h3>
      {props.texto}
    </div>
  )
} */

//state***
class Helloworld extends React.Component {

  state={
    show:true
  }
  //funcion flecha para cambiar el estado
  cambioEstado =() => {
    this.setState({show: !this.state.show})
  }

  render(){
    //
    if(this.state.show){
      return(
        <div id="hello">
          
        <h3>{this.props.subtitle}</h3>
        {this.props.texto}
        <button onClick={this.cambioEstado}>cambio de estado</button>
      </div>
      )
    }else{
      return(
          <h1>no hay nada
            <button onClick={ this.cambioEstado}>cambio de estado</button>
          </h1>
        )
    }
    
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
