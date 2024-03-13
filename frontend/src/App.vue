<script setup lang="ts">
import { ref } from "vue";
import Tasks from "./components/Tasks.vue";
import NewTaskDialog from "./components/NewTaskDialog.vue";
import { Task } from "./types";
import { defaultTask } from "./common/constants";

const isDialogOpen = ref(false);
const dialogTask = ref({} as Task);

const handleOpenDialogCreate = (task: Task) => {
  console.log('handleOpenDialogCreate:', task);
  dialogTask.value = {} as Task;
  isDialogOpen.value = true;
};

const handleOpenDialogEdit = (task: Task) => {
  console.log('handleOpenDialogEdit:', task);
  dialogTask.value = { ...task} as Task;
  isDialogOpen.value = true;
};

const handleCloseDialog = () => {
  dialogTask.value = defaultTask;
  isDialogOpen.value = false;
};
</script>
<template>
  <NewTaskDialog
    :open="isDialogOpen"
    :task="dialogTask"
    @close-dialog="handleCloseDialog"
  />
  <div>
    <header>
      <div class="task-title">
        <span><img src="/Logo.svg" alt="Task Board" /></span>
        <div>
          <p class="title">My Task Board</p>
          <p class="description" style="font-weight: 400; text-align: start">
            Tasks to keep organized
          </p>
        </div>
        <span><img src="/Edit_duotone.svg" alt="Task Board" /></span>
      </div>
    </header>

    <main>
      <Tasks @open-dialog-edit="handleOpenDialogEdit"/>
    </main>
  </div>
</template>

<style scoped>
.task-title {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
}
</style>
