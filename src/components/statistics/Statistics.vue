<template>
  <section class="statistics">
    <h2 class="statistics__title">Awesome statistics</h2>
    <p>All statistics in on place!</p>
    <div class="statistics__dashboard">
      <GameVictories class="statistics__victories" :stats="stats" />
      <div class="statistics__rounds">
        <div class="statistics__progress">
          <h3 class="statistics__subtitle">Played matches</h3>
          <div class="statistics__progress-bar">
            <div
              v-for="(round, index) in TOTAL_ROUNDS"
              :key="`round-${index + 1}`"
              class="statistics__progress-bar-item"
              :class="{
                'statistics__progress-bar-item--filled': index < playedRounds,
              }"
              role="progressbar"
              aria-label="played rounds"
              :aria-valuemin="0"
              :aria-valuenow="playedRounds"
              :aria-valuemax="TOTAL_ROUNDS"
            />
          </div>
          <p>{{ playedRounds }} of {{ TOTAL_ROUNDS }} matches</p>
        </div>
        <GameHistory :roundsHistory="roundsHistory" />
      </div>
    </div>
    <div>
      <h3 class="statistics__subtitle">Total time</h3>
      <Timer
        class="statistics__timer"
        :time="totalTime"
        :isControlled="false"
      />
    </div>
  </section>
</template>

<script src="./Statistics.js"></script>

<style scoped lang="scss" src="./Statistics.scss"></style>
