<script>
import show from "../views/Main.vue"
export default {
  name: "CryptoCard",
  data() {
    return {
      src: "",
      name: "Bitcoin",
      price: 1000.0,
      marketCap: 200000000.0,
      oldPrice: this.price, // alterar o newPrice com o preço novo
      pClass: "normal",
    }
  },
  methods: {
    changeClass() {
      if (this.oldPrice < this.price) this.pClass = "up"
      else if (this.oldPrice > this.price) {
        this.pClass = "down"
      }

      return setTimeout(() => (this.pClass = "fixed"), 1000)
    },
    props: ["openModal"],
  },
}
</script>

<template>
  <div class="card">
    <img class="coin-image" alt="coin-image" src="@/assets/images/dacxi.png" />
    <p v-bind:class="pClass">{{ name }}</p>
    <span v-bind:class="pClass">{{ `$ ${price.toFixed(1)}` }}</span>
    <span v-bind:class="pClass" id="coin-mc">{{
      `$ ${marketCap.toFixed(1)}`
    }}</span>
    <img
      class="date"
      alt="date"
      src="@/assets/images/date.png"
      @click="openModal"
    />
  </div>
</template>

<style>
@import "@/assets/base.css";
.card {
  background-color: var(--light-purple);
  opacity: 80%;
  width: 87%;
  padding: 0px 2%;
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

@media (min-width: 768px) {
  #coin-mc {
    display: block;
  }
}
</style>
