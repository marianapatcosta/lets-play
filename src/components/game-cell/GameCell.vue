<template>
  <button
    class="game-cell"
    :class="{
      'game-cell--circle': isCircle,
      'game-cell--disabled': isDisabled,
    }"
    :style="move?.winner ? { backgroundColor: move.playerColor } : {}"
    :disabled="isDisabled"
  >
    <div
      v-if="isCircle"
      class="game-cell__circle"
      :style="[
        move?.icon ? { backgroundColor: move.playerColor } : {},
        move?.winner ? { backgroundColor: '#FFF' } : {},
      ]"
    />
    <img
      v-else-if="!isCircle && move.icon"
      class="game-cell__icon"
      :src="move?.winner ? move?.winnerIcon : move?.icon"
      :alt="`${move?.playerName} move`"
    />
  </button>
</template>

<script src="./GameCell.js"></script>

<style scoped lang="scss" src="./GameCell.scss"></style>
