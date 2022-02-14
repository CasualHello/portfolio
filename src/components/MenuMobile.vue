<template>
  <div :class="[displayMenuMobile ? 'flex' : 'hidden']">
    <div>
      <button>
        <img src="@/assets/images/exit-icon.svg" alt="exit icon" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuMobile",
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
