var FruiteObj=function(){
	this.alive=[];//bool值
	this.x=[];
	this.y=[];
	this.l=[];
	this.spd=[];
	this.fruitType=[];
	this.orange=new Image();
	this.blue=new Image();
}
FruiteObj.prototype.num=30;
FruiteObj.prototype.init=function(){
	for(var i=0;i<this.num;i++){
		this.alive[i]=false;
		this.x[i]=0;
		this.y[i]=0;
		//this.l[i]=0;
		this.spd[i]=Math.random()*0.017+0.003;//0.003-0.02
		this.fruitType[i]="";
		//this.born(i);
	}
	this.orange.src="./src/fruit.jpg";
	this.blue.src="./src/blue.jpg";
}
FruiteObj.prototype.draw=function()
{
	for(var i=0;i<this.num;i++)
	{
		//找到ane，然后飘
			if(this.alive[i])
			{
				if(this.fruitType[i]=="blue")
				{
					var pic=this.blue;
				}
				else{
					pic=this.orange;
				}
				if(this.l[i]<=14)
				{
					this.l[i]+=this.spd[i]*deltaTime;
				}
				else
				{
					this.y[i]-=this.spd[i]*7*deltaTime;
				}
				
				ctx2.drawImage(pic,this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);
				if(this.y[i]<=10)//这里调试出错误
				{
					//console.log("hehe");
					this.alive[i]=false;
				}
			}	
	}
}
FruiteObj.prototype.born=function(i){//出生的位置
	var aneID=Math.floor(Math.random()*ane.num);
    this.x[i]=ane.headx[aneID];
    this.y[i]=ane.heady[aneID];
	this.l[i]=0;
    this.alive[i]=true;
	var ran=Math.random();
	if(ran<0.2)
	{
		this.fruitType[i]="blue";
	}
	else
	{
        this.fruitType[i]="orange";
	}
	
}
FruiteObj.prototype.dead=function(i){
	this.alive[i]=false;
}
function fruitLisener(){
	// debugger;
	var num = 0;
	for (var i = 0; i < fruit.num; i++) {
		if (fruit.alive[i]) {
			num ++;
		}
	}
	if (num <= 14) {
		// debugger;
		sendFruite();
		return;
	}
	// console.log("hehe");
}
function sendFruite(){
	for (var i = 0; i < fruit.num; i++) {
		if (!fruit.alive[i]) {
            fruit.born(i);
            return;
		}
	}
}