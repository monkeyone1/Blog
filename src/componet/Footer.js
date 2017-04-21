import React, {Component} from 'react';
import {hashHistory,Link,history} from 'react-router';
//mui
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Paper from 'material-ui/Paper';

import Home from 'material-ui/svg-icons/action/home';
import Blog from 'material-ui/svg-icons/action/book';
import Work from 'material-ui/svg-icons/action/description';
import About from 'material-ui/svg-icons/action/account-circle';


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
   let styles={
     ctr: {textAlign: 'center'}
   }
    return (

      <footer>
        <Paper zDepth={2} style={{
          backgroundColor:'#00BCD4',
          color:'#ffffds'
          }}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
     
       <BottomNavigationItem
            style={styles.ctr}
            label="Home"
            icon={<Home/>}
          containerElement={<Link to="/" />}
            onTouchTap={this.select.bind(this,0)}
            
          />
      
         
           <BottomNavigationItem
           style={styles.ctr}
            label="Blog"
            icon={<Blog/>}
             containerElement={<Link to="blog"/>}
            onTouchTap={this.select.bind(this,1)}
          />
        
           
           <BottomNavigationItem
           style={styles.ctr}
            label="Work"
            icon={<Work/>}
            containerElement={<Link to="work"/>}
            onTouchTap={this.select.bind(this,2)}
          />
          
           <BottomNavigationItem
            style={styles.ctr}
            label="About"
            icon={<About/>}
             containerElement={<Link to="about"/>}
            onTouchTap={this.select.bind(this,3)}
          />
    
          
          </BottomNavigation>
        </Paper>
      </footer>
    );
  }
}

export default Foooter;