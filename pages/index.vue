<template>
  <div>
    <div class="container">
      <div>
        <h1 class="title">Carls plant shit</h1>
        <h2 class="subtitle">Find my plants</h2>
        <ul id="example-1">
          <li v-for="country in getCountries" :key="country.name">{{ country.name }}</li>
          <div>Noe her</div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import Axios from "axios";
import { mapGetters } from 'vuex'


let state = [];
const endpoint = "https://restcountries-v1.p.rapidapi.com/all";
export default {
   computed: {
    ...mapGetters([
      'getCountries',
    ])
  },
  components: {
    Logo
  },
 /*  beforeMount: () => {
    var getData = async url => {
      try {
        let data = await Axios.get(url, {
          headers: {
            "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
            "x-rapidapi-key":
              "b6d30ad204mshda48b7cd0cc5f9ep143885jsn188cc3b94a8c",
            useQueryString: true
          }
        });
        return data;
      } catch (e) {
        console.log(e);
      }
    };

    state = getData(endpoint);
    console.log(state);
  } */
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
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>