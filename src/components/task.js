import React,{Component} from "react";

class Task extends Component{
    render(){
        return <div>
            {this.props.tarea.id} -{this.props.tarea.title} -{this.props.tarea.description }
            <input type="checkbox"/>
            <button>x</button>
        </div>
    }
}

export default Task