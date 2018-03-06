let ball;
let p1;
let p2;

function setup()
{
	createCanvas(windowWidth,windowHeight)
	p1 = new paleta(1, color('red'))
	p2 = new paleta(2, color('blue'))
	ball = new Ball()
}


function draw()
{
	background('#58ACFA');
	drawLine()
	ball.draw()
	ball.move()
	p1.draw()
	p2.draw()

	if (keyPressed) 
	{

		if(keyIsDown(87))
			p1.move(-1)
		if (keyIsDown(83)) 
			p1.move(1)
		if (keyIsDown(UP_ARROW))
			P2.move(-1)
		if(keyIsDown(DOWN_ARROW))
			p2.move(1)

	}
}

/*function keyPressed()
{
	switch(keyCode)
	{
		case 87://w
		p1.move(-1)
		console.log('arriba p1')
		break

		case 83://
		p1.move(1)
		console.log('abajo p1')
		break

		case UP_ARROW:
		console.log('arriba p2')
		break

		case DOWN_ARROW:
		console.log('abajo p2')
		break
	}
}*/

const drawLine = function (){
	stroke('#fff')
	strokeWeight(4)
	line(width/2, 0, width/2, height);

}
