const Pelota = function()
{
	const r = 10 //  RADIO DEL CIRCULO CENTRAL
	let x = Math.round(width/2)
	let y = Math.round(height/2)
	let stepX = 8 // VELOCIDAD DE MOVIMIENTO EN X
	let stepY = 8 //  VELOCIDAD DE MOVIMIENTO EN Y

////////     COORDENADAS + VELOCIDAD  /////
	const mover = function()
	{
		x += stepX
		y += stepY
		edges()
	}


	const reset = function()
	{
		x = Math.floor(width/2)
		y = Math.floor(height/2)
		stepX *= Math.round(Math.random()) * 2 - 1
		stepY *= Math.round(Math.random()) * 2 - 1
	}

	const edges = function(){

		if(y - r <= 0  || y + r >= height)
		{
			stepY = -stepY
		}
	}

	const checkScore = function(g1,g2)
	{
		console.log(g1)

		if(x <= g1.w + r && y >= g1.y && y <= g1.y+g1.h){
			reset()
			return 2
		}

		if( x >= width - g2.w && y >= g1.y && y <= g1.y+g1.h){
			reset()
			return 1
		}

		return 0
	}

//////////  PINTA PELOTA  /////////////

	const draw = function()
	{
	////  APARIENCIA PELOTA
		ellipseMode(CENTER)
		fill("white")
		ellipse(x,y,r*4,r*4)

	//// APARIENCIA CIRCULO CENTRAL
		ellipseMode(CENTER)
		fill("YELLOW")
		ellipse(width/2,height/2,r*8,r*8)
	}

/////////////  COLISION //////////////////

	const collision = function(jugador)
	{
		let dx = Math.abs(x - jugador.getX() - jugador.getW() / 2)
		let dy = Math.abs(y - jugador.getY() - jugador.getH() / 2)

		if(x <= 0 || x >= width)
		{
			stepX = -stepX
			return true
		}

		if(dx >= jugador.getW() || dy >= jugador.getH() / 2 + r)
		{
			return false
		}

		if(dx <= jugador.getW() / 2 || dy <= jugador.getH() / 2 || dx)
		{
			stepX = -stepX
			return true
		}
	}

	return {
		draw,
		mover,
		collision,
		checkScore,
	}
}