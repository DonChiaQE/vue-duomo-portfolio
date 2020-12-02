<template>
  <div id="app">
    <!--div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div-->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.text-universal {
  color: #2c3e50;
}

html,
body {
    height: 100%;
    background: #F6F5F1;
    background-size: 40px 40px;
    background-image: radial-gradient(circle, #433E40 1px, rgba(0, 0, 0, 0) 1px);
}

#typed2 {
  color: #433E40 !important; 
  opacity: 100%;
  font-size: 38px;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #433E40;
}

.bg-beige {
  background: #F6F5F1;
}

.router-link {
  text-decoration: transparent !important;
}
</style>
