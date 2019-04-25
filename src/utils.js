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

function checkLine(a, b, c, d) {
  return a !== "white" && a === b && a === c && a === d;
}

function vertical(board) {
  for (let i = ROWS - 1; i >= 4; i--) {
    for (let j = 0; j < COLUMNS; j++) {
      if (
        checkLine(
          board[i][j].color,
          board[i - 1][j].color,
          board[i - 2][j].color,
          board[i - 3][j].color
        )
      ) {
        return `Player ${board[i][j].color} wins!`;
      }
    }
  }
  return false;
}

function horizontal(board) {
  for (let i = ROWS - 1; i >= 0; i--) {
    for (let j = 0; j < COLUMNS - 3; j++) {
      if (
        checkLine(
          board[i][j].color,
          board[i][j + 1].color,
          board[i][j + 2].color,
          board[i][j + 3].color
        )
      ) {
        return `Player ${board[i][j].color} wins!`;
      }
    }
  }
  return false;
}

function diagonalRight(board) {
  for (let i = ROWS - 1; i >= 4; i--) {
    for (let j = 0; j < COLUMNS - 3; j++) {
      if (
        checkLine(
          board[i][j].color,
          board[i - 1][j + 1].color,
          board[i - 2][j + 2].color,
          board[i - 3][j + 3].color
        )
      ) {
        return `Player ${board[i][j].color} wins!`;
      }
    }
  }
  return false;
}

function diagonalLeft(board) {
  for (let i = ROWS - 1; i >= 3; i--) {
    for (let j = COLUMNS - 1; j >= 3; j--) {
      if (
        checkLine(
          board[i][j].color,
          board[i - 1][j - 1].color,
          board[i - 2][j - 2].color,
          board[i - 3][j - 3].color
        )
      ) {
        return `Player ${board[i][j].color} wins!`;
      }
    }
  }
  return false;
}

function draw(board) {
  for (let row of board) {
    for (let cell of row) {
      if (!cell.filled) {
        return false;
      }
    }
  }
  return "DRAW!";
}

export function checkWinner(board) {
  return (
    vertical(board) ||
    horizontal(board) ||
    diagonalRight(board) ||
    diagonalLeft(board) ||
    draw(board)
  );
}
