<script>
import api from "../services/index.js"

export default {
  name: "CryptoCard",
  data() {
    return {
      input_data: "",
      id: 0,
      past: false,
    }
  },

  props: {
    coin: Object,
    index: Number,
  },

  methods: {
    changeClass() {
      if (this.oldPrice < this.price) this.pClass = "up"
      else if (this.oldPrice > this.price) {
        this.pClass = "down"
      }

      return setTimeout(() => (this.pClass = "fixed"), 1000)
    },

    async getPastPrice() {
      const treatedData = this.input_data.split("-").reverse().join("-")
      const coinId = this.coin.id

      const pastData = await api
        .get(`/coins/${coinId}/history?date=${treatedData}`)
        .then((res) => res.data)
        .catch((error) => console.log(error))

      this.coin.price = pastData.market_data.current_price.usd
      this.coin.marketCap = pastData.market_data.market_cap.usd
      this.past = true
    },
  },
}
</script>

<template>
  <div class="card">
    <img class="coin-image" alt="coin-image" :src="coin.imgSrc" />
    <p>{{ coin.coinName }}</p>
    <div class="price-div">
      <span class="past" v-if="past === true">OUTDATED PRICE</span>
      <span>{{ `$ ${coin.price.toFixed(5)}` }}</span>
    </div>
    <div class="price-div" id="coin-mc">
      <span class="past" v-if="past === true">OUTDATED MARKET CAP</span>
      <span> {{ `$ ${coin.marketCap.toFixed(1)}` }}</span>
    </div>
    <input
      type="date"
      v-model="input_data"
      :id="index"
      v-on:change="getPastPrice"
    />
  </div>
</template>

<style>
@import "@/assets/base.css";
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
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.card:hover {
  transition: 1s;
  opacity: 80%;
}

.coin-image {
  width: 50px;
  height: 50px;
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
  color: var(--down);
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

.date {
  width: 40px;
  height: 40px;
}

.date:hover {
  cursor: pointer;
}

input {
  width: 17px;
  background-color: var(--light-purple);
  border: none;
}

input:focus {
  box-shadow: 0 0 0 0;
  outline: 0;
}

@media (min-width: 768px) {
  #coin-mc {
    display: flex;
  }
  .card {
    font-size: 22px;
  }
}
</style>
