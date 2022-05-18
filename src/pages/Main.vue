<script>
import CryptoCard from "../components/CryptoCard.vue"
import getBitcoin from "../providers/bitcoin.js"
import getEthereum from "../providers/ethereum.js"
import getDacxi from "../providers/dacxi.js"
import getTerraLuna from "../providers/luna.js"
import getCosmos from "../providers/atom.js"

export default {
  data() {
    return {
      coins: [],
      input_data: "",
      names: ["luiz", "prima", "vagaba"],
    }
  },
  components: {
    CryptoCard,
  },
  methods: {
    changeClass() {
      if (this.oldPrice < this.price) this.pClass = "up"
      else if (this.oldPrice > this.price) {
        this.pClass = "down"
      }

      return setTimeout(() => (this.pClass = "fixed"), 1000)
    },
    async getCoins() {
      const bitcoin = await getBitcoin()
      const ethereum = await getEthereum()
      const dacxi = await getDacxi()
      const luna = await getTerraLuna()
      const atom = await getCosmos()

      const coinsList = [
        {
          coinName: bitcoin.name,
          price: bitcoin.market_data.current_price.usd,
          imgSrc: bitcoin.image.small,
          marketCap: bitcoin.market_data.market_cap.usd,
        },
        {
          coinName: ethereum.name,
          price: ethereum.market_data.current_price.usd,
          imgSrc: ethereum.image.small,
          marketCap: ethereum.market_data.market_cap.usd,
        },
        {
          coinName: dacxi.name,
          price: dacxi.market_data.current_price.usd,
          imgSrc: dacxi.image.small,
          marketCap: dacxi.market_data.market_cap.usd,
        },
        {
          coinName: luna.name,
          price: luna.market_data.current_price.usd,
          imgSrc: luna.image.small,
          marketCap: luna.market_data.market_cap.usd,
        },
        {
          coinName: atom.name,
          price: atom.market_data.current_price.usd,
          imgSrc: atom.image.small,
          marketCap: atom.market_data.market_cap.usd,
        },
      ]
      return coinsList
    },
  },
  async created() {
    this.coins = await this.getCoins()
  },
  async mounted() {
    setInterval(async () => {
      this.coins = await this.getCoins()
    }, 110000)
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
    <section v-for="(coin, index) in coins" :key="index">
      <CryptoCard :coin="coin" />
    </section>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.guide {
  padding: 0px 4%;
  width: 83%;
  height: 40px;
  margin: 25px 0px 15px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: var(--blue);
  color: var(--white);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(6.5px);
  -webkit-backdrop-filter: blur(6.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.market-c {
  display: none;
}

section {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

@media (min-width: 768px) {
  .market-c {
    display: block;
  }

  .guide {
    font-size: 18px;
  }
}
</style>
