<script setup lang="ts">
import { ref, defineProps, watch, onMounted, reactive, shallowRef, toRefs, nextTick } from "vue";
import IconBox from "./IconBox.vue";
import Button from "./Button.vue";
import StatusButtons from "./StatusButtons.vue";
import { emojis, defaultTask } from "../common/constants";
import { Task } from "../types";

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
  task: {
    type: Object as () => Task,
    default: defaultTask,
  },
});

const dialog = ref<HTMLDialogElement>();
const emit = defineEmits(["close-dialog"]);
const { task } = toRefs(props);
const form = ref(task.value);


const showModal = () => {
  dialog.value?.showModal();
};

const closeModal = () => {
  dialog.value?.close();
  emit("close-dialog", false);
};

const handleSelectedIcon = (icon: number) => {
  form.value.icon = icon;
};

const handleSelectedStatus = (status: number) => {
  form.value.status = status;
};

const handleSubmit = (e: Event) => {
  e.preventDefault();
  console.log(form);
};

watch(
  () => props.open,
  (value: Boolean) => {
    if (value) {
      showModal();
    } else {
      closeModal();
    }
  }
);

watch(
  () => props.task,
  (value: Task) => {
    form.value = value;
  }
);
</script>

<template>
  <dialog ref="dialog" @close="closeModal">
    <div class="dialog-header">
      <p class="task-title">Task Details</p>
      <IconBox @click="closeModal">
        <img src="/close_ring_duotone-1.svg" alt="" />
      </IconBox>
    </div>
    <form
      class="form"
      v-on:submit="handleSubmit"
    >
      <div class="form-field">
        <label class="input-label" for="task-name">Task Title</label>
        <input
          :value="form.title ?? ''"
          type="text"
          id="task-name"
          name="task-name"
          placeholder="Enter task name"
          @input="event => form.title = event.target.value"
        />
      </div>
      <div class="form-field">
        <label class="input-label" for="task-description">Task Description</label>
        <textarea
          :value="form.description ?? ''"
          id="task-description"
          name="task-description"
          placeholder="Enter a short description"
          rows="10"
          @input="event => form.description = event.target.value"
        />
      </div>
      <div class="form-field">
        <label class="input-label" for="task-date">Icon</label>
        <div class="icons">
        <div v-for="(emoji, index) in emojis" :key="index">
            <IconBox
              :index="index"
              @selected="handleSelectedIcon"
              :selected="form.icon == index"
            >
              <p>{{ emoji }}</p>
            </IconBox>
          </div>
        </div>
      </div>
      <div class="form-field">
        <label class="input-label" for="task-time">Status</label>
        <StatusButtons
          :selectedStatus="form.status"
          @selected-status="handleSelectedStatus"
        />
      </div>
      <div class="form-buttons">
        <Button color="gray">Delete <img src="/Trash.svg" @click="handleSubmit"/></Button>
        <Button>Save <img src="/Done_round.svg" @click="handleSubmit"/></Button>
      </div>
    </form>
  </dialog>
</template>

<style scoped>
dialog {
  margin: auto;
  width: 40%;
  max-width: 620px;
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
.form{
  display: flex;
  flex-direction: column;
  gap: 1rem;

}
.form-field {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
}
.icons{
  display: flex;
  flex-direction: row;
  gap: 1rem;
}
.form-buttons{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
}
@media (max-width: 768px){
  dialog{
    width: 90%;
  }
}
</style>
