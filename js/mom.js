var momObj=function(){
	this.x=[];
	this.y=[];
	this.angle=[];
	//this.bigEye=new Image();
	//this.bigBody=new Image();
	this.babyTailTimer=0;
	this.babyTailConut=0;
	//this.bigTail=new Image();
	
	this.babyEyeTimer = 0;
	this.babyEyeCount = 0;
	this.babyEyeInterval = 1000;
	
	this.momBodyCount = 0;
}
momObj.prototype.init=function(){
	this.x=canWidth*0.5;
	this.y=canHeight*0.5;
	this.angle=0;
	//this.bigEye.src="./src/babyEye0.png";
	//this.bigBody.src="./src/bigSwim0.png";
	//this.bigTail.src="./src/bigTail0.png";
	
	//this.momBodyCount = 0;
}
momObj.prototype.draw=function(){
	
	
	//lerp使得一个值趋向于目标值
	this.x = lerpDistance(mx,this.x,0.98);
	this.y = lerpDistance(my,this.y,0.98);
	
	//计算角度差，使得鱼旋转
	var deltaY=my-this.y;
	var deltaX=mx-this.x;
	var beta=Math.atan2(deltaY,deltaX)+Math.PI;//api的返回值是-π到π,Math.PI旋转360
	//lerp angle使大雨的角度趋向于鼠标的角度
	this.angle=lerpAngle(beta,this.angle,0.9);
	
	this.babyTailTimer+=deltaTime;
	if(this.babyTailTimer>50)
	{
		this.babyTailConut=(this.babyTailConut+1)%8;
		this.babyTailTimer%=50;
	}
	
	this.babyEyeTimer += deltaTime;
	if (this.babyEyeTimer > this.babyEyeInterval) {
		this.babyEyeCount = (this.babyEyeCount + 1) % 2;
	 	this.babyEyeTimer %= this.babyEyeInterval;
	 	if (this.babyEyeCount == 0) {		//小鱼睁着眼睛时间
	 		this.babyEyeInterval = Math.random() * 1500 + 2000;
	 	}
	 	else{	//眯着眼睛时间
	 		this.babyEyeInterval = 200;
	 	}
	}
	
	ctx1.save();
	ctx1.translate(this.x,this.y);
	ctx1.rotate(this.angle);
	
	var babyTailConut=this.babyTailConut;
	ctx1.drawImage(babyTail[babyTailConut],-babyTail[babyTailConut].width*0.5+24,-babyTail[babyTailConut].height*0.5);
	
	var momBodyCount = this.momBodyCount;
	// console.log(momBodyCount);
	if (data.double == 1) {
		ctx1.drawImage(momBodyOra[momBodyCount],-momBodyOra[momBodyCount].width * 0.5,-momBodyOra[momBodyCount].width * 0.5);
	} else {
		ctx1.drawImage(momBodyBlu[momBodyCount],-momBodyBlu[momBodyCount].width * 0.5,-momBodyBlu[momBodyCount].width * 0.5);
	}
	
	var babyEyeCount = this.babyEyeCount;
	ctx1.drawImage(babyEye[babyEyeCount],-babyEye[babyEyeCount].width * 0.5,-babyEye[babyEyeCount].height * 0.5);

	ctx1.restore();
}
