<template>
  <div class="border-white border-t-4 border-b-4 px-2 flex">
    <router-link to="/main-page">
      <img
        src="@/assets/images/logo.svg"
        alt="logo"
        class="py-4 cursor-pointer"
      />
    </router-link>

    <button class="ml-auto" @click="handleMenuIcon">
      <img src="@/assets/images/menu-icon.svg" alt="menu icon" />
    </button>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    handleMenuIcon() {
      this.$emit("display-mobile-menu");
    },
  },
};
</script>
