import {
  Player1,
  Player2,
  OBright,
  ODark,
  XBright,
  XDark,
} from "@/assets/icons";

export const PLAYERS = {
  player1: {
    id: "player1",
    name: "Player 1",
    icon: Player1,
    playerColor: "#37A8EE",
    moveId: "move1",
  },
  player2: {
    id: "player2",
    name: "Player 2",
    icon: Player2,
    playerColor: "#00DCA4",
    moveId: "move2",
  },
};

export const MOVES = {
  move1: {
    playerId: "player1",
    playerName: "Player 1",
    icon: XDark,
    winnerIcon: XBright,
    playerColor: "#37A8EE",
  },
  move2: {
    playerId: "player2",
    playerName: "Player 2",
    icon: ODark,
    winnerIcon: OBright,
    playerColor: "#00DCA4",
  },
};

export const GAME_STATUS = {
  WINNER: "winner",
  LOSER: "loser",
  DRAW: "draw",
};

export const TIC_TAC_TOE_DIMENSIONS = [
  { label: "3x3", value: 3 },
  { label: "6x6", value: 6 },
  { label: "9x9", value: 9 },
];

export const CONNECT_4_DIMENSIONS = {
  rows: 6,
  columns: 7,
};

export const MIN_VICTORIES_TO_WIN_CONNECT_4 = 7;

export const TOTAL_ROUNDS = 9;

export const GAMES = ["Tic tac toe", "4 in a row"];
