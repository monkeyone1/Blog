import React, {Component} from 'react';
import {Link} from 'react-router';
//mui
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import Home from 'material-ui/svg-icons/action/home';




const favoritesIcon =<IconLocationOn /> ;
class Foooter extends Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0
    };

  }
  select(index) {
    this.setState({selectedIndex: index});
  }
  render() {
    return (
      <footer>
        <Paper zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
        <Link to='/'>
       <BottomNavigationItem
            label="Home"
            icon={<Home/>}
            onTouchTap={this.select.bind(this,0)}
          />
           </Link>
           <Link to='Blog'>
           <BottomNavigationItem
            label="Blog"
            icon={<Home/>}
            onTouchTap={this.select.bind(this,0)}
          />
          </Link>
           <Link to='work'>
           <BottomNavigationItem
            label="Work"
            icon={<Home/>}
            onTouchTap={this.select.bind(this,0)}
          />
          </Link>
             <Link to='about'>
           <BottomNavigationItem
            label="About"
            icon={<Home/>}
            onTouchTap={this.select.bind(this,0)}
          />
          </Link>
          
          
          </BottomNavigation>
        </Paper>
      </footer>
    );
  }
}

export default Foooter;