const Paddle = function(jugador)
{
	const p = jugador
	const speed = 8 // tiempo movimiento de controles
	const UP = -1
	const DOWN =1
	const LEFT = -1
	const RIGHT = 1
	let x = p === 1 ? 20 : width - 100 - 20
	let y = height/2-100/2
	
	let score = 0


	const getX = function()
	{
		return x
	}

	const getY = function()
	{
		return y
	}

	const getW = function()
	{
		return 100
	}

	const getH = function()
	{
		return 100
	}

	const puntuacion = function()
	{
		return score
	}

	const addScore = function(p)
	{
		score++
	}

/////////////  DIBUJA A JUGADORES  ////////////////
	const draw = function()
	{
		noStroke()//  QUITA CONTORNO
		fill("blue") // COLOREA FIGURA
		ellipse(x,y,100,100)
	}


/////////////   MOVIMIENTO EN Y  /////////////////

	const moverY = function(dir)
	{
		if(edgeY(dir))
			y+= dir*speed
	}

////////////////////////////////////////////////////

	const moverX = function(dir,jugador)
	{
		if(edgeX(dir,jugador))
			x+= dir*speed
	}

	const edgeY = function(dir){
		return (dir === UP && y > 0 || 
			dir === DOWN && y < height - 100)
	}

	const edgeX = function(dir, jugador){
		if(jugador === 1)
			return (dir === LEFT && x > 0 || dir === RIGHT && x < width/2-100)
		else if(jugador === 2)
			return (dir === LEFT && x > width/2  || dir === RIGHT && x < width-100)
	}				// (direccion igual izquierda y x mayor a anchura/2  "o" direccion derecha y x es menor a anchura-100)

	return{
		draw,
		moverX,
		moverY,
		edgeX,
		edgeY,
		getX,
		getY,
		getH,
		getW,
		puntuacion,
		addScore
	}
}