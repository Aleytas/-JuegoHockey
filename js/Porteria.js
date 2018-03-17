
const Porteria = function(jugador)
{
	const w = 10
	const h = 200
	const p = jugador
	let x = p === 1 ? 0 : width - w
	let y = height/2-h/2

	

	////////////////////////   GET  //////////////////
	

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
		return w
	}

	const getH = function()
	{
		return h
	}

	return{
		draw,
		y,
		h,
		w
	}
}