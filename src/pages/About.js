import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import me from '../image/me.jpg';
import marked from 'marked';
import echarts from 'echarts';

class About extends Component {

 componentDidMount(){
    var myChart = echarts.init(document.getElementById('main'));
    myChart.setOption({
      title: {
        text: '我的技能展示',
        textStyle:{
          color: 'teal'
        },
        left:'center'
      },
      tooltip: {},
      xAxis: {
          data: ['html','css','js','react','node','mongodb']
      },
      yAxis: {},
      series: [{
          name: '熟练度',
          type: 'bar',
          data: [90, 95, 85, 80, 70, 60]
      }]
    });
  }
  render() {
    return (
      <div
        style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Paper
          zDepth={1}
          style={{
          display: 'flex',
          margin: '20px'
        }}>
          <Paper
            style={{
            height: 200,
            width: 200,
            margin: 20,
            overflow: 'hidden'
          }}
            zDepth={1}
            circle={true}>

            <img src={me} style={{
              width: 200
            }} alt=""/>
          </Paper>
           <div style={{ margin:'40px'}}>
             <h1>张振东</h1>
             <p>一个幽默的前端程序员</p>


           </div>

        </Paper>
     

      <div id='main' style={{width:'100%',height:'600px',maxWidth:'600px',margin:'0 auto'}}></div>
     
      
        
      </div>
    );
  }
}

export default About;