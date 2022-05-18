<script>
export default {
  name: "CryptoCard",
  props: {
    coin: Object,
  },
  methods: {
    changeClass() {
      if (this.oldPrice < this.price) this.pClass = "up"
      else if (this.oldPrice > this.price) {
        this.pClass = "down"
      }

      return setTimeout(() => (this.pClass = "fixed"), 1000)
    },
  },
}
</script>

<template>
  <div class="card">
    <img class="coin-image" alt="coin-image" :src="coin.imgSrc" />
    <p>{{ coin.coinName }}</p>
    <span>{{ `$ ${coin.price.toFixed(5)}` }}</span>
    <span id="coin-mc">{{ `$ ${coin.marketCap.toFixed(1)}` }}</span>
    <input type="date" v-model="input_data" />
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
  width: 15px;
  background-color: var(--light-purple);
  border: none;
}

input:hover {
  cursor: pointer;
}

@media (min-width: 768px) {
  #coin-mc {
    display: block;
  }
  .card {
    font-size: 22px;
  }
}
</style>
