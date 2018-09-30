//判断大鱼是否吃掉果实
function momFruitColision(){
	if(!data.gameover)
	{
		for(var i=0;i<fruit.num;i++)
		{
			if(fruit.alive[i])
			{
				
				var l=calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
				if(l<900)
				{
					fruit.dead(i);
					data.fruitNum++;
					mom.momBodyCount++;
					//console.log(momBodyCount);
					if(mom.momBodyCount>7)
						mom.momBodyCount=7;
					if(fruit.fruitType[i]=="blue")
					{
						data.double=2;
					}
					wave.born(fruit.x[i],fruit.y[i]);
				}
			}
		}	
	}

}
function momBabyColision(){
	if(data.fruitNum>0 && !data.gameover)
	{
		var l=calLength2(mom.x,mom.y,baby.x,baby.y);
		if(l<900)
		{
			baby.babyBodyCount=0;
			//data->0
			mom.momBodyCount=0;
			//score genxin
			data.addScore();
			//console.log(this.scroe);
		}
	}
	

}