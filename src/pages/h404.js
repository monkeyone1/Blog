import React, { Component } from 'react';
import timg from '../image/timg.jpeg';

class H404 extends Component {
  render() {
    return (
      <div style={{textAlign:'center',marginTop:'40px', width:'100%'}}>
        <img style={{Width:'200px'}} src={timg} alt="img"/>
      </div>
    );
  }
}

export default H404;