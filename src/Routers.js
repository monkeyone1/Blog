import React, { Component } from 'react';
import { Route, Router,IndexRoute, hashHistory,Redirect} from 'react-router';
import App from './App.js';
import Home from './pages/Home.js';
import Blog from './pages/Blog.js';
import About from './pages/About.js';
import Work from './pages/Work.js';
import Post from './pages/Post.js';
import H404 from './pages/h404.js';
import NotFoundPage from './pages/NotFoundPage.js';

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
        <Route path= '/404' component={NotFoundPage}/>
        <Redirect from="*" to="/404" />
      </Route>
      
      </Router>
    );
  }
}

export default Routers;