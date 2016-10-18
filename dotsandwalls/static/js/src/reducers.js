const initialState = {
	grid: [[]],
	lines: [],
	squares: [],
	boardSize: null, 
	players: [],
	nextPlayer: null,
	gameInProgress: false,
	completed: false,
	linesRemaining: null,
}

function update(state, line_change) {
	return Object.assign({}, state, line_change);
}

function reducer(state = initialState, action) {
	switch(action.type) {
		case 'START_GAME': {
			return update(state, {
				gameInProgress: true
			});
		}

		case 'STOP_GAME': {
			return update(state, {
				gameInProgress: false
			});
		}

		case 'REPORT_WIN': {
			return update(state, {
				gameInProgress: false,
				completed: true
			});
		}

		case 'REPORT_DRAW': {
			return update(state, {
				gameInProgress: false,
				completed: true
			});
		}

		// TODO
		case 'UPDATE_BOARD'; {
			return
		}

		// TODO
		case 'DRAW_LINE': {
			return
		}

		// TODO
		case 'DRAW_SQUARE': {
			return
		}

		case 'SET_BOARD_SIZE': {
			return update(state, {
				boardSize: action.boardSize
			});
		}

		case 'SET_NEXT_PLAYER': {
			return update(state, {
				nextPlayer: action.nextPlayer
			});
		}



		default:
			return state
	}
}