var can1;
var can2;

var ctx1;
var ctx2;

var canWidth;
var canHeight;

var lastTime;
var deltaTime;

var bgPic=new Image();

var ane={};

var fruit={};

var mom={};

var baby={};

var babyTail=[];

var babyEye=[];

var babyBody=[];

var data={};

var momBodyOra=[];
var momBodyBlu=[];

var dust;
var dustpic=[];

var wave = {};


document.body.onload=start;
function start(){
	var oMask = document.getElementById('mask');
	var oImg = document.getElementById('img');
	var oBtn = document.getElementById('btn');
	oBtn.onclick = function ()
	{
    oMask.style.display = 'block';
    oImg.style.display = 'block';
    oMask.style.width = document.documentElement.clientWidth + 'px';
    oMask.style.height = document.documentElement.clientHeight + 'px';
    oImg.style.left = (document.documentElement.clientWidth - oImg.offsetWidth)/2 + 'px';
    oImg.style.top = (document.documentElement.clientHeight - oImg.offsetHeight)/2 + 'px';
	}
}

function game(){
	
	init();
	lastTime=Date.now();
	deltaTime=0;
	gameloop();
}
function init(){

	//获取canvas context
	can1=document.getElementById("canvas1");//canvas1在前面，鱼们，杂质，特效，Ui（因为z-index值越大，越在前面）
	ctx1=can1.getContext("2d");//获得场景
	can2=document.getElementById("canvas2");//canvas2在后面，背景，果实,ane
	ctx2=can2.getContext("2d");
	
	can1.addEventListener('mousemove',onMouseMove,false);
	
	bgPic.src="./src/bg.jpg";
	canWidth=can1.width;
	canHeight=can1.height;
	
	ane=new aneObj();
	ane.init();

	fruit=new FruiteObj();
	fruit.init();
	
	mom=new momObj();
	mom.init();
    mx=canWidth*0.5;
	my=canHeight*0.5;
	
	baby=new babyObj();
	baby.init();
	for(var i=0;i<8;i++){
		babyTail[i]=new Image();
		babyTail[i].src="./src/bigTail"+i+".png";
	}
	for(var i=0;i<2;i++){
		babyEye[i]=new Image();
		babyEye[i].src="./src/babyEye"+i+".png";
	}
	
	for(var i=0;i<20;i++){
		babyBody[i]=new Image();
		babyBody[i].src="./src/babyFade"+i+".png";
	}
	
	data=new dataObj();
	
	for(var i=0;i<8;i++){
		momBodyOra[i]=new Image();
		momBodyBlu[i]=new Image();
		momBodyOra[i].src="./src/bigSwim"+i+".png";
		momBodyBlu[i].src="./src/bigSwimBlue"+i+".png";
	}
	
	for(var i=0;i<7;i++)
	{
		dustpic[i]=new Image();
		dustpic[i].src="./src/dust"+i+".png";
	}
	dust=new DustObj();
	dust.init();
	
	wave = new WaveObj();
	wave.init();

}
function gameloop(){
	//动画效果
	window.requestAnimFrame(gameloop);//智能计算,faps
	var now=Date.now();
	deltaTime=now-lastTime;//每一帧运动速度
	lastTime=now;
	if(deltaTime>40)deltaTime=40;
	drawBackground();
	
	ane.draw();
	fruitLisener();
	fruit.draw();
	ctx1.clearRect(0,0,canWidth,canHeight);
	mom.draw();
	
	momFruitColision();
	momBabyColision();
	baby.draw();
	
	data.draw();
	
	dust.draw();
	
	wave.draw();
}
function onMouseMove(e)
{	//lerp使得一个值趋向于目标值
    if(!data.gameover){
		if(e.layerX||e.offSetX)
		{
			mx=e.offSetX==undefined?e.layerX:e.offSetX;
			my=e.offSetY==undefined?e.layerY:e.offSetY;
		}
	}
}