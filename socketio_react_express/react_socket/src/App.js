import React from 'react';
import io from "socket.io-client";

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      chat:[]
    }
    this.socket = io('localhost:3001');
    let app = this
    this.socket.on('message', function(data){
        app.addMessage(data);
    });

    
    this.addMessage = data => {
      this.setState({chat: [...this.state.chat, data]});
    };
  }



  testing = (value) => {
    console.log('masuk emit')
    const socket = io('localhost:3001')
    socket.emit('message', value)
  }

  render = () => 
    <div className="App">
      <button onClick={() => this.testing('woe')}>test</button>
    </div>
}

export default App;
