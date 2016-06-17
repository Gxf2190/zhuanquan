var canvas=document.getElementById('canvas');
 var ctx=canvas.getContext('2d');
 var water=0;
 function draw(){
 //清除画布
 ctx.clearRect(0,0,1000,1000);
 //画轨道
 //设置笔触颜色
 ctx.strokeStyle="#fff";
 ctx.beginPath();

 ctx.arc(500,500,100,0,360,false);
 ctx.closePath();
 ctx.stroke();
 //画太阳
 ctx.beginPath();
 ctx.arc(500,500,20,0,360,false);
 ctx.closePath();
 //设置太阳颜色
 var suncolor=ctx.createRadialGradient(500,500,0,500,500,20);
 suncolor.addColorStop(0,"#ff0");
 suncolor.addColorStop(1,"#f00");
 ctx.fillStyle=suncolor;
 ctx.fill()
 //earth
 ctx.save();
 ctx.translate(500,500);
 ctx.rotate(water*360/365*Math.PI/180);
 ctx.beginPath();
 ctx.arc(0,-100,10,0,360,false);
 ctx.closePath();
 var earthcolor=ctx.createRadialGradient(0,-100,0,0,-100,10);
earthcolor.addColorStop(0,"#78B1E8");
earthcolor.addColorStop(1,"#050C12");
ctx.fillStyle=earthcolor;
 ctx.fill();
 ctx.restore();


 //轨道
 //ctx.strokeStyle="#fff";
 ctx.beginPath();
 ctx.arc(500,500,40,0,360,false);

 ctx.closePath();
 ctx.stroke();
  //waterstar
  ctx.save();
  ctx.translate(500,500);
  ctx.rotate(water*365/87*Math.PI/180);
  ctx.beginPath();
  ctx.arc(0,-40,8,0,360,false);
  ctx.closePath();
  var watercolor=ctx.createRadialGradient(0,-40,0,0,-40,10);
  watercolor.addColorStop(0,"#a69697");
  watercolor.addColorStop(1,"#5c3e40");
  ctx.fillStyle=watercolor;
  ctx.fill();
    ctx.restore();
 
   //轨道
   //venus大小
   
   ctx.beginPath();
   ctx.arc(500,500,75,0,360,false);
   ctx.closePath();
   ctx.stroke();
   ctx.save();
   ctx.translate(500,500);
   ctx.rotate(water*365/224*Math.PI/180);
   ctx.beginPath();
   ctx.arc(0,-75,10,0,360,false);
   ctx.closePath();
   var venuscolor=ctx.createRadialGradient(0,-75,0,0,-75,10);
   venuscolor.addColorStop(0,"#cabbac");
   venuscolor.addColorStop(1,"#1f1315");
   ctx.fillStyle=venuscolor;
   ctx.fill();
   ctx.restore();
   //mars
   ctx.beginPath();
   ctx.arc(500,500,150,0,360,false);
   ctx.closePath();
   ctx.stroke();
   ctx.save();
   ctx.translate(500,500);
   ctx.rotate(water*365/686*Math.PI/180);
   ctx.beginPath();
   ctx.arc(0,-150,10,0,360,false);
   ctx.closePath();
   var marscolor=ctx.createRadialGradient(0,-150,0,0,-150,10);
   marscolor.addColorStop(0,"#cec9b6");
   marscolor.addColorStop(1,"#76422d");
   ctx.fillStyle=marscolor;
   ctx.fill();
   ctx.restore();
   //muxing
   ctx.beginPath();
   ctx.arc(500,500,200,0,360,false);
   ctx.closePath();
   ctx.stroke();
   ctx.save();
   ctx.translate(500,500);
   ctx.rotate(water*365/4332*Math.PI/180);
   ctx.beginPath();
   ctx.arc(0,-200,10,0,360,false);
   ctx.closePath();
   var venuscolor=ctx.createRadialGradient(0,-200,0,0,-200,10);
   venuscolor.addColorStop(0,"#c0a48e");
   venuscolor.addColorStop(1,"#322222");
   ctx.fillStyle=venuscolor;
   ctx.fill();
   ctx.restore();
   //tuxing
   ctx.beginPath();
   ctx.arc(500,500,250,0,360,false);
   ctx.closePath();
   ctx.stroke();
   ctx.save();
   ctx.translate(500,500);
   ctx.rotate(water*365/10759*Math.PI/180);
   ctx.beginPath();
   ctx.arc(0,-250,10,0,360,false);
   ctx.closePath();
   var venuscolor=ctx.createRadialGradient(0,-250,0,0,-250,10);
   venuscolor.addColorStop(0,"#f7f9e3");
   venuscolor.addColorStop(1,"#5c4533");
   ctx.fillStyle=venuscolor;
   ctx.fill();
   ctx.restore();
   //tianwangxing
   ctx.beginPath();
   ctx.arc(500,500,350,0,360,false);
   ctx.closePath();
   ctx.stroke();
   ctx.save();
   ctx.translate(500,500);
   ctx.rotate(water*365/30799*Math.PI/180);
   ctx.beginPath();
   ctx.arc(0,-350,10,0,360,false);
   ctx.closePath();
   var venuscolor=ctx.createRadialGradient(0,-350,0,0,-350,10);
   venuscolor.addColorStop(0,"#a7e1e5");
   venuscolor.addColorStop(1,"#19243a");

   ctx.fillStyle=venuscolor;
   ctx.fill();
   ctx.restore();
     water+=1;
    }
 //dong  qi  lai
 setInterval( draw,50);