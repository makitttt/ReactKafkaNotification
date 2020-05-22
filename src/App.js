  
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SockJsClient from 'react-stomp'
import Websocket from 'react-websocket';


class App extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            data : ''
        }
    }
    
    async componentDidMount() {

    const socket = new WebSocket('ws://localhost:<springBootPort>/<notification path>'); 
    socket.addEventListener('message', async (event) => { 
	this.state.data = data;
      console.log(event.data);
    });
        
    }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React and Spring : {this.state.data}</h2>
        </div>
      </div>
    );
	
	/*  Receving through Sock JS
	return (
      <div>
        <SockJsClient url='http://localhost:8080/ws' topics={['/topics/all']}
            onMessage={(msg) => { console.log(msg); }}
            ref={ (client) => { this.clientRef = client }} />
      </div>
    );
	*/
  }
}

export default App;