import React, { Component } from 'react';
import Header from './componet/Header.js';
import Footer from './componet/Footer.js';
import './main.css';
import  'highlight.js/styles/default.css';
class App extends React.Component {
  constructor(){
    super();
    this.state={
      pathname: '',
      mobile: true
    }
  }
  componentWillReceiveProps(){
   this.changeTitle();
  }
  
  componentWillMount(){
    this.changeTitle();
  }
  
  changeTitle(){
    this.setState({pathname:this.props.location.pathname})
  }
  render () {
   console.log(this.props.location.pathname);
    return(
      <div className='wrap'>
        <Header title={this.state.pathname}/>
      <div className="main">
      {this.props.children}
      </div>
      < Footer/>
      </div>
    )
  }
}

export default App;
