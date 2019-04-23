import React from "react";
import { COLUMNS, ROWS } from "./constants";

const styles = {
  board: {
    display: "flex",
    flexWrap: "wrap",
    width: COLUMNS * 70,
    height: ROWS * 70,
    margin: "10px 0"
  },
  cellConteiner: {
    width: 70,
    height: 70,
    boxSizing: "border-box",
    backgroundColor: "blue",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  cell: {
    width: 60,
    height: 60,
    borderRadius: "100px"
  }
};

function Board({ board, onClickFill }) {
  return (
    <div style={styles.board}>
      {board.map((row, rowidx) =>
        row.map((cell, cellindex) => (
          <div key={`${rowidx}${cellindex}`} style={styles.cellConteiner}>
            <div
              style={{ backgroundColor: cell.color, ...styles.cell }}
              onClick={() =>
                !cell.filled ? onClickFill(`${rowidx}${cellindex}`) : null
              }
            />
          </div>
        ))
      )}
    </div>
  );
}
export default Board;
