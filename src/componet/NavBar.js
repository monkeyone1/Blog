import React from 'react';

import {Link} from 'react-router';
import ActionHome from 'material-ui/svg-icons/action/home';

export default class NavBar extends React.Component{
  render(){
    return(
      <div className='navbar'>
        <h1>ZZ:D@{this.props.title.slice(1) ? this.props.title.slice(1) : 'home'}</h1>
        <Link to='/' activeStyle={{background: 'rgba(0,0,0,0.3)'}} onlyActiveOnIndex={true}><Icon type="home" />Home</Link>
        <Link to='/blog' activeStyle={{background: 'rgba(0,0,0,0.3)'}}><ActionHome  />Blog</Link>
        <Link to='/work' activeStyle={{background: 'rgba(0,0,0,0.3)'}}><ActionHome  />Work</Link>
        <Link to='/about' activeStyle={{background: 'rgba(0,0,0,0.3)'}}><ActionHome  />About</Link>

      </div>
    )
  }
}
