<template>
  <div class="game-history">
    <h3 class="game-history__subtitle">Game history</h3>
    <div class="game-history__content">
      <div
        class="game-history__round-winner"
        v-for="(round, index) in TOTAL_ROUNDS"
        :key="`round-${index + 1}-winner`"
      >
        <Player
          v-if="playedRounds > index && roundsHistory[index]?.winner"
          :playerInfo="PLAYERS[roundsHistory[index].winner]"
          :isSmall="true"
        />
        <div v-else-if="playedRounds > index" class="game-history__draw">
          <img :src="User" alt="round draw" />
          <div>draw</div>
        </div>
        <div v-else class="game-history__not-played">?</div>
      </div>
    </div>
  </div>
</template>

<script src="./GameHistory.js"></script>

<style scoped lang="scss" src="./GameHistory.scss"></style>
