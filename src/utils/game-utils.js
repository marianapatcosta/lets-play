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

export const checkMatches = (moves) => {
  return (
    moves.every(({ playerId }) => playerId === PLAYERS.player1.id) ||
    moves.every(({ playerId }) => playerId === PLAYERS.player2.id)
  );
};
