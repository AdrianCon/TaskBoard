<template>
  <div class="status-button-container">
    <div
      class="status-button"
      v-for="status in statusOptions"
      :style="{border: selectedStatus == status.id ? '2px solid var(--blue)' : ''}"
      @click="handleSelectedStatus(status.id)"
    >
        <IconBox :style="{backgroundColor: getStatusBackgroundColor(status.id), border: 'none'}">
          <img :src="getStatusImg(status.id)" style="height: 20px; width: 20px; align-self: center">
        </IconBox>
        <p>{{ status.name }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getStatusBackgroundColor, getStatusImg } from '../utils';
import IconBox from './IconBox.vue';

const props = defineProps({
  selectedStatus: {
    type: Number,
    default: 2,
  }
});

const emit = defineEmits(["selected-status"]);

const statusOptions = [
  { id: 2, name: "In Progress", },
  { id: 1, name: "Completed" },
  { id: 3, name: "Won't do" },
];

const handleSelectedStatus = (status: number) => {
  emit("selected-status", status);
};
</script>

<style scoped>
.status-button-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  border-radius: var(--light-gray);
  gap: 15px;
  width: 100%;
}
.status-button{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding: 2.5px;
  border: 2px solid var(--light-gray);
  border-radius: 10px;
  cursor: pointer;
  width: 45%;
}
</style>