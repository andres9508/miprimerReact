import React,{Component} from "react";

import Task from "./task";


class Tasks extends Component{
    render(){
        return this.props.tasks.map(task=> <Task tarea={task} key={task.id}/>)
    }
}

export default Tasks