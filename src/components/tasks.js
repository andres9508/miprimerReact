import React,{Component} from "react";
import PropTypes from 'prop-types';

import Task from "./Task";


class Tasks extends Component{
    render(){
        return this.props.tasks.map(task=> <Task tarea={task} key={task.id}/>)
    }
}

Tasks.protoType ={
    task : PropTypes.array.isRequired
}


export default Tasks