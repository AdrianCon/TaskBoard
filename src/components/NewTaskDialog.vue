<script setup lang="ts">
import { onMounted, ref } from "vue";
import Box from "./Box.vue";

const dialog = ref<HTMLDialogElement>();

const props = defineProps({
  open: {
    type: Boolean,
    default: true,
  },
});

const visible = ref(false);

const showModal = () => {
  dialog.value?.showModal();
  visible.value = true;
};

defineExpose({
  show: showModal,
  close: (returnVal?: string): void => dialog.value?.close(returnVal),
  visible,
});

onMounted(() => {
  dialog.value?.showModal();
});
</script>

<template>
  <dialog ref="dialog" @close="visible = false">
    <div class="dialog-header">
      <p class="task-title">Task Details</p>
      <Box>
        <img src="/close_ring_duotone-1.svg" alt="" />
      </Box>
    </div>
    <form
      v-if="visible"
      method="dialog"
      :class="{
        [props.classes]: props.classes,
      }"
    >
      <slot />
    </form>
  </dialog>
</template>

<style scoped>
dialog {
  margin: 10% auto;
  width: 90%;
  /* max-width: 350px; */
  background-color: #fff;
  padding: 17px;
  border: 0;
  border-radius: 10px;
  position: absolute;
}
dialog::backdrop {
  background: #00000099;
}
.dialog-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.description {
  color: black;
  font-weight: 400;
  width: fit-content;
}
</style>
