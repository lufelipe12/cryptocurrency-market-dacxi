<script>
export default {
  name: "CryptoCard",
  data() {
    return {
      src: "",
      name: "Bitcoin",
      price: "$1000.00",
      marketCap: "$200,000,000.00",
    }
  },
}
</script>

<template>
  <div class="card">
    <img class="coin-image" alt="coin-image" src="@/assets/images/dacxi.png" />
    <p class="coin-p">{{ name }}</p>
    <span class="coin-price">{{ price }}</span>
    <span class="coin-mc">{{ marketCap }}</span>
    <img class="date" alt="coin-image" src="@/assets/images/date.png" />
  </div>
</template>

<style>
.card {
  background-color: var(--light-purple);
  opacity: 80%;
  width: 90%;
  height: 100px;
  color: var(--white);
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 2px;
}

.card:hover {
  transition: 2s;
  opacity: 100%;
}

.coin-image {
  width: 50px;
  height: 50px;
}

.coin-mc {
  display: none;
}

.date {
  width: 40px;
  height: 40px;
}
</style>
