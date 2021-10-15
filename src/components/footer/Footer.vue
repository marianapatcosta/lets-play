<template>
  <footer class="footer">
    <div class="footer__section">
      <div class="footer__section-title">About page</div>
      <div class="footer__section-text">
        Play tic tac toe or 4-in-a-row anytime!
      </div>
      <div class="footer__section-text">
        {{ new Date().getFullYear() }} - Created by @marianacosta
      </div>
    </div>
    <address class="footer__section">
      <div class="footer__section-title">Contacts</div>
      <div class="footer__section-text">
        {{ contacts.address }}
      </div>
      <div class="footer__section-text">
        {{ contacts.phone }}
      </div>
    </address>
    <address class="footer__section">
      <div class="footer__section-title">Stay in touch</div>
      <a
        class="footer__link"
        :class="{ 'footer__link--disabled': !item.url }"
        v-for="item in contacts.social"
        :key="`${item.name} hyperlink`"
        :aria-label="`Click to ${
          item.name === 'email'
            ? 'send us an email'
            : `check Sword Health's ${item.name} page`
        }`"
        :href="item.url"
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        <img :src="item.icon" :alt="`${item.name} icon`" />
      </a>
      <SubscriptionBox />
    </address>
  </footer>
</template>

<script src="./Footer.js"></script>

<style scoped lang="scss" src="./Footer.scss"></style>
