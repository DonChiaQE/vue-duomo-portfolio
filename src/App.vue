<template>
<div id="app">
    <!--div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div-->
    <router-view />
</div>
</template>

<style>
:root {
    --bg-color: #F6F5F1;
    --text-color: #2c3e50;
    --hover-color: #83A9BD;
    --title-color: #2c3e50;
}

@media (prefers-color-scheme: dark) {
    :root {
        /*--bg-color: #4D4D4D;
    --text-color:#F6F5F1;
    --hover-color: #D2E4EE;
    --title-color: #77B9A8;*/
        --bg-color: #405CB1;
        --text-color: #E4EAF6;
        --hover-color: #98AEDD;
        --title-color: #98AEDD;

    }
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--text-color);
}

.title-color {
    color: var(--title-color);
}

a {
    color: var(--text-color) !important;
}

a:hover {
    color: var(--hover-color);
}

hr {
    border-color: var(--text-color) !important;
}

.text-universal {
    color: var(--text-color) !important;
}

.link-color {
    color: var(--text-color);
}

.link-color:hover {
    color: var(--hover-color) !important;
}

html,
body {
    height: 100%;
    background: var(--bg-color);
    background-size: 40px 40px;
    background-image: radial-gradient(circle, #a89ea2 1px, rgba(0, 0, 0, 0) 1px);
}

#typed2 {
    color: var(--text-color) !important;
    opacity: 100%;
    font-size: 38px;
}

#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--text-color);
}

.bg-beige {
    background: var(--bg-color);
}

.router-link {
    text-decoration: transparent !important;
}
</style>
