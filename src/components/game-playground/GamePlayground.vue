<template>
  <section class="game-playground">
    <h2 class="game-playground__title">Fun Games</h2>
    <div class="game-playground__selectors">
      <button
        v-for="game in GAMES"
        :key="`${game}-selector`"
        class="game-playground__button"
        :class="{
          'game-playground__button--selected': game === selectedGame,
          'game-playground__button--no-selected': game !== selectedGame,
        }"
        :aria-label="`Click to select ${game} game.`"
        @click="handleGameSelection(game)"
        @keydown.enter="handleGameSelection(game)"
      >
        {{ game }}
      </button>
    </div>
    <div class="game-playground__game">
      <div v-if="roundWinner || gameWinner" class="game-playground__winner">
        {{
          roundWinner === "draw" || gameWinner === "draw"
            ? "It's a draw!"
            : `${roundWinner?.name || gameWinner?.name} won ${
                gameWinner ? "the game" : ""
              }!`
        }}
      </div>
      <Player
        class="game-playground__player--desktop"
        :playerInfo="PLAYERS.player1"
        :isCurrentPlayer="PLAYERS.player1.name === currentPlayer?.name"
        :isWinner="PLAYERS.player1.name === roundWinner?.name"
      />
      <div>
        <div class="game-playground__settings">
          <select
            v-if="selectedGame === GAMES[0]"
            class="game-playground__select"
            :class="{ 'game-playground__select--disabled': isGameStarted }"
            name="game-board-dimension-picker"
            v-model="boardDimensions"
            aria-label="Select board dimensions."
            :disabled="isGameStarted"
          >
            <option
              v-for="option in TIC_TAC_TOE_DIMENSIONS"
              :key="`${option.label}-dimension`"
              :value="option.value"
            >
              {{ option.label }}
            </option>
          </select>
          <button
            class="game-playground__button game-playground__button--reset"
            :aria-label="`Click to ${
              gameWinner ? 'play again' : 'reset current game round'
            }.`"
            :disabled="roundWinner"
            @click="gameWinner ? resetGame() : resetRound()"
            @keydown.enter="gameWinner ? resetGame() : resetRound()"
          >
            {{ gameWinner ? "play again" : "reset" }}
          </button>
        </div>
        <component
          :is="boardComponent"
          :moves="moves.flat()"
          :style="cssGridProps"
          :disabled="!!roundWinner || !!gameWinner"
          @play="handleMove"
        />
      </div>
      <Player
        class="game-playground__player--desktop"
        :playerInfo="PLAYERS.player2"
        :isCurrentPlayer="PLAYERS.player2.name === currentPlayer?.name"
        :isWinner="PLAYERS.player2.name === roundWinner?.name"
      />
    </div>
    <div class="game-playground__info">
      <Player
        class="game-playground__player"
        :playerInfo="PLAYERS.player1"
        :isCurrentPlayer="PLAYERS.player1.name === currentPlayer?.name"
        :isWinner="PLAYERS.player1.name === roundWinner?.name"
      />
      <div class="game-playground__round-info">
        <span v-show="currentRound"> Round {{ currentRound }} </span>
        <Timer class="game-playground__timer" ref="timer" />
      </div>
      <Player
        class="game-playground__player"
        :playerInfo="PLAYERS.player2"
        :isCurrentPlayer="PLAYERS.player2.name === currentPlayer?.name"
        :isWinner="PLAYERS.player2.name === roundWinner?.name"
      />
    </div>
  </section>
</template>

<script src="./GamePlayground.js"></script>

<style scoped lang="scss" src="./GamePlayground.scss"></style>
