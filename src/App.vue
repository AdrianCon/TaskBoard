<script setup lang="ts">
import Tasks from "./components/Tasks.vue";
</script>
<template>
  <div>
    <header>
      <div class="task-title">
        <span><img src="/Logo.svg" alt="Task Board" /></span>
        <div>
          <p class="title">My Task Board</p>
          <p class="description" style="font-weight: 400">
            Tasks to keep organised
          </p>
        </div>
        <span><img src="/Edit_duotone.svg" alt="Task Board" /></span>
      </div>
    </header>

    <main>
      <Tasks />
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
