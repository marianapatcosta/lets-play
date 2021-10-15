<template>
  <div class="board" :class="{ 'board--disabled': disabled }">
    <GameCell
      v-for="(move, index) in moves"
      :key="`move-${index}`"
      :move="move"
      @click="handleMove(index)"
      @keydown.enter="handleMove(index)"
    />
  </div>
</template>

<script src="./TicTacToeBoard.js"></script>

<style scoped lang="scss" src="./TicTacToeBoard.scss"></style>
