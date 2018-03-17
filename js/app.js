let pelota
let jugador1
let jugador2
let g1
let g2
let r=2;

function setup()
{
	createCanvas(windowWidth,windowHeight);
	pelota = new Pelota()
	jugador1 = new Paddle(1)
	jugador2 = new Paddle(2)
	g1 = new Porteria(1)
	g2 = new Porteria(2)

}

function draw()
{
	///////// FONDO   //////////////////7

	background("black")  // FONDO DEL TABLERO
	
	///////////  PORTERIAS  //////////////

	rectMode(CENTER)  // RECTANGULO DE LA PORTERIA IZQ
	fill("red")  // COLOREA ROJO
	rect( 0,325,50,175) // ( x,y,GROSOR FIGURA, ALTO FIGURA)
	
	fill("blue")  // COLOREA AZUL
	rect( 1350,325,50,175) // ( x,y,GROSOR FIGURA, ALTO FIGURA)
	
	/////  LINEA  ////////////////////////////////////////////////////
	
	stroke("white") // CONTORNO LINEA
	strokeWeight(4)  // ANCHO DEL CONTORNO
	line(width/2, 0, width/2, height) // DIBUJA LINEA

	pelota.mover() //PELOTA SE MUEVE
	pelota.draw() // PELOTA SE DIBUJA

	if(pelota.collision(jugador1) || pelota.collision(jugador2))
		pelota.mover()

	if(keyIsDown(DOWN_ARROW))
		jugador2.moverY(1)
	if(keyIsDown(UP_ARROW))
		jugador2.moverY(-1)

	if(keyIsDown(LEFT_ARROW))
		jugador2.moverX(-1,2)
	if(keyIsDown(RIGHT_ARROW))
		jugador2.moverX(1,2)

	if(keyIsDown(83))
		jugador1.moverY(1)
	if(keyIsDown(87))
		jugador1.moverY(-1)

	if(keyIsDown(65))
		jugador1.moverX(-1,1)
	if(keyIsDown(68))
		jugador1.moverX(1,1)

	jugador1.draw()
	jugador2.draw()
	jugador1.draw()
	jugador2.draw()

	let plus = pelota.checkScore(g1,g2)
	if(plus == 1)
		jugador1.addScore()
	else if(plus == 2)
		jugador2.addScore()
	Marcador()

}

/*function keyPressed(){
	if(keyCode === ENTER)
		noLoop()
}*/

/////////   MARCADOR ///////////////////////////////////////7

const Marcador = function()
{
	fill('red') // Color de texto
	textSize(50) // tamaño de texto

////////  JUGADOR 1 ///////

	text('jugador 1:', 225, 50)
	text(jugador1.puntuacion(), 300,100)// ('texto',x,y) // Muestra en pamtalla la puntuacion

///////    JUGADOR 2  ////////

	text('jugador 2:', 900, 50)
	text(jugador2.puntuacion(), 1000,100)
	
}
////////////////////////////////////////////////////////////////////////

