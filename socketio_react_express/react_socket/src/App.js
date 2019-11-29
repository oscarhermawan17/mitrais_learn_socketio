import React from 'react';
import io from "socket.io-client";

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      chat:[],
      pesan:"",
      socket: io('localhost:3001')
    }
  }

  componentDidMount(){ 
    let app = this
    this.state.socket.on('message', function(data){
      app.getMessages(data)
    })
  }
  
  getMessages(data){
    this.setState({chat: [...this.state.chat, data]});
  }

  sendMessages = (value) => {
    console.log('masuk emit', value)
    const socket = io('localhost:3001')
    socket.emit('message', value)
  }

  onFormSubmit(){
    console.log('masuk submit')
    this.sendMessages(this.state.pesan)
  }

  render = () => 
  <div className="App">
    <ul>
      {this.state.chat.map((cha,index) => <li key={index}>{cha}</li>)}
    </ul>
    {/* <form onSubmit={() => this.onFormSubmit()}> */}
      <input type="text" value={this.state.pesan} onChange={(e) => this.setState({pesan:e.target.value})}/>
      <button onClick={() => this.sendMessages(this.state.pesan)}>submit</button>
    {/* </form> */}
    
  </div>
}

export default App;
