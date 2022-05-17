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
  opacity: 80%;
  width: 87%;
  padding: 0px 2%;
  margin-bottom: 15px;
  height: 100px;
  color: var(--white);
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 2px;
}

.card:hover {
  transition: 1s;
  opacity: 100%;
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
}
</style>
