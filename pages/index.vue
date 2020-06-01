<template>
  <div>
    <header class="header-fixed">
      <div class="header-limiter">
        <h1>
          <a href="#">
            Company
            <span>logo</span>
          </a>
        </h1>

        <nav>
          <a href="/">Home</a>
          <a href="#" class="selected">Blog</a>
          <a href="#">Pricing</a>
          <nuxt-link to="/about">Om oss</nuxt-link>
          <a href="#">Faq</a>
          <a href="#">Contact</a>
        </nav>
      </div>
    </header>
    <div class="container">
      <div>
        <h1 class="title">Carls plant shit</h1>
        <h2 class="subtitle">Find my plants</h2>
        
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  }
};
</script>

<style>
body {
  background-color: #d6ffb7;
}
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
.header-fixed {
  background-color: #939F5C;
  box-shadow: 0 1px 1px #ccc;
  padding: 20px 40px;
  height: 80px;
  color: #ffffff;
  box-sizing: border-box;
  top: -100px;

  -webkit-transition: top 0.3s;
  transition: top 0.3s;
}

.header-fixed .header-limiter {
  max-width: 1200px;
  text-align: center;
  margin: 0 auto;
}

/*	The header placeholder. It is displayed when the header is fixed to the top of the
	browser window, in order to prevent the content of the page from jumping up. */

.header-fixed-placeholder {
  height: 80px;
  display: none;
}

/* Logo */

.header-fixed .header-limiter h1 {
  float: left;
  font: normal 28px Cookie, Arial, Helvetica, sans-serif;
  line-height: 40px;
  margin: 0;
}

.header-fixed .header-limiter h1 span {
  color: #5383d3;
}

/* The navigation links */

.header-fixed .header-limiter a {
  color: black;
  text-decoration: none;
}

.header-fixed .header-limiter nav {
  font: 16px Arial, Helvetica, sans-serif;
  line-height: 40px;
  float: right;
}

.header-fixed .header-limiter nav a {
  display: inline-block;
  padding: 0 5px;
  text-decoration: none;
  color: black;
  opacity: 0.9;
}

.header-fixed .header-limiter nav a:hover {
  opacity: 1;
}

.header-fixed .header-limiter nav a.selected {
  color: #608bd2;
  pointer-events: none;
  opacity: 1;
}

/* Fixed version of the header */

body.fixed .header-fixed {
  padding: 10px 40px;
  height: 50px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
}

body.fixed .header-fixed-placeholder {
  display: block;
}

body.fixed .header-fixed .header-limiter h1 {
  font-size: 24px;
  line-height: 30px;
}

body.fixed .header-fixed .header-limiter nav {
  line-height: 28px;
  font-size: 13px;
}

/* Making the header responsive */

@media all and (max-width: 600px) {
  .header-fixed {
    padding: 20px 0;
    height: 75px;
  }

  .header-fixed .header-limiter h1 {
    float: none;
    margin: -8px 0 10px;
    text-align: center;
    font-size: 24px;
    line-height: 1;
  }

  .header-fixed .header-limiter nav {
    line-height: 1;
    float: none;
  }

  .header-fixed .header-limiter nav a {
    font-size: 13px;
  }

  body.fixed .header-fixed {
    display: none;
  }
}

/*
	 We are clearing the body's margin and padding, so that the header fits properly.
	 We are also adding a height to demonstrate the scrolling behavior. You can remove
	 these styles.
 */

body {
  margin: 0;
  padding: 0;
  height: 1500px;
}
</style>
