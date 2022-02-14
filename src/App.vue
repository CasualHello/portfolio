<template>
  <div class="bg-black text-white min-h-screen">
    <Navigation />

    <div class="mt-10">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";

export default {
  name: "App",
  components: {
    Navigation,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Space+Mono&display=swap");

#app {
  font-family: "Space Mono", monospace;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}
</style>
