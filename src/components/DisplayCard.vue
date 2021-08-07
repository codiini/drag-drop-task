<template>
  <li class="display-card mb-3 shadow-md border w-full h-10 h-44 bg-white cursor-move">
      <div :style="{ 'background-color': user.color }" class="top-color h-20 w-full text-center">
        <p
          class="text-center font-semibold capitalize text-white text-2xl pt-3">
          {{ user.name }}
        </p>
        <small class="text-center capitalize text-white">last visited. 7 hours ago.</small>
      </div>
      <div class="bottom-color bg-white h-24 rounded-lg">
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
.top-color, .bottom-color, .display-card{
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
}
</style>