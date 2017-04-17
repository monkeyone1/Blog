import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Mui from 'material-ui/styles/MuiThemeProvider';
injectTapEventPlugin();
import Routers from './Routers.js';


render(<Mui><Routers/></Mui>,document.getElementById('root'));
