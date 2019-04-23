import React, { useReducer } from "react";
import "./App.css";

import { init } from "./utils";
import { reducer } from "./reducer";
import * as actions from "./actions";
import Board from "./Board";

function App() {
  const [state, dispatch] = useReducer(reducer, null, init);

  const { board, gameOver, message } = state;

  return (
    <div>
      <h1>Connect 4</h1>
      <button onClick={() => dispatch(actions.newGame())}>New Game</button>
      <Board board={board} onClickFill={id => dispatch(actions.fillCell(id))} />
      {gameOver ? <p>{message}</p> : null}
    </div>
  );
}

export default App;
