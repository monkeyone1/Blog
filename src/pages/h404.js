import React, { Component } from 'react';
import timg from '../image/timg.jpeg';

class H404 extends Component {
  componentDidMount() {
    let cvs = document.getElementById('cvs');
    cvs.width = window.innerWidth;
    cvs.height = window.innerHeight;
    let ctx = cvs.getContext('2d');
    let starArr = [], meteorArr = [];
    for (let i = 0; i < 50; i++) {
      starArr.push({
        x: parseInt(Math.random() * cvs.width),
        y: parseInt(Math.random() * cvs.height),
        r: parseInt(Math.random() * 7) + 3,
        opacity: 1,
        opacitySpeed: 0.02//i % 3 == 0 ? 0.01 : 0
      });
    }
    for (let i = 0; i < 50; i++) {
      meteorArr.push({
        x: Math.random() * cvs.width * 20,
        y: -Math.random() * cvs.height,
        r: 0.1,
        opacity: 1
      });
    }

    this.MyInterval=setInterval( ()=> {
      ctx.fillStyle = 'rgb(20,20,20)';
      ctx.fillRect(0, 0, cvs.width, cvs.height);
      ctx.lineCap = 'round';
      for (let i = 0; i < starArr.length; i++) {
        let x = starArr[i].x,
          y = starArr[i].y,
          r = starArr[i].r,
          opacity = starArr[i].opacity;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + r / 6, y + r / 3);
        ctx.lineTo(x + r / 2, y + r / 2);
        ctx.lineTo(x + r / 6, y + r / 3 * 2);
        ctx.lineTo(x, y + r);
        ctx.lineTo(x - r / 6, y + r / 3 * 2);
        ctx.lineTo(x - r / 2, y + r / 2);
        ctx.lineTo(x - r / 6, y + r / 3);
        ctx.lineTo(x, y);
        ctx.strokeStyle = 'rgba(255,255,255,' + opacity + ')';
        ctx.fillStyle = 'rgba(255,255,255,' + opacity + ')';
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        starArr[i].opacity -= starArr[i].opacitySpeed;
        if (starArr[i].opacity <= 0.2 || starArr[i].opacity >= 1) {
          starArr[i].opacitySpeed = -starArr[i].opacitySpeed;
        }
      }
      for (let i = 0; i < meteorArr.length; i++) {
        let x = meteorArr[i].x,
          y = meteorArr[i].y,
          r = meteorArr[i].r;
        for (let j = r; j < 70; j++) {
          ctx.beginPath();
          ctx.fillStyle = 'rgb(255,255,255)'
          ctx.arc(x, y, r, 0, 360 * Math.PI / 180, true);
          r += 0.02;
          x -= 2;
          y += 1;
          ctx.fill();
          ctx.closePath();
        }
        meteorArr[i].x -= 16;
        meteorArr[i].y += 8;
        if (meteorArr[i].y >= cvs.height + 50) {
          meteorArr[i].x = Math.random() * cvs.width * 20;
          meteorArr[i].y = -Math.random() * cvs.height;
        }
      }
    }, 20);

  }
  render() {
    

    return (
      <div style={{ textAlign: 'center', marginTop: '40px', width: '100%' }}>
        <canvas id="cvs"></canvas>
        <div className="container_404">
          <h1>404</h1>
        </div>
      </div>
    );
  }
}

export default H404;