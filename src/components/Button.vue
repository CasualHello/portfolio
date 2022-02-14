<template>
  <div>
    <button
      class="border-white border-2 p-3 transform -skew-y-6 transition duration-300 hover:scale-110 hover:text-transparent hover:bg-gradient-to-r hover:from-yellow-500 hover:to-pink-500 hover:bg-clip-text"
    >
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  name: "Button",
};
</script>
