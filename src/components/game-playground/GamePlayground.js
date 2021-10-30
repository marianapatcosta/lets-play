import { defineComponent } from "vue";
import Player from "../player/Player.vue";
import Timer from "../timer/Timer.vue";
import Connect4Board from "../connect-4-board/Connect4Board.vue";
import TicTacToeBoard from "../tic-tac-toe-board/TicTacToeBoard.vue";
import {
  CONNECT_4_DIMENSIONS,
  GAMES,
  MIN_VICTORIES_TO_WIN_CONNECT_4,
  MOVES,
  PLAYERS,
  TIC_TAC_TOE_DIMENSIONS,
  TOTAL_ROUNDS,
} from "@/utils/game-metadata";
import { getVictoriesPerPlayer } from "@/utils/game-utils";
import {
  checkTicTacToeLeftDiagonal,
  checkTicTacToeRightDiagonal,
  checkTicTacToeHorizontal,
  checkTicTacToeVertical,
} from "@/utils/tic-tac-toe-utils";
import {
  checkConnect4LeftDiagonal,
  checkConnect4RightDiagonal,
  checkConnect4Horizontal,
  checkConnect4Vertical,
} from "@/utils/connect-4-utils";

export default defineComponent({
  name: "GamePlayground",
  components: {
    Connect4Board,
    Player,
    TicTacToeBoard,
    Timer,
  },
  emits: ["update-rounds"],
  data() {
    return {
      currentPlayer: null,
      currentRound: 1,
      isGameStarted: false,
      roundsHistory: [],
      moves: [],
      movesCount: 0,
      boardDimensions: TIC_TAC_TOE_DIMENSIONS[0].value,
      selectedGame: GAMES[0],
      roundWinner: null,
      gameWinner: null,
      GAMES,
      PLAYERS,
      TOTAL_ROUNDS,
      TIC_TAC_TOE_DIMENSIONS,
    };
  },
  computed: {
    boardComponent() {
      return this.selectedGame === GAMES[0] ? TicTacToeBoard : Connect4Board;
    },
    cssGridProps() {
      return {
        "--grid-columns-rows": this.boardDimensions,
      };
    },
    minNumberMovesToHaveWinner() {
      return this.selectedGame === GAMES[0]
        ? this.boardDimensions * 2 - 1
        : MIN_VICTORIES_TO_WIN_CONNECT_4;
    },
  },
  methods: {
    handleGameSelection(game) {
      this.selectedGame = game;
      this.resetRound();
      this.setMoves();
    },
    handleMove(cellIndex) {
      !this.isGameStarted && this.startGame();
      this.$refs.timer.startTimer();
      this.movesCount++;
      const { row, column } =
        this.selectedGame === GAMES[0]
          ? this.getTicTacToeMoveCoords(cellIndex)
          : this.getConnect4MoveCoords(cellIndex);
      this.moves[row][column] = { ...MOVES[this.currentPlayer.moveId] };
      this.shiftPlayer();
      this.checkRoundWinner();
    },
    getTicTacToeMoveCoords(cellIndex) {
      const row = Math.floor(cellIndex / this.boardDimensions);
      const column = Math.floor(cellIndex % this.boardDimensions);
      return { row, column };
    },
    getConnect4MoveCoords(cellIndex) {
      const column = Math.floor(cellIndex % CONNECT_4_DIMENSIONS.columns);
      for (let rowIndex = this.moves.length - 1; rowIndex >= 0; rowIndex--) {
        if (!Object.keys(this.moves[rowIndex][column]).length) {
          return { row: rowIndex, column };
        }
      }
    },
    startGame() {
      this.isGameStarted = true;
      this.currentPlayer = PLAYERS.player1;
      this.$refs.timer.startTimer();
    },
    shiftPlayer() {
      this.currentPlayer =
        this.currentPlayer.name === PLAYERS.player1.name
          ? PLAYERS.player2
          : PLAYERS.player1;
    },
    setMoves() {
      const rows =
        this.selectedGame === GAMES[0]
          ? this.boardDimensions
          : CONNECT_4_DIMENSIONS.rows;
      const columns =
        this.selectedGame === GAMES[0]
          ? this.boardDimensions
          : CONNECT_4_DIMENSIONS.columns;
      this.moves = new Array(rows).fill({}).map(() => Array(columns).fill({}));
    },
    checkRoundWinner() {
      this.selectedGame === GAMES[0]
        ? this.getTicTacToeRoundWinner()
        : this.getConnect4RoundWinner();
    },
    checkGameWinner() {
      const minVictoriesToWin = Math.ceil(TOTAL_ROUNDS / 2);
      if (this.currentRound < minVictoriesToWin) {
        return this.currentRound++;
      }

      const { player1: player1Victories, player2: player2Victories } =
        getVictoriesPerPlayer(this.roundsHistory);

      if (player1Victories >= minVictoriesToWin) {
        return this.handleGameWin(PLAYERS.player1);
      }

      if (player2Victories >= minVictoriesToWin) {
        return this.handleGameWin(PLAYERS.player2);
      }

      if (
        this.currentRound === TOTAL_ROUNDS &&
        player1Victories === player2Victories
      ) {
        return this.handleGameWin("draw");
      }

      if (this.currentRound === TOTAL_ROUNDS) {
        return this.handleGameWin(
          player1Victories > player2Victories
            ? PLAYERS.player1
            : PLAYERS.player2
        );
      }

      this.currentRound++;
    },
    getTicTacToeRoundWinner() {
      if (this.movesCount < this.minNumberMovesToHaveWinner) {
        return;
      }
      const winner =
        checkTicTacToeLeftDiagonal(this.moves) ||
        checkTicTacToeRightDiagonal(this.moves) ||
        checkTicTacToeHorizontal(this.moves) ||
        checkTicTacToeVertical(this.moves);

      if (winner) {
        return this.handleRoundWin(winner);
      }

      if (this.movesCount === this.boardDimensions ** 2) {
        return this.handleRoundWin("draw");
      }
    },
    getConnect4RoundWinner() {
      if (this.movesCount < this.minNumberMovesToHaveWinner) {
        return;
      }
      const winner =
        checkConnect4LeftDiagonal(this.moves) ||
        checkConnect4RightDiagonal(this.moves) ||
        checkConnect4Horizontal(this.moves) ||
        checkConnect4Vertical(this.moves);

      if (winner) {
        return this.handleRoundWin(winner);
      }

      if (
        this.movesCount ===
        CONNECT_4_DIMENSIONS.columns * CONNECT_4_DIMENSIONS.rows
      ) {
        return this.handleRoundWin("draw");
      }
    },
    scrollToStatistics() {
      document.getElementById("game-statistics").scrollIntoView({
        block: "end",
        inline: "nearest",
        behavior: "smooth",
      });
    },
    handleRoundWin(winner) {
      this.currentPlayer = null;
      this.$refs.timer.pauseTimer();
      this.roundWinner = winner;
      const roundSummary = {
        winner: this.roundWinner.id,
        roundTime: this.$refs.timer.currentTime,
      };

      this.roundsHistory = [...this.roundsHistory, roundSummary];
      this.$emit("update-rounds", this.roundsHistory);
      setTimeout(() => {
        this.resetRound();
        this.checkGameWinner();
      }, 2500);
    },
    handleGameWin(winner) {
      this.gameWinner = winner;
      setTimeout(() => {
        this.scrollToStatistics();
      }, 2500);
    },
    resetRound() {
      if (!this.isGameStarted) {
        return;
      }
      this.isGameStarted = false;
      this.currentPlayer = null;
      this.movesCount = 0;
      this.roundWinner = null;
      this.$refs.timer.resetTimer();
      this.setMoves();
    },
    resetGame() {
      this.resetRound();
      this.gameWinner = null;
      this.currentRound = 1;
      this.roundsHistory = [];
      this.$emit("update-rounds", this.roundsHistory);
    },
  },
  watch: {
    boardDimensions: function () {
      this.setMoves();
    },
  },
  mounted() {
    this.setMoves();
  },
});
