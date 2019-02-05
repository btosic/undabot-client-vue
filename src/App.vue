<template>
  <div id="app">
    <nav>
      <div class="container">
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/contact">Contact Us</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "styles/normalize.css";
@import "styles/skeleton.css";
</style>
<style lang="scss" src="./App.scss"></style>
