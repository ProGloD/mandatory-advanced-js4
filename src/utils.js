import { COLUMNS, ROWS, PLAYER_1 } from "./constants";

function createEmptyBoard() {
  return Array(ROWS)
    .fill(null)
    .map(_ =>
      Array(COLUMNS)
        .fill(null)
        .map(_ => ({ filled: false, color: "white" }))
    );
}

export function init() {
  return {
    board: createEmptyBoard(),
    currentPlayer: PLAYER_1,
    gameOver: false,
    message: ""
  };
}
