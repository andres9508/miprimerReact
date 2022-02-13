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
        return <div style={this.styleComplete()}>
            {this.props.tarea.id}-
            {this.props.tarea.title}-
            {this.props.tarea.description}-
            {this.props.tarea.done}

            <input type="checkbox"/>
            <button style={btnDelete}>x</button>
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