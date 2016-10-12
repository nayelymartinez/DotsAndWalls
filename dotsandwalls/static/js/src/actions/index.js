/* Action (Types) */
export const START_GAME = 'START_GAME'
export const STOP_GAME = 'STOP_GAME'
export const REPORT_WIN = 'REPORT_WIN'
export const REPORT_DRAW = 'REPORT_DRAW'

export const UPDATE_BOARD = 'UPDATE_BOARD'
export const SET_BOARD_SIZE = 'SET_BOARD_SIZE'
export const DRAW_LINE = 'DRAW_LINE'
export const DRAW_SQUARE = 'DRAW_SQUARE'

export const SET_NEXT_PLAYER = 'SET_NEXT_PLAYER'
export const UPDATE_NEXT_PLAYER = 'UPDATE_NEXT_PLAYER'


/* Action Creators */

// GAME:
export const startGame() {
	return {
		type: START_GAME,
	}
}

export const stopGame() {
	return { type: STOP_GAME }
}

export const reportWin() {
	return { type: REPORT_WIN }
}

export const reportDraw() {
	return { type: REPORT_DRAW }
}


// BOARD:
export const updateBoard() {
	return { type: UPDATE_BOARD }
}

export const updateBoard() {
	return { type: UPDATE_BOARD }
}

export const setBoardSize(size) {
	return {
		type: SET_BOARD_SIZE,
		size,
	}
}

export const drawLine(coordinates) {
	return {
		type: DRAW_LINE,
		coordinates,
	}
}

export const drawSquare(coordinates) {
	return {
		type: DRAW_SQUARE,
		coordinates,
	}
}


// PLAYER:
export const setNextPlayer(player_id) {
	return {
		type: SET_NEXT_PLAYER,
		player_id,
	}
}

export const updateNextPlayer(player_id) {
	return {
		type: UPDATE_NEXT_PLAYER,
		player_id,
	}
}



