<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Rufina:wght@400;700&family=Volkhov&family=Zilla+Slab:wght@300&display=swap');
// font-family: 'Rufina', serif;
//font-family: 'Volkhov', serif;
//font-family: 'Zilla Slab', serif;
@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
// font-family: 'Raleway';
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap'); ///font-family: 'Roboto', sans-serif;
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto&display=swap');///font-family: 'Open Sans', sans-serif;   font-family: 'Roboto', sans-serif;
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
body{
  margin: 0;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
