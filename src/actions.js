export function newGame() {
  return { type: "new_game" };
}

export function fillCell(id) {
  return { type: "fill_cell", id };
}
