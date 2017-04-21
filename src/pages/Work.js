import React, { Component } from 'react';
import axios from 'axios';
import RefreshIndicator from 'material-ui/RefreshIndicator';

const style = {
  container: {
    position: 'relative',
  },
  refresh: {
    display: 'inline-block',
    position: 'relative'
  },
};
const RefreshIndicatorExampleLoading = () => (
  <div style={style.container}>
   
    <RefreshIndicator
      size={50}
      left={100}
      top={0}
      loadingColor="#FF9800"
      status="loading"
      style={style.refresh}
    />
  </div>
);
class Work extends Component {
  
  
 
  render() {
    return (
      <div>
        <RefreshIndicatorExampleLoading/>
        玩命加载中。。。。。（放弃吧真的没有数据。。。我没有写）
      </div>
    );
  }
}

export default Work;