<template>
  <div>
    <Navbar @display-mobile-menu="display" />
    <MenuMobile
      class="hidden"
      @hide-menu="hideMenu"
      :display-menu-mobile="displayMenuMobile"
    />
  </div>
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
    display() {
      this.displayMenu = true;
    },
    hideMenu() {
      this.displayMenu = false;
    },
  },
};
</script>
