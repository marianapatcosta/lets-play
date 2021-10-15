<template>
  <Header />
  <main>
    <UserProfile />
    <GamePlayground @update-rounds="handleRoundsHistoryUpdate" />
    <Statistics id="game-statistics" :roundsHistory="gameRoundsHistory" />
  </main>
  <Footer @submit="handleFakeSubmission" />
  <div v-if="toastData.length">
    <Toast
      v-for="(toast, index) in toastData"
      :key="`toast-${toast.message}`"
      :type="toast.type"
      :message="toast.message"
      :style="{ top: `${TOAST_OFFSET * index + 2}rem` }"
      @dismiss="handleToastDismiss(index)"
    />
  </div>
</template>
<script src="./App.js"></script>

<style lang="scss" src="./App.scss"></style>
