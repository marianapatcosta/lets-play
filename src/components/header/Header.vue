<template>
  <header class="header" :class="{ 'header--on-top': isOnTop }">
    <img
      class="header__logo"
      :src="isOnTop ? SwordHealthLogoWhite : SwordHealthLogo"
      alt="Sword Health logo"
    />
    <div class="header__title">
      <div class="header__title--bold">Frontend developer</div>
      <div class="header__title--italic">Challenge</div>
    </div>
  </header>
</template>

<script src="./Header.js"></script>

<style scoped lang="scss" src="./Header.scss"></style>
