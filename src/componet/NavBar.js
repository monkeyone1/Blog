import React from 'react';
import {Link} from 'react-router';
import q from '../image/q.jpeg';


export default class NavBar extends React.Component{
  render(){
    return(
      <div className='navbar'>
        <h1>ZZ:D@{this.props.title.slice(1) ? this.props.title.slice(1) : 'home'}</h1>

        
        <Link to='/'><img style={{width:'200px'}} src={q} alt="q"/></Link>
        <Link to='/' activeStyle={{background: 'rgba(0,0,0,0.3)'}} onlyActiveOnIndex={true}>Home</Link>
        <Link to='/blog' activeStyle={{background: 'rgba(0,0,0,0.3)'}}>Blog</Link>
        <Link to='/work' activeStyle={{background: 'rgba(0,0,0,0.3)'}}>Work</Link>
        <Link to='/about' activeStyle={{background: 'rgba(0,0,0,0.3)'}}>About</Link>
        <Link to='/404' activeStyle={{background: 'rgba(0,0,0,0.3)'}}>404</Link>
        

      </div>
    )
  }
}
