<template>
  <div class="text-white px-6">
    <p class="text-3xl tracking-wider leading-10 mb-10">
      Hey, my name is
      <span
        class="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-pink-600"
        >Maria Halkiewicz</span
      >. I’m freelancer how makes websites.
    </p>
    <router-link to="/my-projects">
      <Button> My projects </Button>
    </router-link>

    <div class="flex justify-center">
      <img
        src="@/assets/images/neon-balls-blue.svg"
        alt="neon blue and green balls"
        class="w-40 rotate"
      />

      <img
        src="@/assets/images/neon-balls-pink.svg"
        alt="neon pink and purple balls"
        class="w-48 rotate"
      />
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  name: "Home",
  components: {
    Button,
  },
};
</script>

<style scoped>
.rotate {
  animation: rotateAnimation 20s linear infinite;
}

@keyframes rotateAnimation {
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(360deg);
  }
}
</style>
