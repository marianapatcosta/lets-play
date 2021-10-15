import { PLAYERS } from "./game-metadata";

const toClockString = (time) => String(time).padStart(2, "0");

export const formatTime = (timeInMilliseconds) => {
  // 1h = 36000ms
  const hours = toClockString(Math.floor(timeInMilliseconds / 3600000));
  // 1min = 60000ms
  const minutes = toClockString(
    Math.floor((timeInMilliseconds % 3600000) / 60000)
  );
  // 1s = 1000ms
  const seconds = toClockString(
    Math.floor(((timeInMilliseconds % 360000) % 60000) / 1000)
  ); // 1s = 1000ms
  return `${hours}:${minutes.padStart(2, "0")}:${seconds.padStart(2, "0")}`;
};

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

export const getVictoriesPerPlayer = (roundsHistory) => {
  return roundsHistory.reduce((victories, currentRound) => {
    if (currentRound.winner in victories) {
      victories[currentRound.winner] = victories[currentRound.winner] + 1;
    } else if (currentRound.winner) {
      victories[currentRound.winner] = 1;
    }
    return victories;
  }, {});
};

export const getVictoriesAndLossesPerPlayer = (roundsHistory) => {
  const victoriesPerPlayer = roundsHistory.reduce(
    (victoriesAndLosses, currentRound) => {
      if (currentRound.winner in victoriesAndLosses) {
        victoriesAndLosses[currentRound.winner] =
          victoriesAndLosses[currentRound.winner] + 1;
      } else if (currentRound.winner) {
        victoriesAndLosses[currentRound.winner] = 1;
      }
      return victoriesAndLosses;
    },
    {}
  );
  const { player1: player1Victories, player2: player2Victories } =
    victoriesPerPlayer;

  const victoriesAndLossesPerPlayer = {
    player1: {
      victories: player1Victories || 0,
      losses: player2Victories || 0,
    },
    player2: {
      victories: player2Victories || 0,
      losses: player1Victories || 0,
    },
  };
  return victoriesAndLossesPerPlayer;
};

const checkMatches = (moves) => {
  return (
    moves.every(({ playerId }) => playerId === PLAYERS.player1.id) ||
    moves.every(({ playerId }) => playerId === PLAYERS.player2.id)
  );
};
