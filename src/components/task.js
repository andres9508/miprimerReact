import React,{Component} from "react";
import PropTypes from 'prop-types';

import './task.css';

class Task extends Component{

    //estilos en las funciones para poner condicionales a estos
    styleComplete(){
        return{
            fontSize:'20px',
            color: this.props.tarea.done ?'gray':'black',
            TextDecoration: 'none',

        }
    }
    render(){
        //llamado de estilo desde funcion this. ....
        const {tarea} = this.props;
        return <div style={this.styleComplete()}>
            {tarea.id}-
            {tarea.title}-
            {tarea.description}-
            {tarea.done}

            <input type="checkbox" onChange={this.props.checkDone.bind(this, tarea.id)}/>
            <button style={btnDelete} onClick={this.props.deleteTask.bind(this, tarea.id)}>x</button>
        </div>
    }
}

Task.propTypes ={
   tarea : PropTypes.object.isRequired
}

//los estilos dentro de js se pueden cambiar con programacion
const btnDelete ={
    fontSize: '18px',
    background: 'red',
    color: 'aliceblue',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer'
}

export default Task