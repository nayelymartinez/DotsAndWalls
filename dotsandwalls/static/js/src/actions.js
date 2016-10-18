/* Action Creators */

// GAME:
export const startGame = () => {
	return {
		type: 'START_GAME',
	}
}

export const stopGame = () => {
	return { type: 'STOP_GAME' }
}

export const reportWin = () => {
	return { type: 'REPORT_WIN' }
}

export const reportDraw = () => {
	return { type: 'REPORT_DRAW' }
}


// BOARD:
export const updateBoard = () => {
	return { type: 'UPDATE_BOARD' }
}

export const updateBoard = () => {
	return { type: 'UPDATE_BOARD' }
}

export const setBoardSize = (size) => {
	return {
		type: 'SET_BOARD_SIZE',
		size,
	}
}

export const drawLine = (coordinates) => {
	return {
		type: 'DRAW_LINE',
		coordinates,
	}
}

export const drawSquare = (coordinates) => {
	return {
		type: 'DRAW_SQUARE',
		coordinates,
	}
}


// PLAYER:
export const setNextPlayer = (player_id) => {
	return {
		type: 'SET_NEXT_PLAYER',
		player_id,
	}
}



