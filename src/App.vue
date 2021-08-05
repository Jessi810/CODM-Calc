<template>
  <!-- <Navbar /> -->
  <div id="nav">
    <router-link :to="{ name: 'Cheatsheet' }">Cheatsheet</router-link> | 
    <router-link :to="{ name: 'STTK' }">STK & TTK</router-link>
  </div>
  <router-view/>
</template>

<script>
// import Navbar from '@/components/Navbar.vue'
// export default {
//   components: {
//     Navbar
//   }
// }
</script>

<style>
#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
