<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <div
    v-if="isOpen"
    class="backdrop-blur-xl bg-slate-500/30 dark:bg-custom-dark/30 modal-overlay flex justify-center"
    @click="close"
  >
    <div class="modal-content flex align-middle justify-center" @click.stop>
      <button
        class="border rounded text-white border-white leading-none hover:border-transparent hover:text-white hover:bg-red-500 md:block md:flex-auto my-1 text-center block text-sm px-4 py-2 close_button"
        @click="close"
      >
        X
      </button>
      <img :alt="imageUrl" :src="imageUrl" class="model-image" />
    </div>
  </div>
</template>

<script setup>
import { defineEmits, defineProps } from "vue";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["close"]);

const close = () => {
  emit("close");
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  position: relative;
  max-width: 50%;
  /* max-height: 60%; */
  button {
    position: absolute;
    top: 0;
    right: 0;
  }
  .modal-image {
    max-width: 96%;
    /* max-height: 96%; */
  }
}
</style>
