<template>
  <li class="mb-3 shadow-md rounded-lg border w-full h-10 h-44">
      <div :style="{ 'background-color': user.color }" class="h-20 w-full text-center">
        <p
          class="text-center font-semibold capitalize text-white text-2xl pt-3">
          {{ user.name }}
        </p>
        <small class="text-center capitalize text-white">last visited. 7 hours ago.</small>
      </div>
      <div class="bg-white h-24 rounded-lg">
      </div>
  </li>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => ({}),
    },
    data() {
      return {};
    },
  },
};
</script>

<style>
</style>