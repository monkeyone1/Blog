import React, {Component} from 'react';
import Paper from 'material-ui/Paper';

import marked from 'marked';
import echarts from 'echarts';
import Avatar from 'material-ui/Avatar';
import q from '../image/q.jpeg'
class About extends Component {

 componentDidMount(){
    var myChart = echarts.init(document.getElementById('main'));
    myChart.setOption({

      backgroundColor: '#00B4CF',
      title : {
        text: '我的手艺成熟度',
        textStyle: {
         color: 'white'
        },
        x: 'center'
      },
      yAxis: {
        axisLine: {show: false},
        axisTick: {show: false},
        data: ['React','CSS','HTML','JS'],
        axisLabel: {
          show: true,
          textStyle: {
            color: 'white'
        }
      },
      },
      xAxis: {
        axisLine: {show: false},
        axisTick: {show: false},
        splitLine: { show: false },
        axisLabel: { show: false }
      },
      series: [
        {
          type: 'bar',
          barWidth: 30,
          data: [100, 100, 100, 100],
          itemStyle: {
            normal: {
              color: 'rgba(0,0,0,0.15)'
            }
          }
        },
        {
          type: 'bar',
          barWidth: 30,
          data: [70, 80, 76, 70],
          itemStyle: {
            normal: {
              barBorderRadius: 5,
              color: 'white'
            }
          },
          barGap: '-100%',
          label: {
            normal: {
              show: true,
              formatter: '{c}%',
              textStyle: {
                color: '#2196f3'
              }
            }
          }
        }
      ]
  
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
        
           <div style={{ margin:'40px'}}>

             <h1>张振东</h1>
             <p>一个幽默的前端程序员</p>


           </div>

        </Paper>


      <div id='main' style={{width:'100%',height:'40%',maxWidth:'80%',margin:'0 auto'}}></div>

     


      </div>
    );
  }
}

export default About;
