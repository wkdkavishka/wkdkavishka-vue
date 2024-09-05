<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <div
    v-if="isOpen"
    class="backdrop-blur-xl bg-slate-500/30 dark:bg-custom-dark/30 modal-overlay flex justify-center"
    @click="close"
  >
    <div class="modal-content flex align-middle justify-center" @click.stop>
      <NameCardPlus
        :description="description"
        :git="git"
        :image="image"
        :linkedin="linkedin"
        :name="name"
        :title="title"
        :x="x"
      />
    </div>
  </div>
</template>

<script setup>
import { defineEmits, defineProps } from "vue";
import NameCardPlus from "@/components/Small/NameCardPlus.vue";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  name: {
    type: String,
    default: "name",
    required: true,
  },
  title: {
    type: String,
    required: true,
    default: "title",
  },
  git: {
    type: String,
    required: true,
    default: "git link",
  },
  x: {
    type: String,
    required: true,
    default: "x link",
  },
  linkedin: {
    type: String,
    required: true,
    default: "linkedin link",
  },
  image: {
    type: String,
    required: true,
    default: "@/assets/images/dk-logo.jpg",
  },
  description: {
    type: String,
    default: "Some description",
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
  max-width: 90%;
  max-height: 90%;
}

.modal-content {
  position: relative;
}
</style>
