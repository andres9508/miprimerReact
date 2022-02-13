import React from 'react';
import './App.css';

import tasks from './ejemplos/tasks.json';
//componentes
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';
import Posts from './components/Posts';


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
/* //state***
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
 */

class App extends React.Component{
  state={
    tasks : tasks
  }

  addTask=(title, description)=>{
    const nueTarea ={
      title:title,
      description: description,
      id: this.state.tasks.length,
      done:false
    }
    this.setState({
      tasks:[...this.state.tasks , nueTarea]
    })
  }

  deleteTarea =(id)=>{
    const newTask= this.state.tasks.filter(tasks => tasks.id !==id)
    //console.log(newTask)
    this.setState({
      tasks:newTask 
    })
  }

  checkDone=(id)=>{
    const newTasks = this.state.tasks.map(task=> {
      if(task.id === id){
        task.done = !task.done
      }
      return task;
    })

    this.setState({
      tasks : newTasks
    })
  }

  render(){
      
      return <div>
      <TaskForm agregarTarea={this.addTask}/>
      <Tasks 
        tasks={this.state.tasks} 
        deleteTask ={this.deleteTarea}
        checkDone ={this.checkDone}
      />
      <Posts/>
    </div>
  }
}

export default App;
