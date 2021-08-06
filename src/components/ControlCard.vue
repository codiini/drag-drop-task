<template>
  <li class="p-4 mb-3 flex justify-between items-center bg-white shadow-md rounded-lg cursor-move border border-white">
    <div class="w-30 flex items-center justify-between">
      <div :style="{'background-color': user.color}" class=" h-12 w-12"></div>
      <div class="flex items-center">
        <p class="ml-2 text-gray-700 font-semibold capitalize">
          {{ user.name }}
        </p>
      </div>
    </div>
    <div class="flex">
      <button
        aria-label="Delete user"
        class="p-1 text-red-500"
        @click="deleteCard(user)"
      >
        <Trash2Icon/>
      </button>
    </div>
  </li>
</template>
<script>
import { Trash2Icon } from "vue-feather-icons";
export default {
  components: {
    Trash2Icon,
  },
  props: {
    user: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
   deleteCard(card) {
      this.$emit('deleteCard', card);
    },
  },
};
</script>
