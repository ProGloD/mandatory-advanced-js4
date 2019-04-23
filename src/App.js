import React, { useReducer } from "react";
import "./App.css";

import { PLAYER_1, PLAYER_2 } from "./constants";
import { init } from "./utils";
import { reducer } from "./reducer";
import * as actions from "./actions";
import Board from "./Board";

function App() {
  const [state, dispatch] = useReducer(reducer, null, init);

  const { board, currentPlayer, gameOver, message } = state;

  return (
    <div>
      <h1>Connect 4</h1>
      <button onClick={() => dispatch(actions.newGame())}>New Game</button>
      <Board board={board} onClickFill={id => dispatch(actions.fillCell(id))} />
    </div>
  );
}

export default App;
