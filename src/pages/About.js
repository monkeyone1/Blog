import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import me from '../image/me.jpg';

class About extends Component {
  render() {
    return (
      <div style={{
        width: '100%',
        display:'flex',
        flexDirection:'column',
        
        
        
      }}>
        <Paper zDepth={1} style={{
          display:'flex',
          margin:20
          
        }}>
          <Paper
            style={{
            height: 200,
            width: 200,
            margin: 20,
            overflow:'hidden'
          }}
            zDepth={1}
            circle={true}
            
            >

            <img style={{
              width:200
            }}src={me} alt=""/>
            </Paper>
        </Paper>
      </div>
    );
  }
}

export default About;