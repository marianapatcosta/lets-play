import { PLAYERS } from "./game-metadata";
import { checkMatches } from "@/utils/game-utils";

export const checkTicTacToeLeftDiagonal = (moves) => {
  const leftDiagonalArray = moves.map((movesRow, index) => movesRow[index]);
  if (checkMatches(leftDiagonalArray)) {
    moves.forEach((movesRow, index) => (movesRow[index].winner = true));
    return PLAYERS[leftDiagonalArray[0].playerId];
  }
};

export const checkTicTacToeRightDiagonal = (moves) => {
  const rightDiagonalArray = moves.map(
    (movesRow, index) => movesRow[moves.length - 1 - index]
  );
  if (checkMatches(rightDiagonalArray)) {
    moves.forEach(
      (movesRow, index) => (movesRow[moves.length - 1 - index].winner = true)
    );
    return PLAYERS[rightDiagonalArray[0].playerId];
  }
};

export const checkTicTacToeHorizontal = (moves) => {
  for (let index = 0; index < moves.length; index++) {
    const movesRow = moves[index];
    if (checkMatches(movesRow)) {
      moves[index].forEach((move) => (move.winner = true));
      return PLAYERS[movesRow[0].playerId];
    }
  }
};

export const checkTicTacToeVertical = (moves) => {
  for (let index = 0; index < moves.length; index++) {
    const columnArray = moves.map((movesRow) => movesRow[index]);
    if (checkMatches(columnArray)) {
      moves.forEach((movesRow) => (movesRow[index].winner = true));
      return PLAYERS[columnArray[0].playerId];
    }
  }
};
