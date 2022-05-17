<script>
import show from "../views/Main.vue"

export default {
  name: "Modal",

  data() {
    return {
      showModal: show.show,
      oppened: "oppened",
    }
  },

  methods: {
    changeDate() {
      oppened = "closed"
    },

    props: ["closeModal"],
  },
}
</script>

<template>
  <div>
    <form v-on:submit.prevent>
      <h2>Select a date to see the price.</h2>
      <input type="date" />
      <button v-on:click="closeModal">X</button>
    </form>
  </div>
</template>

<style>
.false {
  display: none;
}

.true {
  display: block;
  width: 100px;
  height: 100px;
  background-color: aqua;
}
.false {
  display: none;
}

.true {
  display: block;
}
</style>
