<template>
  <div class="player">
    <img
      class="player__icon"
      :class="{
        'player__icon--playing': isCurrentPlayer,
        'player__icon--winner': isWinner,
        'player__icon--small': isSmall,
      }"
      :src="playerInfo.icon"
      :alt="`${playerInfo.name} icon`"
    />
    <div
      class="player__name"
      :class="{
        'player__name--small': isSmall,
      }"
      :style="{ color: playerInfo.playerColor }"
    >
      {{ isSmall ? getSmallName(playerInfo.name) : playerInfo.name }}
    </div>
    <div v-if="isCurrentPlayer" class="player__playing-indicator">
      playing...
    </div>
  </div>
</template>

<script src="./Player.js"></script>

<style scoped lang="scss" src="./Player.scss"></style>
