<template>
  <button>
    <li>
      <router-link :to="to">
        <slot />
      </router-link>
    </li>
  </button>
</template>

<script>
export default {
  name: "MenuMobileItem",
  props: {
    to: String,
  },
};
</script>
