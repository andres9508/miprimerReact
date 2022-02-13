import React,{Component} from "react";

class TaskForm extends Component {
    state ={
        title: '',
        description:''
    }
    //previene los eventos por default para que no se recarge la pagina
    escuSubmit=(event)=>{    
        this.props.agregarTarea(this.state.title , this.state.description)                               
        event.preventDefault();
    }
    
    onChange=(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }




    render(){
        
        return(
            <form onSubmit={this.escuSubmit}>
                <input type="text"
                name="title" 
                onChange={this.onChange}
                value={this.state.title}
                placeholder="Escribe una tarea"></input> 
                <br/>
                <br/>
                <textarea 
                name="description"
                onChange={this.onChange}
                value={this.state.description}
                placeholder="Escribe una descripcion de la tarea"></textarea>
                <input type="submit"/>
            </form>
        )
    }
}

export default TaskForm;
