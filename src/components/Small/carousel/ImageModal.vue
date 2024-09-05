<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <div
    v-if="isOpen"
    class="backdrop-blur-xl bg-slate-500/30 dark:bg-custom-dark/30 modal-overlay flex justify-center"
    @click="close"
  >
    <div class="modal-content flex align-middle justify-center" @click.stop>
      <img :alt="imageUrl" :src="imageUrl" class="modal-image" />
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

.modal-image {
  max-width: 96%;
  max-height: 96%;
}

.modal-content {
  position: relative;
}
</style>
