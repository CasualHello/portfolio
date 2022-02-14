<template>
  <div>
    <div>
      <button>
        <img src="@/assets/images/exit-icon.svg" alt="exit icon" />
      </button>
    </div>
    <ul>
      <MenuMobileItem to="my-projects">My projects</MenuMobileItem>
      <MenuMobileItem to="my-projects">About Me</MenuMobileItem>
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
