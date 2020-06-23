<template>
  <div class="container">
    <div>
      <h1 class="title">{{country.name}}</h1>
      <h2 class="subtitle">
        Hovedstaden er {{country.capital}}
        Populasjonen er {{country.population}}
      </h2>
      <nuxt-link to="/">Om oss</nuxt-link>
    </div>
  </div>
</template>

<script>

import Logo from '~/components/Logo.vue'
export default {
  validate(data){
    //tester id parameter
    return /^\d+$/.test(data.params.id)
  },
  components: {
    Logo
  } 
 /*  asyncData(context, callback){
    setTimeout(() =>{
      callback(null, {
        country:{
          {name: "Afghanistan", 
          capital: "Kabul", 
          population: 25500100 
          }
        });
      }
    },1000);
  } */
}
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
</style>
