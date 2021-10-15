<template>
  <div class="timer">
    <time
      :datetime="formattedTime"
      class="timer__time"
      :class="{ 'timer__time--bigger': !isControlled }"
    >
      {{ formattedTime }}
    </time>
    <button
      v-if="isControlled"
      class="timer__button"
      :aria-label="`Click to ${isTimerOn ? 'pause' : 'play'} game timer.`"
      @click="handleTimerManagement"
      @keydown.enter="handleTimerManagement"
    >
      <img
        :src="isTimerOn ? Pause : Play"
        :alt="`${isTimerOn ? 'pause' : 'play'} icon`"
      />
    </button>
  </div>
</template>

<script src="./Timer.js"></script>

<style scoped lang="scss" src="./Timer.scss"></style>
