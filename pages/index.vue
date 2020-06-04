<template>
  <div>
    <div class="container">
      <div>
        <h1 class="title">Find a new country</h1>
        <h2 class="subtitle">See every country located on earth</h2>
        <ul class="list-group">
          <li class="list-group-item country" v-for="country in getCountries" :key="country.name">
            <div class="titlecard">{{ country.name }}</div>
            <div class="subtitlecard">
              {{country.name}}'s capital is
              {{ country.capital }}.
            </div>
            <div class="subtitlecard">The population in {{country.name}} is {{ country.population }} people.</div>
            <div class="subtitlecard">It's located in {{ country.subregion }}.</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import Axios from "axios";
import { mapGetters } from "vuex";

let state = [];
const endpoint = "https://restcountries-v1.p.rapidapi.com/all";
export default {
  computed: {
    ...mapGetters(["getCountries"])
  },
  components: {
    Logo
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

.titlecard {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitlecard {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: white;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: white;
  letter-spacing: 1px;
}



.links {
  padding-top: 15px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.country {
  padding: 40px;
  margin: 40px;
}

.wrapper {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
</style>