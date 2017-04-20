import React, { Component } from 'react';
import Header from './componet/Header.js';
import Footer from './componet/Footer.js';
import NavBar from './componet/NavBar.js';
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
   this.checkMobile();
  }
  
  componentWillMount(){
    this.changeTitle();
    this.checkMobile();
  }
  
  changeTitle(){
    this.setState({pathname:this.props.location.pathname})
  }
  checkMobile(){
    this.setState({
      mobile: document.body.clientWidth<700 ? true : false
    })
  }
  render () {
   console.log(this.props.location.pathname);
    return(
      <div className='wrap'>
       { this.state.mobile?<Header title={this.state.pathname}/>:<NavBar title={this.state.pathname}/>}
      <div className="main">
      {this.props.children}
      </div>
      {this.state.mobile ?  < Footer/>:null}
      </div>
    )
  }
}

export default App;
