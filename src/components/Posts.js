import React, { Component } from 'react'

export default class Posts extends Component {

    state={
        posts: []
    }

    async componentDidMount(){
        //hace peticion a otro servidor--fectch
         const res = await fetch('https://jsonplaceholder.typicode.com/posts')
         //json() convierte los datos a json
         const data= await res.json()
         this.setState({posts:data})
         //console.log(data)
    }

  render() {
    return (
      <div>
          <h1>Posts</h1>
          {
              this.state.posts.map(post =>{
                  return <div key={post.id}>
                      <h2>{post.title}</h2>
                      <p>{post.body}</p>
                   </div>   
              })
          }
      </div>
    )
  }
}
