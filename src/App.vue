<template>
  <div class="bg-black text-white min-h-screen">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <Navbar />

    <div class="mt-10"><router-view /></div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Space+Mono&display=swap");

#app {
  font-family: "Space Mono", monospace;
}
</style>
