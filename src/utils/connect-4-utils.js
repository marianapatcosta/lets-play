import { PLAYERS } from "./game-metadata";
import { checkMatches } from "@/utils/game-utils";

export const checkConnect4LeftDiagonal = (moves) => {
  for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
    for (let columnIndex = 0; columnIndex < 4; columnIndex++) {
      const movesToCheck = [
        moves[rowIndex][columnIndex],
        moves[rowIndex + 1][columnIndex + 1],
        moves[rowIndex + 2][columnIndex + 2],
        moves[rowIndex + 3][columnIndex + 3],
      ];
      if (checkMatches(movesToCheck)) {
        movesToCheck.forEach((move) => (move.winner = true));
        return PLAYERS[moves[rowIndex][columnIndex].playerId];
      }
    }
  }
};

export const checkConnect4RightDiagonal = (moves) => {
  for (let rowIndex = 3; rowIndex < 6; rowIndex++) {
    for (let columnIndex = 0; columnIndex < 4; columnIndex++) {
      const movesToCheck = [
        moves[rowIndex][columnIndex],
        moves[rowIndex - 1][columnIndex + 1],
        moves[rowIndex - 2][columnIndex + 2],
        moves[rowIndex - 3][columnIndex + 3],
      ];
      if (checkMatches(movesToCheck)) {
        movesToCheck.forEach((move) => (move.winner = true));
        return PLAYERS[moves[rowIndex][columnIndex].playerId];
      }
    }
  }
};

export const checkConnect4Vertical = (moves) => {
  for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
    for (let columnIndex = 0; columnIndex < 7; columnIndex++) {
      const movesToCheck = [
        moves[rowIndex][columnIndex],
        moves[rowIndex + 1][columnIndex],
        moves[rowIndex + 2][columnIndex],
        moves[rowIndex + 3][columnIndex],
      ];
      if (checkMatches(movesToCheck)) {
        movesToCheck.forEach((move) => (move.winner = true));
        return PLAYERS[moves[rowIndex][columnIndex].playerId];
      }
    }
  }
};

export const checkConnect4Horizontal = (moves) => {
  for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
    for (let columnIndex = 0; columnIndex < 4; columnIndex++) {
      const movesToCheck = [
        moves[rowIndex][columnIndex],
        moves[rowIndex][columnIndex + 1],
        moves[rowIndex][columnIndex + 2],
        moves[rowIndex][columnIndex + 3],
      ];
      if (checkMatches(movesToCheck)) {
        movesToCheck.forEach((move) => (move.winner = true));
        return PLAYERS[moves[rowIndex][columnIndex].playerId];
      }
    }
  }
};
