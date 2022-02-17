<template>
  <div
    :class="[displayMenuMobile ? 'flex' : 'hidden']"
    class="flex-col fixed px-4 bg-black z-20"
  >
    <div class="flex">
      <button class="ml-auto">
        <img
          @click="handleExitButton"
          src="@/assets/images/exit-icon.svg"
          alt="exit icon"
        />
      </button>
    </div>
    <ul class="flex flex-col space-y-5">
      <MenuMobileItem to="my-projects">My projects</MenuMobileItem>
      <MenuMobileItem to="about-me">About Me</MenuMobileItem>
    </ul>
  </div>
</template>

<script>
import MenuMobileItem from "@/components/MenuMobileItem";

export default {
  name: "MenuMobile",
  components: {
    MenuMobileItem,
  },
  props: {
    displayMenuMobile: Boolean,
  },
  methods: {
    hideMenu() {
      this.$emit("hide-menu");
    },
    handleExitButton() {
      this.hideMenu();
    },
  },
};
</script>
