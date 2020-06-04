<template>
  <div>
    <div class="container">
      <div>
        <h1 class="title">Carls plant shit</h1>
        <h2 class="subtitle">Find my plants</h2>
        <div
          v-for="country in countries"
          :key="country.name"
          :name="country.id"
          :capital="country.capital"
          :population="country.population"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  },
  asyncData(context, callback) {
    console.log('asyncData is executed')
    setTimeout(() => {
     callback(null,{
        countries: [
          { name: "Afghanistan", capital: "Kabul", population: 25500100 },
          { name: "Norge", capital: "Kabul", population: 25500100 },
          { name: "Oslo", capital: "Kabul", population: 25500100 }
        ]
      })
    }, 1500);
  }
};
</script>

<style>

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
