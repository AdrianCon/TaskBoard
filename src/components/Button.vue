<template>
  <button class="button" v-bind:style="{backgroundColor: color}">
    <slot/>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    type: {
      type: String,
      default: "button",
    },
    color: {
      type: String,
      default: "#3662e3",
    }
  },
  handleClick() {
    this.$emit('click');
  }
}
</script>

<style scoped>
.button {
  background-color: var(--blue);
  border: none;
  border-radius: 50px;
  color: white;
  padding: 10px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}
</style>