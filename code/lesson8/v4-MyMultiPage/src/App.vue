<template>
  <h1>My awesome page</h1>
  <ul>
    <!-- <li><a href="/">Homepage</a></li>
    <li><a href="/about">About us</a></li>
    <li><a href="/gallery">Gallery</a></li>
    <li><a href="/contacts">Contacts</a></li> -->
    <li><RouterLink to="/">Homepage</RouterLink></li>
    <li><RouterLink to="/about">About us</RouterLink></li>
    <li><RouterLink to="/gallery">Gallery</RouterLink></li>
    <li><RouterLink to="/contacts">Contacts</RouterLink></li>
    <li><a href="https://google.com" target="_blank">Google</a></li>
    <li><RouterLink to="/pokemon">Pokemon</RouterLink></li>
  </ul>

  <RouterView />
  
</template>

<style scoped>
  h1 {
    color: green;
  }

  ul {
    padding: 20px 0;
    display: flex;
    list-style: none;
    gap: 40px;
  }

  a {
    color: goldenrod;
  }

  
</style>