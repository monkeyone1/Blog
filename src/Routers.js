import React, { Component } from 'react';
import { Route, Router,IndexRoute, hashHistory,browserHistory} from 'react-router';
import App from './App.js';
import Home from './pages/Home.js';
import Blog from './pages/Blog.js';
import About from './pages/About.js';
import Work from './pages/Work.js';
import Post from './pages/Post.js';

class Routers extends Component {
  render() {
    return (
      
      <Router history={hashHistory} >
       <Route path="/" component={App}>
          <IndexRoute component={Home} />  
        <Route path='/blog' component={Blog}/>
        <Route path='/post/:title' component={Post}/>
        <Route path='/work' component={Work}/>
        <Route path='/about' component={About}/>

      </Route>
      </Router>
    );
  }
}

export default Routers;