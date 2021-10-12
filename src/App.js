import React from 'react';
import './App.css';
import Button from './Components/Button/Button';


class App extends React.Component{
  state = {
    value:0
  }

  click=()=>{
  
    if(this.state.value <= 9){
      const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
    this.setState({value:++this.state.value})
    }
  }
  click2=()=>{
    if(this.state.value > -10){
      const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
    this.setState({value:--this.state.value})
    }
  }
  click=this.click.bind(this)
  click2=this.click2.bind(this)
  render(){
    return (
      <div className="App">
        <Button text='+' clickHandler={this.click}/>
        <p>{this.state.value}</p>
        <Button text='-' clickHandler={this.click2}/>
      </div>
    );
  }
}

export default App;
