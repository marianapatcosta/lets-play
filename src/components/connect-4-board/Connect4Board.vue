<template>
  <div class="board" :class="{ 'board--disabled': disabled }">
    <GameCell
      v-for="(move, index) in moves"
      :key="`move-${index}`"
      :move="move"
      :isCircle="true"
      @click="handleMove(index)"
      @keydown.enter="handleMove(index)"
    />
  </div>
</template>

<script src="./Connect4Board.js"></script>

<style scoped lang="scss" src="./Connect4Board.scss"></style>
