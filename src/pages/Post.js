import React, { Component } from 'react';
import axios from 'axios';
import marked from 'marked';
import hljs from 'highlight.js';
import Loading from '../componet/Loading.js';
class Post extends Component {
  constructor() {
    super();
    this.state={
      data:[],
      loading:true
    }
  }
  
 componentWillMount(){
    axios.get(`https://raw.githubusercontent.com/monkeyone1/datas/master/${this.props.params.title}.md`)
      .then( (res) => this.setState({data: res.data,loading: false}))
      .catch( (err) => alert(err) )
  }
  componentDidMount() {
    marked.setOptions({
      highlight: function (code) {
        return hljs.highlightAuto(code).value;
      }
    })
  }
  render() {
    return (
      <div  style={{padding: '10px',width: '100%'}}>
        {
         this.state.loading?<div style={{width:'100%',textAlign:'center'}}><Loading/></div>:
         <div className='post-content' dangerouslySetInnerHTML={{__html:marked(this.state.data)}}></div>
        }
      </div>
    );
  }
}

export default Post;{}