<template>
  <form class="subscription-box" @submit.prevent="handleSubmit">
    <input
      class="subscription-box__input"
      type="email"
      placeholder="Subscribe our games"
      v-model="userEmail"
    />
    <button
      class="subscription-box__button"
      type="submit"
      aria-label="Click to subscribe our games"
    >
      <img :src="Send" alt="send icon" />
    </button>
  </form>
</template>

<script src="./SubscriptionBox.js"></script>

<style scoped lang="scss" src="./SubscriptionBox.scss"></style>
