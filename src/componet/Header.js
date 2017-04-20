import React, {Component} from 'react';
import {hashHistory} from 'react-router';


import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import  Keyleft from '../image/ic_keyboard_arrow_left_black_24dp_2x.png';
import Left from 'material-ui/svg-icons/Hardware/keyboard-arrow-left';
import Right from 'material-ui/svg-icons/Hardware/keyboard-arrow-right';

class Header extends Component {
  handleGo(num){
    console.log(hashHistory);
    hashHistory.goBack();
  }
  render() {
    let styles={
      title:{
        
      }
    }
    return (
      <header>
        <AppBar    title={<span>ZZ:D@{this.props.title.slice(1) ? this.props.title : 'home'}</span>}
        onLeftIconButtonTouchTap={this.handleGo.bind(this,-1)}
        iconElementLeft={<IconButton><Left/></IconButton>}
        iconElementRight={<IconButton><Right/></IconButton>}
       />
      </header>
    );
  }
}

export default Header;