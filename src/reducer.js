import { init, checkWinner } from "./utils";
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

      for (let i = board.length - 1; i >= 0; i--) {
        const cell = board[i][id[1]];
        if (!cell.filled) {
          cell.color = currentPlayer;
          cell.filled = true;
          break;
        }
      }

      let gameOver;
      let message = checkWinner(board);
      if (message) {
        for (let row of board) {
          for (let cell of row) {
            cell.filled = true;
          }
        }
        gameOver = true;
      } else {
        currentPlayer = currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1;
      }

      return { board, currentPlayer, gameOver, message };
    default:
      return state;
  }
}
