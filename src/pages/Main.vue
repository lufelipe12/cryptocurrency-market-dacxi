<script>
import CryptoCard from "@/components/CryptoCard.vue"
import bitcoin from "../providers/bitcoin.js"
import ethereum from "../providers/ethereum.js"

export default {
  data() {
    return {
      currencies: [bitcoin, ethereum],
    }
  },
  components: {
    CryptoCard,
  },
}
</script>

<template>
  <main>
    <div class="guide">
      <p>Name</p>
      <p>Price</p>
      <p class="market-c">Market cap.</p>
    </div>
    <CryptoCard :currencies="currencies" />
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
  padding: 0px 4%;
  width: 83%;
  height: 40px;
  border-radius: 2px;
  margin: 25px 0px 15px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: var(--white);
}

.market-c {
  display: none;
}

@media (min-width: 768px) {
  .market-c {
    display: block;
  }
}
</style>
