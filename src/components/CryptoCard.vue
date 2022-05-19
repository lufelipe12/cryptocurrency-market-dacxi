<script>
import api from "../services/index.js"

import "animate.css"

export default {
  name: "CryptoCard",
  data() {
    return {
      input_data: "",
      past: false,
      changeClass: "fixed",
    }
  },

  props: {
    coin: Object,
    pastCryptos: Object,
    index: Number,
  },

  methods: {
    async getPastPrice() {
      const from = new Date(this.input_data).getTime() / 1000
      /// this interval (10000) was selected to reduce api response
      const to = from + 10000
      const coinId = this.coin.id

      const pastData = await api
        .get(
          `/coins/${coinId}/market_chart/range?vs_currency=usd&from=${from}&to=${to}'`
        )
        .then((res) => res.data)
        .catch((error) => console.log(error))

      if (pastData.prices.length > 0 && pastData.market_caps.length > 0) {
        this.coin.price = pastData.prices[0][1]
        this.coin.marketCap = pastData.market_caps[0][1]
        // alert the user that the price is out of date
        this.past = true
      }

      return setTimeout(() => {
        this.past = false
      }, 5000)
    },
  },

  created() {
    setInterval(() => {
      const cryptoPrice = this.pastCryptos.find(
        (crypto) => crypto.coinName === this.coin.coinName
      ).price
      if (this.coin.price - cryptoPrice > 0) {
        this.changeClass = "up"
      } else if (this.coin.price - cryptoPrice < 0) {
        this.changeClass = "down"
      } else {
        this.changeClass = "fixed"
      }
      setTimeout(() => {
        this.changeClass = "fixed"
      }, 2000)
    }, 20500)
  },
}
</script>

<template>
  <div class="card">
    <img class="coin-image" alt="coin-image" :src="coin.imgSrc" />
    <p>{{ coin.coinName }}</p>
    <div class="price-div">
      <span class="past animate__animated animate__flash" v-if="past === true"
        >OUTDATED PRICE</span
      >
      <span :class="changeClass" id="breathing-text">{{
        `$ ${coin.price.toFixed(5)}`
      }}</span>
    </div>
    <div class="price-div" id="coin-mc">
      <span class="past animate__animated animate__flash" v-if="past === true"
        >OUTDATED MARKET CAP</span
      >
      <span :class="changeClass" id="breathing-text">{{
        `$ ${coin.marketCap.toFixed(1)}`
      }}</span>
    </div>
    <div class="pick-date">
      <input
        type="datetime-local"
        v-model="input_data"
        v-on:change="getPastPrice"
      />
    </div>
  </div>
</template>

<style>
@import "@/assets/global.css";
.card {
  background-color: var(--light-purple);
  color: var(--white);
  width: 87%;
  padding: 0px 2%;
  margin-bottom: 25px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(6.5px);
  -webkit-backdrop-filter: blur(6.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.coin-image {
  width: 40px;
  height: 40px;
}

.price-div {
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.past {
  font-size: 10px;
  font-weight: 700;
  color: var(--outofdate);
}

.fixed {
  color: var(--white);
}

.up {
  color: var(--up);
}

.down {
  color: var(--down);
}

#coin-mc {
  display: none;
}

input {
  background-color: var(--light-purple);
  width: 17px;
  border: none;
}

input:focus {
  box-shadow: 0 0 0 0;
  outline: 0;
}

/* breathing effect */

#breathing-text {
  animation: breathing 3s ease-out infinite normal;
  -webkit-font-smoothing: antialiased;
}

@keyframes breathing {
  0% {
    -webkit-transform: scale(0.96);
    -ms-transform: scale(0.96);
    transform: scale(0.96);
  }

  25% {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }

  60% {
    -webkit-transform: scale(0.96);
    -ms-transform: scale(0.96);
    transform: scale(0.96);
  }

  100% {
    -webkit-transform: scale(0.96);
    -ms-transform: scale(0.96);
    transform: scale(0.96);
  }
}

@media (min-width: 768px) {
  #coin-mc {
    display: flex;
  }
  .card {
    font-size: 22px;
  }

  .coin-image {
    width: 50px;
    height: 50px;
  }
}
</style>
