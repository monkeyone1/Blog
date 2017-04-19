import React, { Component } from 'react';
import axios from 'axios';
import Paper from 'material-ui/Paper';
import Card from '../componet/Card.js';
class Blog extends Component {
  constructor(){
    super();
    this.state={
      loading:false,
      data:[]
      
    }
  }
  componentWillMount() {
    axios.get('https://raw.githubusercontent.com/newming/demodata/master/card.json'
    )
    .then((res) => {
      this.setState({
          data:res.data,
          loading:true
      });
    })
  }
  
  render() {
    console.log(this.state.data);
    return (
      <div style={{width:'100%'}}>
      { this.state.loading? <Card data={this.state.data} />:null}
      </div>
    );
  }
}

export default Blog;