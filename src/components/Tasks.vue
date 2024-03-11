<script setup lang="ts">
import { reactive } from 'vue';
import { emojis } from '../common/constants';
import IconBox from './IconBox.vue';
import { Task } from '../types';

const emit = defineEmits(["open-dialog-edit"]);

const tasks = reactive([
  {
    createdAt: "2024-03-08T06:06:45.520Z",
    title: "Task in Progress",
    icon: 5,
    description: null,
    status: 2,
    id: "1",
  },
  {
    createdAt: "2024-03-08T06:06:45.520Z",
    title: "Task Completed",
    icon: 3,
    description: null,
    status: 1,
    id: "1",
  },
  {
    createdAt: "2024-03-08T06:06:45.520Z",
    title: "Task Won't Do",
    icon: 2,
    description: null,
    status: 3,
    id: "1",
  },
  {
    createdAt: "2024-03-08T06:06:45.520Z",
    title: "Task To Do",
    icon: 4,
    description:
      "Work on a Challenge on devChallenges.io, learn TypeScript",
    status: null,
    id: "1",
  },
]);

// function getPosts() {
//   fetch("https://65eb83f343ce16418933f74e.mockapi.io/api/v1/tasks")
//     .then((response) => response.json())
//     .then((data) => tasks.push(...data));
// }

function getBackgroundColor(status: number | null) {
  switch (status) {
    case 1:
      return "#a0ecb1"; //Completed
    case 2:
      return "#f5d565"; //In Progress
    case 3:
      return "#f7d4d3"; //Won't Do
    default:
      return "#e3e8ef"; // Default color for unknown status
  }
}

function getStatusBackgroundColor(status: number | null) {
  switch (status) {
    case 1:
      return "#32d657"; //Completed
    case 2:
      return "#e9a23b"; //In Progress
    case 3:
      return "#dd524c"; //Won't Do
    default:
      return "#e3e8ef"; // Default color for unknown status
  }
}

function getStatusImg(status: number | null) {
  switch (status) {
    case 1:
      return "/Done_round_duotone.svg";
    case 2:
      return "/Time_atack_duotone.svg";
    case 3:
      return "/close_ring_duotone.svg";
    default:
      return null;
  }
}

function setDialogOpen(t: Task) {
  console.log("setDialogOpen:", t);
  
  emit("open-dialog-edit", {...t});
}
</script>

<template>
  <div v-for="t in tasks" :key="t.id">
    <div
      class="card"
      :style="{ backgroundColor: getBackgroundColor(t.status) }"
      @click="setDialogOpen(t)"
    >
      <IconBox
        :style="{ backgroundColor:  'var(--white)'}"
      >
        <p>{{ emojis[t.icon] }}</p>
      </IconBox>
      <div class="card-main">
        <p class="task-title">{{ t.title }}</p>
        <p class="description" v-if="t.description">{{ t.description }}👨🏻‍💻</p>
      </div>
      <div
        class="status-detail"
        :style="{ backgroundColor: getStatusBackgroundColor(t.status) }"
      >
        <img
          v-if="getStatusImg(t.status)"
          style="height: 20px; width: 20px; align-self: center"
          :src="getStatusImg(t.status)"
        />
      </div>
    </div>
  </div>
  <div
      class="card"
      :style="{ backgroundColor: 'var(--cream)' }"
      @click="setDialogOpen({} as Task)"
    >
    <IconBox
      :style="{ backgroundColor:  'var(--yellow)'}"
    >
      <img src="/Add_round_duotone.svg" style="height: 20px; width: 20px; align-self: center">
    </IconBox>
      <div class="card-main">
        <p class="task-title">Add new task</p>
      </div>
    </div>
</template>

<style scoped>
.card-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.card {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  cursor: pointer;
}
.card-main {
  display: flex;
  flex-direction: column;
  justify-content: felx-start;
  align-items: flex-start;
  gap: 10px;
}
img {
  width: 40px;
  height: 40px;
  border-radius: 25%;
  align-self: flex-start;
}
.status-detail {
  width: 40px;
  height: 40px;
  border-radius: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
}
</style>
