<template>
  <div class="box">
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  background: {
    type: String,
    default: "",
  },
  selectedBackground: {
    type: String,
    default: "",
  },
});
</script>

<style scoped>
.box {
  height: 40px;
  width: 40px;
  border: 1px solid var(--light-gray);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
