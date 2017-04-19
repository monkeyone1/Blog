import React from 'react';
import Header from './componet/Header.js';
import Footer from './componet/Footer.js';
import './main.css';
class App extends React.Component {
  render () {
  
    return(
      <div className='wrap'>
        <Header/>
      <div className="main">
      {this.props.children}
      </div>
      < Footer/>
      </div>
    )
  }
}

export default App;
