<template>
  <div
    class="box"
    @click="handleClick"
    :style='{ backgroundColor: props.selected ? "#f5d565" : ""}'
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

const props = defineProps({
  background: {
    type: String,
    default: "",
  },
  selected: {
    type: Boolean,
    default: false,
  },
  clickable: {
    type: Boolean,
    default: false,
  },
  index: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits(["selected"]);
const handleClick = () => {
  emit("selected", props.index);
};
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
  cursor: pointer;
}
</style>
