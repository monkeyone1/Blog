import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import {Link} from 'react-router';

class Card extends Component {
  render() {

    return (
     
        <div>
        {this
          .props
          .data
          .map((item) => <Paper zDepth={2} style={{margin:'10px'}}
            key={Math.random()} >
            <div> 
            <Link to='/'>
             <img src={item.img} alt="img"/>
            </Link>  
            </div>
            <div style={{
              padding: '10px 16px'
            }}>
              <h3>{item.title}</h3>
              <p style={{
                color: '#999'
              }}>{item.desc}</p>
            </div>
           </Paper>)}
     </div>

    );
  }
}

export default Card;