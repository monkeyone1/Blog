import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import { Link } from 'react-router';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';

class Foooter extends Component {
  render() {
    return (
      <footer >
      <IconButton>
      <ActionHome  href='About'/>
      
    </IconButton>
      </footer>
    );
  }
}

export default Foooter;