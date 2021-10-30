<template>
  <div class="game-victories">
    <h3 class="game-victories__subtitle">Victories and losses (%)</h3>
    <div class="game-victories__percentages">
      <div
        class="game-victories__percentages-per-player"
        v-for="stat in stats"
        :key="`stats-${stat.id}`"
      >
        <div class="game-victories__name" :style="{ color: stat.color }">
          {{ stat.name }}
        </div>
        <div class="game-victories__stats">
          <div>
            <div
              :class="`game-victories__ratio game-victories__ratio--${stat.status}`"
            >
              {{ stat.victories }}%
            </div>
            <div>V</div>
          </div>
          <div>
            <div
              :class="`game-victories__ratio game-victories__ratio--${stat.status}`"
            >
              {{ stat.losses }}%
            </div>
            <div>L</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./GameVictories.js"></script>

<style scoped lang="scss" src="./GameVictories.scss"></style>
