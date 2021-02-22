var MyCircle = function(x,y,level,key){
    this.x = x;
	this.y = y;
	this.level = level;
	this.key = key;
	this.r = 10 + level * 5;
	
	this.body = Bodies.circle(this.x,this.y,this.r,{
		level:level,
		key,key
	});
	World.add(world,this.body);
	
	this.delete = function(){
		World.remove(world,this.body);
	}
	
	this.render = function(){
		push();
		translate(this.body.position.x,this.body.position.y);
		rotate(this.body.angle);
		fill(255 - this.level * 20);
		circle(0,0,this.r * 2);
		pop();
	}
}
