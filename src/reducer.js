import { init } from "./utils";
import { PLAYER_1, PLAYER_2 } from "./constants";

export function reducer(state, action) {
  let board;
  switch (action.type) {
    case "new_game":
      return init();
    case "fill_cell":
      board = [...state.board];
      const id = action.id.split("");
      let currentPlayer = state.currentPlayer;

      for (let i = board.length - 1; i > 0; i--) {
        const cell = board[i][id[1]];
        if (!cell.filled) {
          cell.color = currentPlayer;
          cell.filled = true;
          break;
        }
      }

      currentPlayer = currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1;

      return { ...state, board, currentPlayer };
    default:
      return state;
  }
}
