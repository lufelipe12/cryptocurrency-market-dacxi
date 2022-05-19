<script>
import CryptoCard from "../components/CryptoCard.vue"
import getBitcoin from "../providers/bitcoin.js"
import getEthereum from "../providers/ethereum.js"
import getDacxi from "../providers/dacxi.js"
import getTerraLuna from "../providers/luna.js"
import getCosmos from "../providers/atom.js"

import "animate.css"

export default {
  data() {
    return {
      coins: [],
      timer: 20,
    }
  },
  components: {
    CryptoCard,
  },
  methods: {
    // isUpOrDown() {
    //   if (this.oldPrice < this.price) this.pClass = "up"
    //   else if (this.oldPrice > this.price) {
    //     this.pClass = "down"
    //   }

    //   return setTimeout(() => (this.pClass = "fixed"), 1000)
    // },

    async getCoins() {
      const bitcoin = await getBitcoin()
      const ethereum = await getEthereum()
      const dacxi = await getDacxi()
      const luna = await getTerraLuna()
      const atom = await getCosmos()

      const data = [bitcoin, ethereum, dacxi, luna, atom]

      const coinsList = data.map((coin) => {
        return {
          id: coin.id,
          imgSrc: coin.image.small,
          coinName: coin.name,
          price: coin.market_data.current_price.usd,
          marketCap: coin.market_data.market_cap.usd,
        }
      })
      return coinsList
    },
  },

  async created() {
    this.coins = await this.getCoins()
  },

  async mounted() {
    // here was set an interval of 20 seconds to page update
    setInterval(async () => {
      this.coins = await this.getCoins()
    }, 20000)
  },
}
</script>

<template>
  <main>
    <div class="guide animate__animated animate__backInDown">
      <p>Name</p>
      <p>Price</p>
      <p class="market-c">Market Cap</p>
    </div>

    <!-- loading symbol -->
    <div class="" v-if="coins.length !== 5">
      <div class="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <section v-for="(coin, index) in coins" :key="index">
      <CryptoCard
        :coin="coin"
        :index="index"
        class="animate__animated animate__fadeInUp"
      />
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

/* animation on load screen */

.lds-roller {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-roller div {
  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 40px 40px;
}
.lds-roller div:after {
  content: " ";
  display: block;
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #fff;
  margin: -4px 0 0 -4px;
}
.lds-roller div:nth-child(1) {
  animation-delay: -0.036s;
}
.lds-roller div:nth-child(1):after {
  top: 63px;
  left: 63px;
}
.lds-roller div:nth-child(2) {
  animation-delay: -0.072s;
}
.lds-roller div:nth-child(2):after {
  top: 68px;
  left: 56px;
}
.lds-roller div:nth-child(3) {
  animation-delay: -0.108s;
}
.lds-roller div:nth-child(3):after {
  top: 71px;
  left: 48px;
}
.lds-roller div:nth-child(4) {
  animation-delay: -0.144s;
}
.lds-roller div:nth-child(4):after {
  top: 72px;
  left: 40px;
}
.lds-roller div:nth-child(5) {
  animation-delay: -0.18s;
}
.lds-roller div:nth-child(5):after {
  top: 71px;
  left: 32px;
}
.lds-roller div:nth-child(6) {
  animation-delay: -0.216s;
}
.lds-roller div:nth-child(6):after {
  top: 68px;
  left: 24px;
}
.lds-roller div:nth-child(7) {
  animation-delay: -0.252s;
}
.lds-roller div:nth-child(7):after {
  top: 63px;
  left: 17px;
}
.lds-roller div:nth-child(8) {
  animation-delay: -0.288s;
}
.lds-roller div:nth-child(8):after {
  top: 56px;
  left: 12px;
}
@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
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
