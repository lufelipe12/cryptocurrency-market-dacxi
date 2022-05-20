<script>
import "animate.css"

export default {
  name: "Header",
}
</script>

<template>
  <header class="animate__animated animate__backInDown">
    <div class="header-div">
      <img
        class="header-img"
        alt="logo"
        src="./cryptocurrency-market-daxci/assets/images/dacxi.png"
      />
      <p class="header-p">Dacxi Wallet</p>
    </div>
  </header>
</template>

<style>
header {
  width: 100%;
  height: 100px;
  background-image: linear-gradient(
    to right top,
    var(--dark-purple),
    #352956,
    #463761,
    #56466c,
    var(--light-purple)
  );
  display: flex;
  justify-content: center;
  align-items: center;
}

.header-div {
  width: 300px;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.header-img {
  width: 70px;
  height: 70px;
}

.header-p {
  font-size: 33px;
  font-family: "Oleo Script", cursive;
  color: var(--white);
}
</style>
