import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
class Loading extends Component {
  render() {
    return (
      <div style={{display:'inline'}}>
        <CircularProgress size={60} thickness={7} />
      </div>
    );
  }
}

export default Loading;