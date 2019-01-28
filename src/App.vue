<template>
  <div id="app">
    <app-nav></app-nav>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import appNav from './components/core/appNav'
import appFooter from './components/core/appFooter'

export default {
  components: {
    'app-nav' : appNav,
    'app-footer' : appFooter
  }
}
</script>


<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,800&subset=latin-ext");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: "Montserrat", sans-serif;
}

body {
  overflow-x: hidden;
}

.container {
  margin: 0 auto;
  max-width: 80vw;
}

h1,
h2,
h3 {
  color: #353535;
  margin: 0;
}

h1 {
  font-size: 3.4em;
  line-height: .7em;
}

h2.box-heading {
  font-size: 2.5em;
  line-height: 1em;
}

p {
  font-size: 1em;
  margin: 1em 0;
  line-height: 1.7em;
}

mark {
  background: none;
  color: #00E8FF;
  font-weight: 800;
}

strong {
  color: rgb(158, 61, 44);
}

.cta {
  cursor: pointer;
  display: inline-block;
  font-weight: 800;
  color: white;
  background: #E43E21;
  padding: .75em 1.5em;
  transition: .3s all;

  &:hover {
    background: #00E8FF;
  }
}

// media QQQQQQuery ------------------------------------

@media screen and (min-width: 560px) {
  .container {
    max-width: 75vw;
  }

  h1 {
    font-size: 5em;
  }
}

@media screen and (min-width: 960px) {
  
  .subheader {
    max-width:450px;

  }
}
</style>

