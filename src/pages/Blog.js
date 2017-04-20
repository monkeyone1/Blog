import React, {Component} from 'react';
import axios from 'axios';
import Paper from 'material-ui/Paper';
import Card from '../componet/Card.js';
import Loading from '../componet/Loading.js';
class Blog extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      data: []

    }
  }
  componentWillMount() {
    axios
      .get('https://raw.githubusercontent.com/newming/demodata/master/card.json')
      .then((res) => {
        this.setState({data: res.data, loading: false});
      })
  }

  render() {
    console.log(this.state.data);
    return (
      <div style={{
        width: '100%'
      }}>
        {this.state.loading
          ? <div
              style={{
              width: '100%',
              textAlign: 'center',
              margin: '30px'
            }}><Loading/></div>
          : <Card data={this.state.data}/>}

      </div>
    );
  }
}

export default Blog;