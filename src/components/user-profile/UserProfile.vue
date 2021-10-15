<template>
  <section class="user-profile">
    <div class="user-profile__summary">
      <div class="user-profile__avatar">
        <img :src="user.avatar" :alt="`${user.name} avatar`" />
      </div>

      <div class="user-profile__details">
        <div class="user-profile__name">{{ user.name }}</div>
        <div>Age: {{ user.age }}</div>
        <div>Location: {{ user.location }}</div>
        <div>Occupation: {{ user.occupation }}</div>
      </div>
    </div>
    <p class="user-profile__about">
      About me: <br />
      {{ user.about }}
    </p>
  </section>
</template>

<script src="./UserProfile.js"></script>

<style scoped lang="scss" src="./UserProfile.scss"></style>
