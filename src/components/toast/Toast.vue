<template>
  <div
    class="toast"
    :class="[toastTypeClass, { 'toast--dismiss': autoDismissable }]"
  >
    <button
      class="toast__close"
      aria-label="Click to dismiss toast message"
      @click="handleToastDismiss"
      @keydown.enter="handleToastDismiss"
    >
      <img :src="Close" alt="close icon" />
    </button>
    <div class="toast__content">
      <img class="toast__icon" :src="toastIcon" :alt="`${type} icon`" />
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script src="./Toast.js"></script>

<style scoped lang="scss" src="./Toast.scss"></style>
