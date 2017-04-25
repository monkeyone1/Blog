import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import RefreshIndicator from 'material-ui/RefreshIndicator';

class Loading extends Component {
 constructor() {
   super();
   this.state={
     move:document.body.clientWidth/2
   }
 }
 
  
  
  componentWillMount() {
    
  }
  
  render() {

    console.log('hello');
    return (
      <div style={{display:'inline'}}>
       <RefreshIndicator
      size={50}
      left={this.state.move}
      top={30}
      loadingColor="#FF9800"
      status="loading"
      style={{ display: 'inline-block',
    position: 'relative' 
    }}
    
    />
      </div>
    );
  }
}

export default Loading;