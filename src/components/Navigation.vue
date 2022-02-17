<template>
  <Navbar @display-mobile-menu="showMenu" />
  <MenuMobile
    @hide-menu="hideMenu"
    :display-menu-mobile="displayMenu"
    class="h-full w-full"
  />
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import MenuMobile from "@/components/MenuMobile.vue";

export default {
  name: "Navigation",
  components: { Navbar, MenuMobile },
  data() {
    return {
      displayMenu: false,
      displayMenuMobile: false,
    };
  },
  methods: {
    showMenu() {
      this.displayMenu = true;
    },
    hideMenu() {
      this.displayMenu = false;
    },
  },
};
</script>
