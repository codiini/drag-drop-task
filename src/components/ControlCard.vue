<template>
  <li class="control-card p-4 mb-3 flex justify-between items-center bg-white rounded-md shadow-md cursor-move border border-white">
    <div class="w-30 flex items-center justify-between">
      <div :style="{'background-color': user.color}" class="rounded-md h-14 w-14"></div>
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

<style scoped>
.control-card.moving-card{
  background: #f7fafc;
  border-bottom: 4px solid #000;
  border-radius: 0;
}
</style>