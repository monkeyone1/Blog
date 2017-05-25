import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  '*': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'boxSizing': 'border-box'
  },
  'html': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    '>w700': {
      'flexDirection': 'row'
    }
  },
  'body': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    '>w700': {
      'flexDirection': 'row'
    }
  },
  '#root': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    '>w700': {
      'flexDirection': 'row'
    }
  },
  'wrap': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    '>w700': {
      'flexDirection': 'row'
    }
  },
  'wrap': {
    'display': 'flex',
    'flexDirection': 'column'
  },
  'navbar': {
    'width': [{ 'unit': 'px', 'value': 260 }],
    'backgroundColor': '#00bcd4',
    'color': '#fff'
  },
  'navbar h1': {
    'textAlign': 'center'
  },
  'navbar a': {
    'display': 'block',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 30 }],
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'color': '#fff',
    'textDecoration': 'none'
  },
  'navbar a:hover': {
    'backgroundColor': 'rgba(0, 0, 0, 0.2)'
  },
  'main': {
    'flexGrow': '1',
    'display': 'flex',
    'overflowY': 'auto'
  },
  'home-wrap': {
    'flex': '1',
    'background': 'url('./image/bg.jpg')',
    'backgroundSize': 'cover',
    'backgroundPosition': '50% 50%'
  },
  'home-cover': {
    'height': [{ 'unit': '%V', 'value': 1 }],
    'background': 'rgba(0, 0, 0, 0.5)',
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'center',
    'color': '#fff'
  },
  // 文章的样式
  'post-content': {
    'color': '#6d6d6d',
    'lineHeight': [{ 'unit': 'px', 'value': 1.8 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'maxWidth': [{ 'unit': 'px', 'value': 900 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'marginTop': [{ 'unit': 'px', 'value': 10 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }],
    'backgroundColor': '#fff',
    'paddingTop': [{ 'unit': 'em', 'value': 1 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 30 }],
    'paddingLeft': [{ 'unit': 'em', 'value': 1 }],
    'paddingRight': [{ 'unit': 'em', 'value': 1 }]
  },
  'post-content h1': {
    'textAlign': 'center',
    'fontSize': [{ 'unit': 'em', 'value': 1.5 }],
    'marginTop': [{ 'unit': 'em', 'value': 1.1 }],
    'marginBottom': [{ 'unit': 'em', 'value': 1.1 }]
  },
  'post-content ol': {
    'paddingLeft': [{ 'unit': 'px', 'value': 20 }]
  },
  'post-content ul': {
    'paddingLeft': [{ 'unit': 'px', 'value': 20 }]
  },
  'post-content li': {
    'listStyleType': 'circle'
  },
  'post-content pre': {
    'backgroundColor': '#f8f8f8',
    'display': 'block',
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#777777',
    'overflowX': 'auto',
    'fontWeight': '600'
  },
  'post-content pre code': {
    'backgroundColor': 'none'
  },
  'post-content p code': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'backgroundColor': 'pink',
    'padding': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 4 }]
  },
  'post-content blockquote': {
    'borderLeft': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#00bcd4' }],
    'fontStyle': 'italic',
    'fontWeight': '400',
    'paddingLeft': [{ 'unit': 'px', 'value': 20 }],
    'lineHeight': [{ 'unit': 'px', 'value': 30 }],
    'marginBottom': [{ 'unit': 'px', 'value': 33 }],
    'marginLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'post-content p': {
    'color': '#606060',
    'fontWeight': '400',
    'lineHeight': [{ 'unit': 'px', 'value': 1.95 }],
    'marginBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  'post-content img': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'display': 'block',
    'height': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'post-content a': {
    'color': '#ff4081',
    'textDecoration': 'none'
  },
  'post-content a:hover': {
    'color': '#444'
  },
  'post-content avideo': {
    'display': 'block',
    'lineHeight': [{ 'unit': 'px', 'value': 2.3 }],
    'textAlign': 'center'
  },
  '#cvs': {
    'zIndex': '-1',
    'width': [{ 'unit': 'px', 'value': 600 }]
  },
  'container_404 h1': {
    'position': 'absolute',
    'color': '#f8f8f8',
    'fontSize': [{ 'unit': 'rem', 'value': 16 }],
    'top': [{ 'unit': 'px', 'value': 90 }],
    'left': [{ 'unit': 'px', 'value': 700 }]
  }
});
