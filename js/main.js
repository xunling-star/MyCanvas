"use strict";
{
  // let t = 0;
  function draw() {
    const canvas = document.querySelector("canvas");
    if (typeof canvas.getContext === "undefined") {
      return;
    }
    const ctx = canvas.getContext("2d");

    // 高解像度のデスプレイを対応
    // const CANVAS_WIDTH = 600;
    // const CANVAS_HEIGHT = 240;
    // // 密度devicePixelRatio()
    // const dpr = window.devicePixelRatio || 1;
    // canvas.width = CANVAS_WIDTH * dpr;
    // canvas.height = CANVAS_HEIGHT * dpr;
    // ctx.scale(dpr, dpr);
    // canvas.style.width = CANVAS_WIDTH + "px";
    // canvas.style.height = CANVAS_HEIGHT + "px";
    // ctx.font = "bold 64px Verdana";
    // ctx.strokeText("tokyo", 100, 100);

    // アニメショーンを描く
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    // ctx.beginPath();
    // // 三角関数使う(-1から+1で変化する値)
    // ctx.ellipse(80 + Math.sin(t / 30), 100, 8, 8, 0, 0, 2 * Math.PI);
    // ctx.ellipse(120 + Math.sin(t / 30), 100, 8, 8, 0, 0, 2 * Math.PI);
    // ctx.fillStyle = "skyblue";
    // ctx.fill();
    // t++;
    // setTimeout(draw, 10);

    // ctx.fillStyle = "pink";
    // ctx.fillRect(0, 0, 200, 200);
    // // キャラクタを描く+scale倍率変更
    // ctx.beginPath();
    // ctx.ellipse(100, 100, 40, 30, 0, 0, 2 * Math.PI);
    // ctx.fillStyle = "black";
    // ctx.fill();
    // ctx.beginPath();
    // ctx.ellipse(80, 100, 8, 8, 0, 0, 2 * Math.PI);
    // ctx.ellipse(120, 100, 8, 8, 0, 0, 2 * Math.PI);
    // ctx.fillStyle = "red";
    // ctx.fill();

    // キャラクター保存方法
    // ctx.save();

    // 倍率指定scale()
    // ctx.scale(0.5, 0.5);
    // ctx.translate(400, 0);
    // ctx.rotate((45 / 180) * Math.PI);
    // ctx.fillStyle = "skyblue";
    // ctx.fillRect(0, 0, 200, 200);
    // ctx.beginPath();
    // ctx.ellipse(100, 100, 40, 30, 0, 0, 2 * Math.PI);
    // ctx.fillStyle = "black";
    // ctx.fill();
    // ctx.beginPath();
    // ctx.ellipse(80, 100, 8, 8, 0, 0, 2 * Math.PI);
    // ctx.ellipse(120, 100, 8, 8, 0, 0, 2 * Math.PI);
    // ctx.fillStyle = "red";
    // ctx.fill();

    // 保存之后原先的位置重新设定用restore()
    // ctx.restore();
    // ctx.fillRect(80, 120, 40, 40);

    // 画像を描く
    // const img = document.createElement("img");
    // img.src = "img/logo.png";
    // 画像loadイベンド（加载）が発生したときに処理する
    // img.addEventListener("load", () => {
    // ctx.drawImage(img, 0, 0);   0,0=>場所 40,40=>サイズ
    // ctx.drawImage(img, 0, 0, 40, 40);
    // 画像を塗り方法下createPattern()
    // const pattern = ctx.createPattern(img, "repeat");
    // (repeat重复 repeat-x repeat-y no-repeat)
    // ctx.fillStyle = pattern;
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
    // 範囲;

    // 画像の一部を切り出し方法
    //   const img = document.createElement("img");
    // img.src = "img/logo.png";
    // img.addEventListener("load", () => {
    //   // ctx.drawImage(img, 0, 0);
    //   ctx.drawImage(
    //     img,
    // sx,sy,sw,sh,
    // 70*2,70,70,70,
    // dx,dy,dw,dh,
    // 0,0,35,35
    // )
    // }

    // });

    // テキストを描く
    // ctx.beginPath();
    // ctx.moveTo(0, 100);
    // ctx.lineTo(canvas.width, 100);
    // ctx.moveTo(100, 0);
    // ctx.lineTo(100, canvas.height);
    // ctx.stroke();
    // ctx.font = "bold 64px Verdana";
    // ctx.textAlign = "right";
    // ctx.textBaseline = "top";
    // ctx.fillText('tokyo',100,100);
    // ctx.fillText('tokyo',100,100,100);
    // ctx.strokeText("tokyo", 100, 100, 100);
    // ctx.font = 'bold 64px Verdana';(不能放后面
    // 只能放fill stroke前面)

    // 椭圆的方法 圆中心为基准
    // ctx.ellipse(x,y,rx,ry,rotation,start,end) rotation回転角度
    // beginPath可以省略不写！！
    // ctx.ellipse(100,100,50,30,0,0,2 * Math.PI);
    // ctx.rect(50,50,50,50);
    // ctx.stroke();

    // 圆弧的方法！！圆中心为基准
    // ctx.arc(x,y,r,strart,end); 0 ~ 360度 (2 * Math.PI)
    // ctx.beginPath();
    // ctx.arc(100,100,50,0,2 * Math.PI);
    // ctx.arc(100,100,50,0,300 / 360 * 2 * Math.PI);
    // ctx.arc(100,100,50,0,300 / 180 * Math.PI);
    // ctx.moveTo(100,100);
    // ctx.arc(100,100,50,0,300 / 180 * Math.PI, true);
    // ctx.stroke();
    // ctx.fill();

    // 線を描くbeginPath()
    // ctx.beginPath();
    // ctx.moveTo(50,50);
    // ctx.lineTo(100,50);
    // ctx.lineTo(100,100);
    // ctx.closePath();
    // ctx.stroke();
    // ctx.fill();

    // ctx.beginPath();
    // ctx.moveTo(100,50);
    // ctx.lineTo(200,50);
    // ctx.setLineDash([5,10]);
    // ctx.stroke();
    // // 第二線
    // ctx.beginPath();
    // ctx.moveTo(100,100);
    // ctx.lineTo(200,100);
    // ctx.setLineDash([]);
    // ctx.stroke();
    // // 第３線
    // ctx.beginPath();
    // ctx.moveTo(100,150);
    // ctx.lineTo(200,150);
    // ctx.lineWidth = 16;
    // ctx.lineCap = 'round';
    // ctx.stroke();

    // 背影
    // ctx.shadowOffsetX = 4;
    // ctx.shadowOffsetY = 4;
    // ctx.shadowBlur = 4;
    // ctx.shadowColor = 'rgba(0,0,0,0.3)';

    // ctx.fillRect(50,50,50,50);

    // ctx.fillRect(x,y,width,height);
    // ctx.fillStyle = "pink";
    // ctx.fillRect(50, 50, 50, 50);
    // ctx.strokeStyle = "#f00";
    // ctx.lineWidth = 8;
    // ctx.lineJoin = "round";
    // ctx.lineJoin = "bevel";
    // ctx.strokeRect(50, 50, 50, 50);

    //   createLinearGradient线性渐变方法！
    //   ctx.createLinearGradient(x0,y0,x1,y1);
    //   const g = ctx.createLinearGradient(0, 0, canvas.width, 0);
    //   const g = ctx.createRadialGradient(
    //   x0,y0,r0,
    //   canvas.width / 2,canvas.height / 2, 50,
    //   x1,y1,r1
    //   canvas.width / 2,canvas.height / 2, 300,
    //   );

    //   添加颜色！！
    //   g.addColorStop(0, "#f00");
    //   g.addColorStop(0.3, "#0f0");
    //   g.addColorStop(1, "#00f");

    //   ctx.fillStyle = g;
    //   // ctx.fillRect(0, 0, 600, 240);
    //   ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
  draw();
}
