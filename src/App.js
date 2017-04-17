import React from 'react';
import Header from './componet/Header.js';
import Footer from './componet/Footer.js';

class App extends React.Component {
  render () {
    return(
      <div>
        <Header/>
      {this.props.children}
      <Footer/>
      </div>
    )
  }
}

export default App;
