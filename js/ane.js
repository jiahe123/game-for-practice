var aneObj=function(){
	this.rootx=[];
	this.headx=[];
	this.heady=[];
	//this.len=[];
	this.alpha=0;
	this.amp=[];
	
}
aneObj.prototype.num=70;
aneObj.prototype.init=function(){
	var h=can1.height;
	for(var i=0;i<this.num;i++){
		this.rootx[i]=i*16+Math.random()*20;
		this.headx[i]=this.rootx[i];
		this.heady[i]=h-240+Math.random()*50;
	    this.amp[i]=Math.random()*50+40;
	}
	
}
aneObj.prototype.draw=function(){
	this.alpha+=deltaTime*0.0006;
	var l=Math.sin(this.alpha);
	ctx2.save();//样式只在这一段生效
	ctx2.globalAlpha=0.6;
	ctx2.lineWidth=25;
	ctx2.strokeStyle="#3b154e";
	ctx2.lineCap="round";
	for(var i=0;i<this.num;i++){
		ctx2.beginPath();
		ctx2.moveTo(this.rootx[i],canHeight);
		ctx2.quadraticCurveTo(this.rootx[i],canHeight-100,this.headx[i]+l*this.amp[i],this.heady[i]);
		ctx2.stroke();
	}
	ctx2.restore();
}