import logo from './logo.svg';
import './App.css';
import React from 'react'

class App extends React.Component{
  constructor(){
    super();
    this.state={
      count:0
    }
  }
  shouldComponentUpdate(){
    console.warn("shouldComponentUpdate",this.state.count)
    // return false 
    if(this.state.count>=5 && this.state.count<=10){
      return true 
    }
  }
  render(){
    return(
      <div className="App">
        <h1>Hello {this.state.count}</h1>
        <button onClick={()=>this.setState({count:this.state.count+1})}>Update Name</button>
      </div>
    )
  }
}

export default App;
