import React, {Component} from 'react';
//icon
import gitbub from '../image/github.svg';
import RaisedButton from 'material-ui/RaisedButton';
import SvgIcon from 'material-ui/SvgIcon';

class Home extends Component {
  render() {
    return (
      <div className='home-wrap'>
        <div className='home-cover' style={{
          textAlign: 'center'
        }}>
          <div>
            <h1>HI,I AM ZZ:D</h1>
            <p>a front-end development</p>
            <RaisedButton style={{margin:'15px'}}
            href='https://github.com/monkeyone1'
             label="Contact Me" primary={true} />
          </div>
        
        </div>
      </div>
    );
  }
}

export default Home;