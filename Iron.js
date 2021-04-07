class Iron{
	constructor(x,y,width, height)
	{
	
		var options= {
			'resitution': 0.8,
			'friction':3,
			'density':30
	}

    this.body=Bodies.rectangle(x, y, 100, 55, options);

		this.x=x;
		this.y=y;
		this.width= width;
        this.height= height
		
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			//stroke("black");
			fill("brown");
			
			rect(0, 0, this.width, this.height)

			pop()
	}

}