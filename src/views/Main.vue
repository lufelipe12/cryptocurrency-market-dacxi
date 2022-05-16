<script>
import CryptoCard from "@/components/CryptoCard.vue"

export default {
  components: {
    CryptoCard,
  },
}
</script>

<template>
  <main>
    <h1>Main page</h1>
    <div class="guide">
      <p>Name</p>
      <p>Price</p>
      <p class="market-c">Market cap.</p>
    </div>
    <CryptoCard />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
}

.guide {
  background-color: var(--blue);
  width: 90%;
  height: 40px;
  border-radius: 2px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: var(--white);
}

.market-c {
  display: none;
}
</style>
